"use client";

import { useEffect, useState } from "react";

const cities = [
  { name: "New York", timeZone: "America/New_York" },
  { name: "Londres", timeZone: "Europe/London" },
  { name: "Paris", timeZone: "Europe/Paris" },
  { name: "Tokyo", timeZone: "Asia/Tokyo" },
] as const;

const widgetFont = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif';

export function WorldClocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, reduced ? 60_000 : 1_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ fontFamily: widgetFont }}>
      {cities.map((city) => {
        const reading = now ? readCity(now, city.timeZone) : null;
        return (
          <li key={city.timeZone}>
            <article
              className="flex h-full flex-col items-center rounded-[22px] border border-[#e5e5ea] bg-white px-3 pb-3.5 pt-3"
              aria-label={reading ? `${city.name}, ${reading.spoken}` : city.name}
            >
              <p className="w-full text-center text-[15px] font-semibold leading-none tracking-tight text-[#1c1c1e]">{city.name}</p>
              <Clock face={reading?.face ?? { hour: 0, minute: 0, second: 0 }} live={Boolean(reading)} />
              <p className="text-center text-[12px] leading-none text-[#8e8e93]">{reading?.caption ?? "Aujourd’hui"}</p>
            </article>
          </li>
        );
      })}
    </ul>
  );
}

function Clock({ face, live }: { face: Face; live: boolean }) {
  const hourAngle = ((face.hour % 12) + face.minute / 60) * 30;
  const minuteAngle = (face.minute + face.second / 60) * 6;
  const secondAngle = face.second * 6;
  return (
    <svg viewBox="0 0 100 100" className="my-2.5 h-[4.75rem] w-[4.75rem]" aria-hidden="true">
      <circle cx="50" cy="50" r="47.5" fill="#f5f5f7" stroke="#d1d1d6" strokeWidth="1" />
      {Array.from({ length: 12 }, (_, index) => {
        const angle = (index * Math.PI) / 6;
        const major = index % 3 === 0;
        const inner = major ? 36 : 41;
        return (
          <line
            key={index}
            x1={50 + Math.sin(angle) * inner}
            y1={50 - Math.cos(angle) * inner}
            x2={50 + Math.sin(angle) * 45}
            y2={50 - Math.cos(angle) * 45}
            stroke="#1c1c1e"
            strokeWidth={major ? 2.2 : 1.1}
            strokeLinecap="round"
          />
        );
      })}
      <Hand angle={hourAngle} length={22} width={3.4} />
      <Hand angle={minuteAngle} length={32} width={2.2} />
      {live ? <Hand angle={secondAngle} length={36} tail={12} width={1} color="#ff3b30" /> : null}
      <circle cx="50" cy="50" r="2.4" fill="#1c1c1e" />
      {live ? <circle cx="50" cy="50" r="1.1" fill="#ff3b30" /> : null}
    </svg>
  );
}

function Hand({
  angle,
  length,
  width,
  tail = 0,
  color = "#1c1c1e",
}: {
  angle: number;
  length: number;
  width: number;
  tail?: number;
  color?: string;
}) {
  const rad = (angle * Math.PI) / 180;
  return (
    <line
      x1={50 - Math.sin(rad) * tail}
      y1={50 + Math.cos(rad) * tail}
      x2={50 + Math.sin(rad) * length}
      y2={50 - Math.cos(rad) * length}
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
    />
  );
}

type Face = { hour: number; minute: number; second: number };

function readCity(now: Date, timeZone: string) {
  const city = parts(now, timeZone);
  const local = parts(now, Intl.DateTimeFormat().resolvedOptions().timeZone);
  const cityOffset = offsetMinutes(now, timeZone);
  const localOffset = -now.getTimezoneOffset();
  const hours = Math.round((cityOffset - localOffset) / 60);
  const dayDelta = Math.round((dateUtc(city) - dateUtc(local)) / 86_400_000);
  const day = dayDelta > 0 ? "Demain" : dayDelta < 0 ? "Hier" : "Aujourd’hui";
  const sign = hours < 0 ? "−" : "+";
  const caption = `${day}, ${sign}${Math.abs(hours)} h`;
  const spoken = `${String(city.hour).padStart(2, "0")} h ${String(city.minute).padStart(2, "0")}, ${caption}`;
  return { face: { hour: city.hour, minute: city.minute, second: city.second }, caption, spoken };
}

function parts(date: Date, timeZone: string) {
  const bag: Record<string, string> = {};
  for (const part of new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(date)) {
    bag[part.type] = part.value;
  }
  return {
    year: Number(bag.year),
    month: Number(bag.month),
    day: Number(bag.day),
    hour: Number(bag.hour) % 24,
    minute: Number(bag.minute),
    second: Number(bag.second),
  };
}

function offsetMinutes(date: Date, timeZone: string) {
  const zoned = parts(date, timeZone);
  const asUtc = Date.UTC(zoned.year, zoned.month - 1, zoned.day, zoned.hour, zoned.minute, zoned.second);
  return Math.round((asUtc - date.getTime()) / 60_000);
}

function dateUtc(value: { year: number; month: number; day: number }) {
  return Date.UTC(value.year, value.month - 1, value.day);
}

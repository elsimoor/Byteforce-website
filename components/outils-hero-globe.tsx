"use client";

import { EarthGlobe } from "@/globe component/EarthGlobe";
import styles from "@/globe component/TechnologyCard.module.css";

export function OutilsHeroGlobe() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-[140px] -bottom-[340px] h-[560px] w-[560px] lg:top-3 lg:right-[-298px] lg:bottom-auto lg:h-[1070px] lg:w-[1070px]">
        <EarthGlobe className={styles.globe} />
      </div>
    </div>
  );
}

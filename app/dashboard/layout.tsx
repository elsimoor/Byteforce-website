import { notFound } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") notFound();
  return children;
}

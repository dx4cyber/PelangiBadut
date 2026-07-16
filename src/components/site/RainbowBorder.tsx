import type { ReactNode } from "react";

export function RainbowBorder({
  children,
  className = "",
  radius = "rounded-3xl",
}: {
  children: ReactNode;
  className?: string;
  radius?: string;
}) {
  return (
    <div className={`relative ${radius} p-[1.5px] bg-[linear-gradient(135deg,rgba(251,191,36,0.55),rgba(56,189,248,0.55),rgba(232,121,249,0.45),rgba(52,211,153,0.5))] ${className}`}>
      <div className={`${radius} bg-white`}>{children}</div>
    </div>
  );
}

// 20th anniversary celebration window, 9–19 November (Spain time)
export const ANNIVERSARY_START = new Date("2026-11-09T00:00:00+01:00");
export const ANNIVERSARY_END = new Date("2026-11-20T00:00:00+01:00");

const DAY_MS = 24 * 60 * 60 * 1000;

export type CountdownKey =
  | "anniversary.countdown.startsIn"
  | "anniversary.countdown.startsTomorrow"
  | "anniversary.countdown.daysLeft"
  | "anniversary.countdown.lastDay";

// Days are counted by calendar day boundaries in Spain time, since both dates are midnights
export function getCountdown(now: Date): { key: CountdownKey; n: number } | null {
  if (now >= ANNIVERSARY_END) return null;
  if (now < ANNIVERSARY_START) {
    const n = Math.ceil((ANNIVERSARY_START.getTime() - now.getTime()) / DAY_MS);
    return { key: n === 1 ? "anniversary.countdown.startsTomorrow" : "anniversary.countdown.startsIn", n };
  }
  const n = Math.ceil((ANNIVERSARY_END.getTime() - now.getTime()) / DAY_MS);
  return { key: n === 1 ? "anniversary.countdown.lastDay" : "anniversary.countdown.daysLeft", n };
}

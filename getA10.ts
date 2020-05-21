import { A10, A10s } from "./a10.ts";

export const getA10 = (name?: string): string => {
  return (A10s.find((c) => c.name == name) ||
    A10s[Math.floor(Math.random() * A10s.length)]).body.join("\n");
};

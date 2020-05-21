import { A10, A10s } from "./a10.ts";

export const A10API = (name?: string): string => {
  return (A10s.find((c) => c.name == name) ||
    A10s[Math.floor(Math.random() * A10s.length)]).body.join("\n");
};

console.log(A10API("chullan"));

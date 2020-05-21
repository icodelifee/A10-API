import { a10Chullan } from "./images/chullan.ts";
import { lucifer } from "./images/lucifer.ts";
import { a10inRE } from "./images/bike.ts";
import { a10wGun } from "./images/withgun.ts";

export interface A10 {
  name: string;
  body: Array<string>;
}

export const A10s: Array<A10> = [
  a10Chullan,
  lucifer,
  a10inRE,
  a10wGun,
];

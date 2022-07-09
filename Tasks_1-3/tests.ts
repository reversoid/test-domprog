import { findUnique } from "./functions";
console.log(
  "unique elements",
  findUnique([1, 2, 2, 3, 3, 3, 3, 3, 1, 1, 1, 2, 6, 6, 8, 1, 1, 2, 3, 1000])
);

import { findMissing } from "./functions";
console.log("\nmissing elements", findMissing([3, 1, 2, 5]));

import { reversePrint } from "./functions";
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
}};
console.log('\nlinked list reversed:');
reversePrint(list);

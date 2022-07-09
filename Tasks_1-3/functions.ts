export function findUnique(list: Array<number>) {
  const result = new Set<number>();
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (!result.has(element)) result.add(element);
  }
  return result;
}

export function findMissing(list: Array<number>) {
  const sortedList = [...list].sort();
  for (let i = 0; i < sortedList.length; i++) {
    const element = sortedList[i];
    const expectedNumber = i + 1;

    if (element !== expectedNumber) return expectedNumber;
  }
  return null;
}

export interface MyNode {
  value: number;
  next: MyNode | null;
}
export function reversePrint(node: MyNode) {
    if (node.next) reversePrint(node.next)
    console.log(node.value);
}


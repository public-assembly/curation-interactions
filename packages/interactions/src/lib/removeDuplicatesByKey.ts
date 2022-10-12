export function removeDuplicatesByKey(array: any, key: any) {
  return [
    ...new Map(
      /* @ts-ignore */
      array.map((x) => [key(x), x])
    ).values(),
  ]
}

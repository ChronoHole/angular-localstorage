export function arraysUnion<T>(
  arrays: Array<T[]>,
  keyToUnion: keyof T
): Array<T> {
  const map = new Map();
  arrays.forEach((array) => {
    array.forEach((object) => {
      map.set(object[keyToUnion], object);
    });
  });
  return [...map.values()];
}

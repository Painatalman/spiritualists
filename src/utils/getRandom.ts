function getRandom<T>(list: T[]) {
  if (list.length === 0)
    throw new Error("cannot get a random item from an empty list");
  return list[Math.floor(Math.random() * list.length)];
}

export default getRandom;

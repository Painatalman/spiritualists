function getUniqueRandomValues<T>(content: T[], quantity: number): T[] {
  const contentCopy = [...content];
  const selectedItems: T[] = [];

  for (let i = 0; i < quantity; i++) {
    const randomIndex = Math.floor(Math.random() * contentCopy.length);

    selectedItems.push(contentCopy[randomIndex]);
    contentCopy.splice(randomIndex, 1);
  }

  return selectedItems;
}

export default getUniqueRandomValues;

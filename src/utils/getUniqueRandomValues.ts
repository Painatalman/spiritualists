function validateParameters<T>(content: T[], quantity: number): void {
  if (quantity === 0 || quantity < 0) {
    throw new Error('Invalid quantity');
  }
  if (content.length < quantity) {
    throw new Error('Invalid quantity (quantity too large)');
  }
}

function getUniqueRandomValues<T>(content: T[], quantity: number): T[] {
  validateParameters<T>(content, quantity);
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

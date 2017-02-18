import ContentOptions from "~/types/ContentOptions";

function getTypeAndQuantity(code: string): [string, number] {
  const matches = /\$([a-zA-Z]+)\#(\d+)/.exec(code);

  if (!matches) throw new Error(`invalid code: "${code}"`);

  const [_fullMatch, type, quantity] = matches;

  return [type, +quantity];
}

function parseContentCode(code: string): ContentOptions {
  const [type, quantity] = getTypeAndQuantity(code);

  return {
    type,
    quantity: +quantity,
  };
}

export default parseContentCode;

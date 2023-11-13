export function getProductName(str) {
  if (!str) return ""

  const splittedWords = str.split("/");
  const fullName = splittedWords[splittedWords.length - 1];
  const nameOnly = fullName.split(".")[0];
  const capitalized = nameOnly[0].toUpperCase() + nameOnly.slice(1);
  const replacedWithSpace = capitalized.replace("-", " ")
  return replacedWithSpace;
}

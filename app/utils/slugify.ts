export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD") // pour enlever les accents
    .replace(/[\u0300-\u036f]/g, "") // supprime les accents restants
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // remplace les espaces et caractères spéciaux par -
    .replace(/^-+|-+$/g, ""); // supprime les tirets en trop au début/fin
}

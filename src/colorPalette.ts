interface IGenerateColors {
  baseColor: number[];
  numVariants: number;
}
export const generateColors = ({ baseColor, numVariants }: IGenerateColors) => {
  const variants = [];
  for (let i = 0; i < numVariants; i++) {
    const lightness = (i / (numVariants - 1)) * 100;
    const value = `oklch(${lightness}% ${baseColor[1]} ${baseColor[2]})`;
    variants.push(value);
  }
  return variants;
};

// Define the base color in oklch format
const baseColor: number[] = [75, 0.2, 180]; // Example base color

// Get the number of colors

const names = [
  "Ruby Red",
  "Sapphire Blue",
  "Emerald Green",
  "Amethyst Purple",
  "Topaz Yellow",
  "Coral Pink",
  "Onyx Black",
  "Ivory White",
  "Turquoise Teal",
  "Citrine Orange",
  "Cobalt Violet",
  "Garnet Maroon",
];

// Generate color variations
export const colorVariants = generateColors({ baseColor, numVariants: 12 });

// interface IGenerateColors {
//   names: string[];
// }
// const generatePalette = (names: string[]) => {
//   const colors = [];
//   for (let i = 0; i < names.length; i++) {
//     colors.push(generateColors({ baseColor, numVariants: 12, name: names[i] ?? "missing name" }));
//   }
//   return colors;
// };

// export const colorPalette = generatePalette(names);

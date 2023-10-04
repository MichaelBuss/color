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

export const colorNames = [
  "Fiery Red",
  "Sunset Orange",
  "Golden Glow",
  "Amber Radiance",
  "Sunshine Yellow",
  "Fresh Spring Green",
  "Verdant Meadow",
  "Aqua Blue",
  "Skyward Horizon",
  "Royal Blue",
  "Regal Purple",
  "Deep Crimson",
];

import { cx, cva } from "../cva.config";
export const colors = ["red", "blue", "green", "yellow", "purple", "pink"] as const;
export type Color = (typeof colors)[number];

export const cvaColor = cva({
  variants: {
    srgb: {
      red: "bg-srgb-red",
      green: "bg-srgb-green",
      blue: "bg-srgb-blue",
      yellow: "bg-srgb-yellow",
      cyan: "bg-srgb-cyan",
      purple: "bg-srgb-purple",
      pink: "bg-srgb-pink",
    },
    p3: {
      red: "bg-p3-red",
      green: "bg-p3-green",
      blue: "bg-p3-blue",
      yellow: "bg-p3-yellow",
      gray: "bg-p3-cyan",
      purple: "bg-p3-purple",
      pink: "bg-p3-pink",
    },
  },
});

export const colors = ["red", "blue", "green", "yellow", "purple", "pink"] as const;
export type Color = (typeof colors)[number];

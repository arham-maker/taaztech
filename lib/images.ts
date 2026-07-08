export function img(path: string) {
  return `/images/${path}`;
}

export const logos = {
  black: img("logo_black.png"),
  white: img("logo_white.png"),
  footer: img("logo_white.png"),
};

export const capitalizeWord = (s: string) => {
  return s[0].toUpperCase() + s.slice(1);
};

export const formatDate = (d: Date) => {
  return d.toISOString().split("T")[0];
};
import { capitalizeWord } from "./format";

export const isToday = (d: Date) => {
  const today = new Date();
  return (
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate()
  );
};

export const getCurrentMonth = () => {
  const monthName = new Date().toLocaleString("pt-BR", { month: "long" });
  return capitalizeWord(monthName);
};
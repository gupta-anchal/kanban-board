// utils/generateInitials.js
export const generateInitials = (name) => {
  if (!name) return "";
  const nameParts = name.split(" ");
  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
  return initials;
};

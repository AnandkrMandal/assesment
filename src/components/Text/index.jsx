import React from "react";

const sizeClasses = {
  txtOutfitSemiBold25BlueA700: "font-outfit font-semibold",
  txtOutfitSemiBold25: "font-outfit font-semibold",
  txtOutfitMedium22: "font-medium font-outfit",
  txtOutfitSemiBold28: "font-outfit font-semibold",
  txtOutfitBold20: "font-bold font-outfit",
  txtOutfitSemiBold40Deeporange300: "font-outfit font-semibold",
  txtOutfitSemiBold40: "font-outfit font-semibold",
  txtOutfitSemiBold22BlueA700: "font-outfit font-semibold",
  txtOutfitBold35: "font-bold font-outfit",
  txtOutfitMedium20: "font-medium font-outfit",
  txtOutfitSemiBold22: "font-outfit font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

import React from "react";
import Icon from "./Icon";

const SelectBase = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {children}
      <Icon
        icon="dropdown"
        size={12}
        className="absolute text-grey right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>
  );
};

export default SelectBase;

import React, { ReactNode } from "react";

const CardFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p className="text-gray-600 text-xs">{children}</p>
    </div>
  );
};

export default CardFooter;

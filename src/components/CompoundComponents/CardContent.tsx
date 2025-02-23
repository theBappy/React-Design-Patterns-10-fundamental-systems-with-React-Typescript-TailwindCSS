import { ReactNode } from "react";

const CardContent = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p className="text-gray-500 text-sm">{children}</p>
    </div>
  );
};

export default CardContent;

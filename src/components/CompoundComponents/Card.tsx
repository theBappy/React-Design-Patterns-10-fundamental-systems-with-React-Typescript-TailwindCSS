import { ReactNode } from "react";
import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";


const Card = ({ children }: {children: ReactNode}) => {
  return (
    <div className="border bg-white rounded-lg shadow-lg w-[20rem] p-4">
        {children}
    </div>
  );
};

Card.Title = CardTitle
Card.Content = CardContent
Card.Footer = CardFooter

export default Card;

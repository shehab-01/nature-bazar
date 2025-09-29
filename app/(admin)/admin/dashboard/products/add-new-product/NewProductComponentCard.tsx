import React from "react";
import { cn } from "@/lib/utils";

const NewProductComponentCard = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <div className={cn("bg-[#f9f9f9] p-4 rounded-xl", className)}>
      <h2 className="font-semibold ">{title}</h2>
      {children}
    </div>
  );
};

export default NewProductComponentCard;

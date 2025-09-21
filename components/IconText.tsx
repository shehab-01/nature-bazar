import React from "react";

const IconText = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-3 group py-5">{children}</div>;
};

export default IconText;

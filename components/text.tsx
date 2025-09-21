import { cn } from "@/lib/utils";

const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn("font-semibold text-nature_bazar_light_green", className)}
    >
      {children}
    </h3>
  );
};

export { SubTitle };

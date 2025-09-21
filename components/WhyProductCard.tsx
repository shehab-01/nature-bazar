import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyProductCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Card className="rounded-sm bg-nature_light_white/60 shadow-none">
        <CardHeader>
          <CardTitle>১০০% প্রাকৃতিক উপাদানে তৈরি</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{children}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhyProductCard;

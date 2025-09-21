"use client";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardTitle } from "@/components/ui/card";

import product_img_sm from "../images/product/product_sm.webp";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="py-5">
      <Card className="bg-[#F9FAFB] rounded-sm border-black ">
        <CardTitle className="px-4">
          <RadioGroup defaultValue="50">
            <div className="flex items-center space-x-2 ">
              <RadioGroupItem value="50" id="option-one" />
              <div className="flex items-center space-x-3">
                <Image
                  src={product_img_sm}
                  alt="product images"
                  className=" w-20 h-20 rounded-sm"
                />
                <div className="flex flex-col space-y-2.5">
                  <h2>মেথি-মিক্স </h2>
                  <h2>৳1,200 </h2>
                  <p className="font-normal text-sm">Quantity: 1</p>
                </div>
              </div>
            </div>
          </RadioGroup>
        </CardTitle>
      </Card>
    </div>
  );
};

export default ProductCard;

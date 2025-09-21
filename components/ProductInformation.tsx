import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductInformation = () => {
  return (
    <div className="px-10 cursor-pointer">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">
            কেন আপনি গ্যাস্ট্রো-জেন পাউডারটি কিনবেন?
          </AccordionTrigger>
          <AccordionContent className="text-sm">
            ১০০% প্রাকৃতিক উপাদানে তৈরি গ্যাস্ট্রো-জেন, মেথি সহ ১২ টি প্রাকৃতিক
            উপাদান দিয়ে তৈরি। কোন প্রকার ক্যামিক্যাকেল এর অস্তিত্ব প্রমাণ করতে
            পারলে নগদ ১০০,০০০ টাকা পুরষ্কার প্রদান করা হবে।
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductInformation;

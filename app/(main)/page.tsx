import React from "react";
import Container from "@/components/Container";
import { BannerCarousel } from "@/components/BannerCarousel";
import { Button } from "@/components/ui/button";
import OrderForm from "@/components/OrderForm";
import ProductCard from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";
import ProductInformation from "@/components/ProductInformation";
import WhyProductCard from "@/components/WhyProductCard";
import { Check } from "lucide-react";

const Home = () => {
  return (
    <Container className="bg-white">
      <div className="min-h-full">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="pt-10 text-2xl font-semibold text-nature_bazar_red">
            মেথি-মিক্স | Methi Mix
          </h2>
          <BannerCarousel />
          <div className="py-10 w-full flex justify-center">
            <Button
              variant="nature_btn"
              size="lg"
              className="bg-nature_yellow hover:bg-nature_yellow/90 w-full md:w-auto"
            >
              এখনই অর্ডার করুন
            </Button>
          </div>
          <div className="bg-nature_dark_green text-white font-bold w-full text-center rounded-sm p-2 ">
            <p>প্রয়োজনে কল করুন - 01345-151716</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  border-2 border-nature_light_white rounded-sm mt-5">
          <div className="p-2 md:p-10 order-2 md:order-1">
            <div className="pt-4 border-2 broder-gray-400 rounded-sm text-center px-5">
              <h2 className="font-bold text-2xl">
                অর্ডার করতে নিচের তথ্যগুলি দিন
              </h2>
              <div className="">
                <OrderForm />
              </div>
            </div>
          </div>
          <div className="p-2 md:p-10 order-1 md:order-2">
            <div className="pt-4 text-start px-0 md:px-5">
              <h2 className="font-bold text-2xl">পন্য বাছাই করুন</h2>
              <ProductCard />
              <div className="border-2 rounded-sm p-4">
                <div className="flex justify-between">
                  <p className="py-1">মোট</p>
                  <p className="py-1">1200</p>
                </div>
                <div className="flex justify-between">
                  <p className="py-1">ডেলিভারি চার্জ</p>
                  <p className="py-1">50</p>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <p className="py-1">Total</p>
                  <p className="py-1">1250</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="py-4 flex flex-col space-y-2">
          <div className="bg-nature_orange text-white font-bold w-full text-center rounded-sm p-2 ">
            <p>কেন আপনি গ্যাস্ট্রো-জেন পাউডারটি কিনবেন?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
            <WhyProductCard>
              গ্যাস্ট্রো-জেন, মেথি সহ ১২ টি প্রাকৃতিক উপাদান দিয়ে তৈরি। কোন
              প্রকার ক্যামিক্যাকেল এর অস্তিত্ব প্রমাণ করতে পারলে নগদ ১০০,০০০
              টাকা পুরষ্কার প্রদান করা হবে।
            </WhyProductCard>
            <WhyProductCard>
              গ্যাস্ট্রো-জেন, মেথি সহ ১২ টি প্রাকৃতিক উপাদান দিয়ে তৈরি। কোন
              প্রকার ক্যামিক্যাকেল এর অস্তিত্ব প্রমাণ করতে পারলে নগদ ১০০,০০০
              টাকা পুরষ্কার প্রদান করা হবে।
            </WhyProductCard>
            <WhyProductCard>
              গ্যাস্ট্রো-জেন, মেথি সহ ১২ টি প্রাকৃতিক উপাদান দিয়ে তৈরি। কোন
              প্রকার ক্যামিক্যাকেল এর অস্তিত্ব প্রমাণ করতে পারলে নগদ ১০০,০০০
              টাকা পুরষ্কার প্রদান করা হবে।
            </WhyProductCard>
            <WhyProductCard>
              গ্যাস্ট্রো-জেন, মেথি সহ ১২ টি প্রাকৃতিক উপাদান দিয়ে তৈরি। কোন
              প্রকার ক্যামিক্যাকেল এর অস্তিত্ব প্রমাণ করতে পারলে নগদ ১০০,০০০
              টাকা পুরষ্কার প্রদান করা হবে।
            </WhyProductCard>
          </div>
          {/* <ProductInformation /> */}
        </div>
        <div className="flex flex-col space-y-2">
          <div className="bg-nature_dark_green text-white font-bold w-full text-center rounded-sm p-2 ">
            <p>গ্যাস্ট্রিক এর উপসর্গ</p>
          </div>
          <ol className="py-4">
            <li className="text-xl font-normal flex items-center  ">
              <span className="p-2">
                <Check />
              </span>
              খাওয়ার পর পেটে ও বুকে জ্বালাপোড়া হয়
            </li>
            <li className="text-xl font-normal flex items-center  ">
              <span className="p-2">
                <Check />
              </span>
              অতিরিক্ত গ্যাস পেটে জমলে পেট ফাঁপা হয়ে থাকে এবং ঢেঁকুর আসতে থাকে
            </li>
            <li className="text-xl font-normal flex items-center  ">
              <span className="p-2">
                <Check />
              </span>
              হজমে সমস্যা হওয়ার ফলে বমি ভাব হয়
            </li>
            <li className="text-xl font-normal flex items-center  ">
              <span className="p-2">
                <Check />
              </span>
              গ্যাস্ট্রিক এর সমস্যার ফলে রাতে ঘুম ব্যহত হয়
            </li>
            <li className="text-xl font-normal flex items-center  ">
              <span className="p-2">
                <Check />
              </span>
              পেটের অস্থিরতার কারনে কোন কাজে মনোযোগ বসে না
            </li>
            <li className="text-xl font-normal flex items-center  ">
              <span className="p-2">
                <Check />
              </span>
              গ্যাস্ট্রিককে অবহেলা করলে এক সময় আলসার অথবা ইনফেকশেন অথবা
              ক্যান্সার এ পরিণত হয়
            </li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default Home;

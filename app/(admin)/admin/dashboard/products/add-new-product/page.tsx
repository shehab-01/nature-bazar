"use client";
import React, { useState } from "react";
import { ShoppingBasket, PlusCircle, X } from "lucide-react";
import NewProductComponentCard from "./NewProductComponentCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Tiptap from "@/components/rich-text-editor/TipTap";
import Image from "next/image";
import product_1 from "../../../.././../../images/product/product_1.jpg";

const AddNewProduct = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [sku, setSku] = useState("");

  const onChange = (content: string) => {
    setDescription(content);
    console.log(content);
  };

  return (
    <div className="w-full px-5">
      <div className="capitalize inline-flex items-center gap-2 text-2xl mb-6">
        <span>
          <ShoppingBasket />
        </span>
        Add New Product
      </div>

      <div className="grid grid-cols-3 gap-6 w-full auto-rows-min">
        {/* General Information - spans 2 columns */}
        <NewProductComponentCard
          title="General Information"
          className="col-span-2"
        >
          <div className="space-y-6 pt-4">
            {/* Product Names */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="product_nm_en">Product Name</Label>
                <Input
                  type="text"
                  id="product_nm_en"
                  placeholder="Product Name"
                  className="bg-[#EFEFEF]"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="product_nm_bn">Product Name Bangla</Label>
                <Input
                  type="text"
                  id="product_nm_bn"
                  placeholder="Product Name Bangla"
                  className="bg-[#EFEFEF]"
                />
              </div>
            </div>

            {/* SKU and Category */}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="sku">SKU</Label>
                <Input
                  type="text"
                  id="sku"
                  placeholder="Product SKU"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  className="bg-[#EFEFEF]"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="category">Category</Label>
                <Input
                  type="text"
                  id="category"
                  placeholder="Product Category"
                  className="bg-[#EFEFEF]"
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="grid w-full gap-3">
              <Label htmlFor="product_description">Product Description</Label>
              <div className="">
                <Tiptap content={description} onChange={onChange} />
              </div>
            </div>
          </div>
        </NewProductComponentCard>

        {/* Upload Images */}
        <NewProductComponentCard title="Upload Images" className="">
          <div className="space-y-4 pt-4">
            {/* Main Image */}
            <div className="aspect-square w-full">
              <Image
                src={product_1}
                alt="Main product image"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3].map((index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={product_1}
                    alt={`Product image ${index}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors">
                    <X size={12} />
                  </button>
                </div>
              ))}

              {/* Add Image Button */}
              <div className="aspect-square border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer">
                <PlusCircle className="text-gray-400" size={24} />
              </div>
            </div>

            {/* Upload Instructions */}
            <p className="text-sm text-gray-600 text-center">
              Click + to add more images (Max 10)
            </p>
          </div>
        </NewProductComponentCard>

        {/* Price Information */}
        <NewProductComponentCard title="Price & Stock" className="col-span-2">
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 w-full items-center gap-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="regular_price">Regular Price</Label>
                <Input
                  type="number"
                  id="regular_price"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="bg-[#EFEFEF]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="sale_price">Sale Price</Label>
                <Input
                  type="number"
                  id="sale_price"
                  placeholder="0.00"
                  value={salePrice}
                  onChange={(e) => setSalePrice(e.target.value)}
                  className="bg-[#EFEFEF]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="stock_quantity">Stock Quantity</Label>
                <Input
                  type="number"
                  id="stock_quantity"
                  placeholder="0"
                  className="bg-[#EFEFEF]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="stock_status">Stock Status</Label>
                <select
                  id="stock_status"
                  className="flex h-10 w-full rounded-md border border-input bg-[#EFEFEF] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                  <option value="on_backorder">On Backorder</option>
                </select>
              </div>
            </div>
          </div>
        </NewProductComponentCard>

        {/* SEO Settings */}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-8 mb-6">
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          Save as Draft
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Publish Product
        </button>
      </div>
    </div>
  );
};

export default AddNewProduct;

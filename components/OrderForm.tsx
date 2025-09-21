"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, { message: "আপনার নাম লিখুন।" }),
  mbl_number: z.string().min(1, { message: "মোবাইল নাম্বার দিন।" }),
  address: z.string().min(1, { message: "আপনার ঠিকানা লিখুন।" }),
  ordr_note: z.string().optional(),
  delivery_price: z.string().optional(),
});

const OrderForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mbl_number: "",
      address: "",
      ordr_note: "",
      delivery_price: "",
    },
  });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     console.log(values);
  //     //   toast(
  //     //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //     //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
  //     //     </pre>
  //     //   );

  //   } catch (error) {
  //     console.error("Form submission error", error);
  //     //   toast.error("Failed to submit the form. Please try again.");
  //   }
  // }
  const [open, setOpen] = useState(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const { error } = await supabase.from("tb_order").insert(values).single();

    if (error) {
      console.log("Error adding order, ", error);
      return;
    }
    setOpen(true);

    form.reset({
      name: "",
      mbl_number: "",
      address: "",
      ordr_note: "",
      delivery_price: "",
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-sm md:text-xl">
                  নাম
                </FormLabel>
                <FormControl>
                  <Input placeholder="আপনার নাম" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mbl_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-sm md:text-xl">
                  মোবাইল নাম্বার
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="১১ ডিজিট মোবাইল নাম্বার"
                    type=""
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-sm md:text-xl">
                  ঠিকানা
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="আপনার বাসার সম্পুর্ণ  ঠিকানা"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ordr_note"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-sm md:text-xl">
                  অর্ডার নোট
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="স্পেশাল কিছু বলতে চাইলে লেখুন (অপশনাল) "
                    type=""
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="delivery_price"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-semibold text-sm md:text-xl">
                  ডেলিভারি এলাকা
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2 border-2 rounded-sm p-3">
                      <RadioGroupItem value="50" id="option-one" />
                      <div className="flex justify-between w-full">
                        <Label htmlFor="option-one">ঢাকা সিটির ভেতরে</Label>
                        <h3>50</h3>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 border-2 rounded-sm p-3">
                      <RadioGroupItem value="80" id="option-two" />
                      <div className="flex justify-between w-full">
                        <Label htmlFor="option-two">ঢাকা সিটির বাহিরে</Label>
                        <h3>80</h3>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 border-2 rounded-sm p-3">
                      <RadioGroupItem value="100" id="option-three" />
                      <div className="flex justify-between w-full">
                        <Label htmlFor="option-three">ঢাকা জেলার বাহিরে</Label>
                        <h3>100</h3>
                      </div>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <RadioGroup>
          <h3 className="font-semibold">ডেলিভারি এলাকা</h3>
          <div className="flex items-center space-x-2 border-2 rounded-sm p-3">
            <RadioGroupItem value="50" id="option-one" />
            <div className="flex justify-between w-full">
              <Label htmlFor="option-one">ঢাকা সিটির ভেতরে</Label>
              <h3>50</h3>
            </div>
          </div>
          <div className="flex items-center space-x-2 border-2 rounded-sm p-3">
            <RadioGroupItem value="80" id="option-two" />
            <div className="flex justify-between w-full">
              <Label htmlFor="option-two">ঢাকা সিটির বাহিরে</Label>
              <h3>80</h3>
            </div>
          </div>
          <div className="flex items-center space-x-2 border-2 rounded-sm p-3">
            <RadioGroupItem value="100" id="option-three" />
            <div className="flex justify-between w-full">
              <Label htmlFor="option-three">ঢাকা জেলার বাহিরে</Label>
              <h3>100</h3>
            </div>
          </div>
        </RadioGroup> */}
          <Button
            size="lg"
            className="bg-nature_orange w-full font-semibold h-12"
            type="submit"
          >
            অর্ডার কনফার্ম করুন 1,200TK
          </Button>
          <p className="text-sm">
            আমাদের একজন কাস্টমার প্রতিনিধি আপনাকে কল করে আবার কনফার্ম হবে
          </p>
        </form>
      </Form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>অর্ডার সম্পূর্ণ হয়েছে </DialogTitle>
            <DialogDescription>
              ধন্যবাদ! আমাদের একজন প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবে।
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Ok</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrderForm;

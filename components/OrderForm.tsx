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

const formSchema = z.object({
  name_6004397793: z.string().min(1, { message: "আপনার নাম লিখুন।" }),
  name_4326988703: z.string().min(1, { message: "মোবাইল নাম্বার দিন।" }),
  name_8365973883: z.string().min(1, { message: "আপনার ঠিকানা লিখুন।" }),
  name_7691747641: z.string().optional(),
});

const OrderForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_6004397793: "",
      name_4326988703: "",
      name_8365973883: "",
      name_7691747641: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      //   toast(
      //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
      //     </pre>
      //   );
    } catch (error) {
      console.error("Form submission error", error);
      //   toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="name_6004397793"
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
          name="name_4326988703"
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
          name="name_8365973883"
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
          name="name_7691747641"
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

        {/* radio */}
        <RadioGroup>
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
        </RadioGroup>
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
  );
};

export default OrderForm;

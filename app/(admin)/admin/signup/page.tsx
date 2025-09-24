"use client";

import Link from "next/link";
import { any, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { toast } from 'sonner'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabaseClient";
// import { PasswordInput } from '@/components/ui/password-input'
// import { PhoneInput } from '@/components/ui/phone-input'

// import { registerFormSchema } from '@/lib/validation-schemas'

// const formSchema = registerFormSchema

const formSchema = z.object({
  name: z.string().min(1, { message: "Enter your Name" }),
  email: z.email().min(1, { message: "Enter your Email" }),
  phone: z.string().min(1, { message: "Enter your name" }),
  password: z
    .string()
    .min(6, { message: "Enter your Password( atleast 6 characters )" }),
  confirmPassword: z.string().min(1, { message: "Enter your name" }),
});

export default function RegisterPreview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Assuming an async registration function
      // values.role = "user";
      console.log(values);
      // const payload = { ...values, role: "user" };
      // console.log(payload);
      const supabase = createClient();

      const email = values.email;
      const password = values.password;
      const name = values.name;
      const phone = values.phone;
      const role = "user";

      if (password !== values.confirmPassword) {
        console.log("Check password");
        return;
      }

      if (password.length < 6) {
        console.log("Password must be more than 6 characters");
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      const user = data.user;
      if (!user) throw new Error("No user returned from signup");

      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: user.id, name, phone, role }]);

      if (profileError) throw profileError;

      //   toast(
      //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
      //     </pre>,
      //   )
    } catch (error) {
      console.error("Form submission error", error);
      //   toast.error('Failed to submit the form. Please try again.')
    }
  }

  //   return (
  //     <div className="flex min-h-[60vh] items-center justify-center">
  //       <Card className="w-[500px] h-[400px]">
  //         <CardHeader>
  //           <CardTitle>Card Title</CardTitle>
  //           <CardDescription>Card Description</CardDescription>
  //           <CardAction>Card Action</CardAction>
  //         </CardHeader>
  //         <CardContent>
  //           <p>Card Content</p>
  //         </CardContent>
  //         <CardFooter>
  //           <p>Card Footer</p>
  //         </CardFooter>
  //       </Card>
  //     </div>
  //   );
  // }

  return (
    <div className="flex min-h-[65vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm w-[500px] ">
        <CardHeader>
          <CardTitle className="text-2xl">Natura Bazar Register</CardTitle>
          <CardDescription>
            Create a new account by filling out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="name">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="johndoe@mail.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="phone">Phone Number</FormLabel>
                      <FormControl>
                        {/* <PhoneInput {...field} defaultCountry="TR" /> */}
                        <Input
                          id="phone"
                          placeholder="555-123-4567"
                          type="tel"
                          autoComplete="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          placeholder="******"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirm Password Field */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="confirmPassword">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          placeholder="******"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full cursor-pointer">
                  Register
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/admin/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

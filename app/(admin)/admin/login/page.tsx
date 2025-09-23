"use client";

import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
// import { redirect, RedirectType } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
import { login, signup } from "./actions";

const formSchema = z.object({
  email: z.email().min(1, { message: "Enter email" }),
  password: z.string().min(1, { message: "Enter your password" }),
});

export default function LoginPreview() {
  // const router = useRouter();
  // const [error, setError] = useState("");
  // const { refreshProfile } = useAuth()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     const supabase = createClient();
  //     console.log(values);
  //     const email = values.email;
  //     const password = values.password;

  //     const { data, error } = await supabase.auth.signInWithPassword({
  //       email,
  //       password,
  //     });

  //     if (error) {
  //       setError(error.message);
  //       console.log("Error loging in", error);
  //     } else {
  //       console.log("logged in");
  //       router.push("/admin/dashboard");
  //     }
  //   } catch (error) {
  //     console.error("Form submission error", error);
  //     //   toast.error("Failed to submit the form. Please try again.");
  //   }
  // }

  return (
    <div className="flex flex-col min-h-[65vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-sm w-[500px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-8">
              <div className="grid gap-4">
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
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <div className="flex justify-between items-center">
                        <FormLabel htmlFor="password">Password</FormLabel>
                        {/* <Link
                          href="#"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Forgot your password?
                        </Link> */}
                      </div>
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
                {/* {error && (
                  <p className="text-sm text-red-400">
                    Please check Email or Password.
                  </p>
                )} */}
                <Button
                  formAction={login}
                  type="submit"
                  className="w-full cursor-pointer"
                >
                  Login
                </Button>
                {/* <Button variant="outline" className="w-full">
                  Login with Google
                </Button> */}
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/admin/signup" className="underline">
              Sign up
            </Link>
          </div>
          jsuddin02@gmail.com <br />
          123456
        </CardContent>
      </Card>
    </div>
  );
}

"use client";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FormSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email is required",
  }),
});

export default function SimpleNewsletterForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
      <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:block sm:text-4xl">
        Want to receive news and updates?
      </h2>
      <p className="inline text-3xl font-extrabold tracking-tight text-primary sm:block sm:text-4xl">
        Sign up for our newsletter.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 sm:flex">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    
                    className="w-full h-13 px-5 py-3 placeholder-gray-500  sm:max-w-xs border-gray-300 rounded-md"
                  />
                </FormControl>
                <FormDescription>Your personal email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <Button
              type="submit"
              className="w-full h-13 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white"
            >
              Notify me
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

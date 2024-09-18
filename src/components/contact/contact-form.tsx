"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";

interface ContactFormProps {
  className?: string;
  title?: string;
  description?: string;
}

const FormSchema = z.object({
  name: z.string().min(3, {
    message: "Name is required",
  }),
  email: z.string().email().min(3, {
    message: "Email is required",
  }),
  phone: z.string().min(10, {
    message: "Phone is required",
  }),
  subject: z.string().min(3, {
    message: "Subject is required",
  }),
  message: z.string().min(3, {
    message: "Message is required",
  }),
});

function ContactForm({ className, title, description }: ContactFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "w-full max-w-sm bg-white text-black dark:bg-white/10 dark:text-white",
          className
        )}
      >
        <Card className="w-full h-full bg-inherit text-inherit dark:border-slate-600">
          {(title || description) && (
            <CardHeader>
              <CardTitle className="text-2xl text-inherit">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          )}

          <CardContent className="grid gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Personal/company name"
                      {...field}
                      className="h-14"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Personal/company email address"
                      {...field}
                      className="h-14"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Personal/company phone"
                      {...field}
                      className="h-14"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Subject</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Reason for contacting us"
                      {...field}
                      className="h-14"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      id="message"
                      rows={4}
                      {...field}
                      className="h-14"
                      placeholder="Describe your enquiry"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Contact US
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default ContactForm;

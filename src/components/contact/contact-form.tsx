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
import { contactService } from "@/services/contact-service";
import { Loader2 } from "lucide-react";

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
  subject: z.string({ required_error: "Subject is required" }).min(10, {
    message: "Subject must be at least 10 characters",
  }),
  message: z.string({ required_error: "Message is required" }).min(140, {
    message: "Message must be at least 140 characters",
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

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await contactService.createContact(data);

      toast({
        title: "Success",
        description:
          res.message ?? "Your contact request was submitted successfully",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          (error as any).message ?? "Failed to submit request. Try again later",
      });
    }
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
                      rows={10}
                      {...field}
                      placeholder="Describe your enquiry"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="animate-spin mr-2" size={16} />
              ) : null}
              Contact US
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default ContactForm;

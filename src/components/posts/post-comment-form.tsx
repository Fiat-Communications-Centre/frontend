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

interface PostCommentFormProps {
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
  website: z.string().url().optional(),
  comment: z.string().min(3, {
    message: "Comment is required",
  }),
});

function PostCommentForm({
  className,
  title,
  description,
}: PostCommentFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
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
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Website (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="Personal/company website"
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
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Comment</FormLabel>
                  <FormControl>
                    <Textarea
                      id="comment"
                      rows={6}
                      {...field}
                      placeholder="Your Comment"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Post Comment
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default PostCommentForm;

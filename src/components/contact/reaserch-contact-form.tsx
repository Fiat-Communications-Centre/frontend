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

interface ResearchContactFormProps {
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
  projectTitle: z.string().min(3, {
    message: "Project title is required",
  }),
  researchArea: z.string().min(3, {
    message: "Research area is required",
  }),
  projectDescription: z.string().min(3, {
    message: "Description is required",
  }),
  projectStatus: z.string().min(3, {
    message: "Project status is required",
  }),
  budget: z
    .number()
    .min(0, {
      message: "Invalid project budget",
    })
    .optional()
    .default(0),
  attachments: z.any().optional(),
});

function ResearchContactForm({
  className,
  title,
  description,
}: ResearchContactFormProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectTitle: "",
      projectDescription: "",
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
                      id="name"
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
                      id="email"
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
                      id="phone"
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
              name="projectTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Project Title</FormLabel>
                  <FormControl>
                    <Input
                      id="projectTitle"
                      type="text"
                      placeholder="Title of your project"
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
              name="researchArea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Research Area</FormLabel>
                  <FormControl>
                    <Input
                      id="researchArea"
                      type="text"
                      placeholder="Title of your project"
                      {...field}
                      className="h-14"
                      list="research-fields"
                    />
                  </FormControl>
                  <datalist id="research-fields">
                    <option value="Medical and Health Sciences" />
                    <option value="Environmental Science" />
                    <option value="Social Sciences" />
                    <option value="Business and Management" />
                    <option value="Education" />
                    <option value="Engineering and Technology" />
                    <option value="Economics" />
                    <option value="Information Technology and Computer Science" />
                    <option value="Law and Legal Studies" />
                    <option value="Humanities" />
                    <option value="Agricultural and Food Sciences" />
                    <option value="Physics and Mathematics" />
                    <option value="Biological Sciences" />
                    <option value="Chemistry" />
                    <option value="Environmental and Energy Studies" />
                  </datalist>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      id="projectDescription"
                      rows={7}
                      {...field}
                      className="mn-h-14"
                      placeholder="Describe your project"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">
                    Project Budget (Ksh)
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="budget"
                      type="number"
                      placeholder="Project Budget"
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
              name="attachments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Project Attachments</FormLabel>
                  <FormControl>
                    <Input id="attachments" type="file" multiple {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Ready to Submit?
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default ResearchContactForm;

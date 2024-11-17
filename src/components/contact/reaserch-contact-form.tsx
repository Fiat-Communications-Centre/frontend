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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { researchService } from "@/services/research-service";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { researchFields } from "@/config/constants";

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
  title: z.string().min(3, {
    message: "Project title is required",
  }),
  area: z.string().min(3, {
    message: "Research area is required",
  }),
  description: z
    .string({ required_error: "Description is required" })
    .min(140, {
      message: "Description must be at least 140 characters",
    }),
  budget: z.coerce
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
      title: "",
      area: "General Research",
      description: "",
      budget: 0,
      attachments: [],
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      if (data.attachments) {
        data.attachments = Array.from(data.attachments);
      }

      const res = await researchService.createResearchRequest(data);

      toast({
        title: "Success",
        description:
          res.message ?? "Your research request was submitted successfully",
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Project Title</FormLabel>
                  <FormControl>
                    <Input
                      id="title"
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
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Research Area</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select research area" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {researchFields.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      id="description"
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
                    <Input
                      id="attachments"
                      type="file"
                      accept=".pdf, .png, .jpeg, .jpg"
                      multiple
                      onChange={(e) =>
                        form.setValue(
                          "attachments",
                          Array.from(e.target.files ?? [])
                        )
                      }
                    />
                  </FormControl>
                  <FormDescription>Please upload <strong>.pdf, .png, .jpeg, .jpg</strong> files only</FormDescription>

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
              Ready to Submit?
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default ResearchContactForm;

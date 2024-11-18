import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question:
      "What services does FIAT Communications & Consultancy Centre offer?",
    answer:
      "At FIAT Communications & Consultancy Centre, we offer a wide range of services including graphic design, video production, web and mobile development, strategic organizational communication, research, training, and consultancy. We provide comprehensive solutions to meet your communication needs.",
  },
  {
    question: "How can I request a quote for a specific service?",
    answer: "To request a quote, simply visit our Contact page and fill out the inquiry form with your details and specific service requirements. Our team will get back to you promptly with a personalized quote tailored to your needs.",
  },
  {
    question: "Are your services customizable to my specific business requirements?",
    answer: "Absolutely! We understand that every business is unique. Our team is experienced in tailoring our services to meet your specific requirements, ensuring that the solutions we provide align with your goals, brand identity, and target audience.",
  },
  {
    question: "Can you provide examples of your past work?",
    answer: "Certainly! We take pride in showcasing our portfolio of past projects upon request, which highlights our expertise and the quality of our work.",
  },
  {
    question: "Do you offer ongoing support and maintenance for websites and applications?",
    answer: "Yes, we offer ongoing support and maintenance packages to ensure the smooth functioning of your websites and applications. Our team is available to provide technical assistance, updates, and security enhancements to keep your digital assets running optimally.",
  },
  
];
function FaqsAccordion() {
  return (
    <Accordion type="single" defaultValue="faq-0" collapsible className="w-full text-left">
      {faqs.map((item, index) => (
        <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
          <AccordionTrigger className="text-primary font-bold text-lg text-left">{item.question}</AccordionTrigger>
          <AccordionContent className="text-sm">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FaqsAccordion;

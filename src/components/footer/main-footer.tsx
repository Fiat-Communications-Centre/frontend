import { LucideClock, LucideHelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterSubscribeForm } from "./footer-subscribe-form";
import BottomFooter from "./bottom-footer";

function MainFooter() {
  return (
    <footer className="w-full bg-white text-gray-600 dark:bg-black/10 dark:text-gray-400  px-4 border-t-[1px] border-white/20">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-16">
        <div className="flex flex-col space-y-2">
          <Image
            src={"/favicon.ico"}
            width={64}
            height={64}
            className="w-16 object-cover object-center"
            priority
            alt="Logo"
          />
          <p className="text-base md:text-xl flex-1">
            The great explorer of the truth, the master-builder of human
            happiness no one rejects.
          </p>
          <div className="w-full flex justify-start items-center space-x-2">
            <div className="image">
              <LucideHelpCircle className="h-12 w-12" />
            </div>
            <div>
              <h6 className="text-green-400">Need Help?</h6>
              <h2>
                <Link href="/contact">Contact Us</Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="h-16 flex justify-start items-center font-bold text-gray-900 dark:text-white">
            Information
          </h2>
          <ul className="flex-1 flex flex-col space-y-3">
            <li className="hover:text-gray-900 dark:hover:text-white">
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white">
              <Link href={"/services"}>Services</Link>
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white">
              <Link href={"/our-team"}>Our Team</Link>
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white">
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white">
              <Link href={"/faqs"}>FAQs</Link>
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white">
              <Link href={"/downloads"}>Downloads</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="h-16 flex justify-start items-center font-bold text-gray-900 dark:text-white">
            Recent Posts
          </h2>
          <ul className="flex-1 flex flex-col space-y-3">
            <li className="hover:text-gray-900 dark:hover:text-white">
              <div className="flex justify-start items-center space-x-2">
                <div className="image ">
                  <Image
                    width="750"
                    height="420"
                    src="/assets/images/blog/blog-image-9.jpg"
                    className=" max-w-full h-20 w-20"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-start text-left space-y-2">
                  <h2 className="title">
                    <Link href={"/article/some-slu-here"} rel="bookmark">
                      Why Should Business Payroll Outsourcing?
                    </Link>
                  </h2>
                  <p className="flex justify-start items-center space-x-2">
                    <LucideClock size={16} />
                    <span>October 8, 2023</span>
                  </p>
                </div>
              </div>
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white">
              <div className="flex justify-start items-center space-x-2">
                <div className="image ">
                  <Image
                    width="750"
                    height="420"
                    src="/assets/images/blog/blog-image-9.jpg"
                    className=" max-w-full h-20 w-20"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-start text-left space-y-2">
                  <h2 className="title">
                    <Link href={"/article/some-slu-here"} rel="bookmark">
                      Why Should Business Payroll Outsourcing?
                    </Link>
                  </h2>
                  <p className="flex justify-start items-center space-x-2">
                    <LucideClock size={16} />
                    <span>October 8, 2023</span>
                  </p>
                </div>
              </div>
            </li>
            <li className="hover:text-gray-900 dark:hover:text-white">
              <div className="flex justify-start items-center space-x-2">
                <div className="image ">
                  <Image
                    width="750"
                    height="420"
                    src="/assets/images/blog/blog-image-9.jpg"
                    className=" max-w-full h-20 w-20"
                    alt="img"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-start text-left space-y-2">
                  <h2 className="title">
                    <Link href={"/article/some-slu-here"} rel="bookmark">
                      Why Should Business Payroll Outsourcing?
                    </Link>
                  </h2>
                  <p className="flex justify-start items-center space-x-2">
                    <LucideClock size={16} />
                    <span>October 8, 2023</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="h-16 flex justify-start items-center font-bold text-gray-900 dark:text-white">
            Subscribe Us Today
          </h2>
          <p>
            Subscribe Us & Recive Our Offers and Updates in Your Inbox Directly.
          </p>
          <FooterSubscribeForm />
        </div>
      </section>
      <BottomFooter />
    </footer>
  );
}

export default MainFooter;

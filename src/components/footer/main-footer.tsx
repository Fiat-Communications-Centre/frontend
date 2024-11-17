"use client";

import { LucideClock, LucideHelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterSubscribeForm } from "./footer-subscribe-form";
import BottomFooter from "./bottom-footer";
import { useDataFetch } from "@/hooks/user-data-fetcher";
import { postService } from "@/services/post-service";
import { formatDate } from "date-fns";
import SectionLoader from "../shared/section-loader";
import { siteDetails } from "@/config/constants";

function MainFooter() {
  const { fetchData } = useDataFetch();

  const { data: posts, isLoading: isLoadingPosts } = fetchData({
    queryKey: ["posts", `all-posts`],
    queryFn: async () => {
      const res = await postService.getPosts({ limit: 5 });
      return res.data;
    },
  });
  return (
    <footer className="relative w-full  bg-[url(/footer-bg.jpg)] text-gray-600  dark:text-gray-400 border-t-[1px] border-white/20">
      <div className="absolute inset-0 z-[1]  bg-black/10 dark:bg-black/90"></div>
      <section className="px-4 relative z-[2] container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-16">
        <div className="flex flex-col space-y-2">
          <Image
            src={siteDetails.logo.original}
            width={64}
            height={64}
            className="w-16 object-cover object-center"
            priority
            alt="Logo"
          />
          <p className="text-base md:text-xl flex-1">
            <strong>{siteDetails.name}</strong> <br />
            {siteDetails.description}
          </p>
          <div className="w-full flex justify-start items-center space-x-2">
            <div className="image">
              <LucideHelpCircle className="h-12 w-12" />
            </div>
            <div>
              <h6 className="text-secondary font-semibold">Need Help?</h6>
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
            {/* <li className="hover:text-gray-900 dark:hover:text-white">
              <Link href={"/downloads"}>Downloads</Link>
            </li> */}
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="h-16 flex justify-start items-center font-bold text-gray-900 dark:text-white">
            Recent Posts
          </h2>
          {posts && (
            <ul className="flex-1 flex flex-col space-y-2">
              {posts.slice(0, 4).map((pst) => (
                <div
                  key={pst.id}
                  className="flex justify-start items-center space-x-2"
                >
                  <div className="image ">
                    <Image
                      width="750"
                      height="420"
                      src={pst.thumbnail.url}
                      className=" max-w-full h-16 w-16 rounded-md"
                      alt="img"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-start text-left space-y-2">
                    <h2 className="title">
                      <Link href={`/blog/${pst.id}/${pst.slug}`} rel="bookmark">
                        {pst.title}
                      </Link>
                    </h2>
                    <p className="flex justify-start items-center space-x-2">
                      <LucideClock size={16} />
                      <span>{formatDate(pst.createdAt, "dd-MM-yyyy")}</span>
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          )}
          {isLoadingPosts && <SectionLoader />}
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
      <BottomFooter className="relative z-[2] bg-primary text-accent dark:bg-white/10" />
    </footer>
  );
}

export default MainFooter;

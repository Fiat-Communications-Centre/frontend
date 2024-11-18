"use client";
import { useDataFetch } from "@/hooks/user-data-fetcher";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { teamMemberService } from "@/services/team-members-service";
import SectionLoader from "../shared/section-loader";

export default function TeamList({ featuredOnly }: { featuredOnly?: boolean }) {
  const { fetchData } = useDataFetch();
  const { data: people, isLoading } = fetchData({
    queryKey: ["team-members"],
    queryFn: async () => {
      const res = await teamMemberService.getTeamMembers({
        featured: featuredOnly,
      });

      return res.data!;
    },
  });
  return (
    <div className="container m-auto grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] lg:items-start lg:space-y-0  gap-4 lg:gap-8">
      {people &&
        people
          .filter((x) => (featuredOnly ? x.featured : true))
          .map((person) => (
            <div
              key={person.name}
              className={
                "p-4 rounded-lg shadow h-full w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem]"
              }
            >
              <div className="relative space-y-4">
                <AspectRatio ratio={4 / 4} className="h-full">
                  <Image
                    className="w-full h-full object-cover shadow-lg rounded-lg"
                    src={person.photo?.url as string}
                    width={300}
                    height={300}
                    alt=""
                  />
                </AspectRatio>

                <div className="w-full">
                  <div className="space-y-4">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-primary">{person.name}</h3>
                      <p className="text-sm">{person.title}</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

      {isLoading && <SectionLoader />}
    </div>
  );
}

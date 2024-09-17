import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

const people = [
  {
    name: "Sr. Josepha Agelina Atswele",
    role: "Board Chair",
    imageUrl: "/hero-main.jpg",
    bio: "SUPERIOR GENERAL - Sisters of Mary of Kakamega and Board Chair, FIAT Communications & Consultancy Centre",
  },
  {
    name: "Dr. Shamilla Amulega",
    role: "Communication Consultant, USA & EU",
    imageUrl: "/hero-main.jpg",
    bio: "Innovative, award-winning Global Communications Strategist driving impactful campaigns worldwide",
  },
  {
    name: "Sr. Prof. A. L. Lando",
    role: "Communications & Research Consultant",
    imageUrl: "/hero-main.jpg",
    bio: "Seasoned professional responsible for overseeing and driving all aspects of the company's communication efforts.",
  },
  {
    name: "Donald Kuchona",
    role: "Business Consultant",
    imageUrl: "/hero-main.jpg",
    bio: "Trusted advisor guiding clients to achieve their business goals",
  },
  {
    name: "Wachiye Siranjofu",
    role: "Web Developer",
    imageUrl: "/hero-main.jpg",
    bio: "Tech-savvy professional crafting seamless and visually appealing websites.",
  },
  {
    name: "Edward Njenga",
    role: "Photographer & Graphics Designer",
    imageUrl: "/hero-main.jpg",
    bio: "Creative guru with a passion for visually stunning designs.",
  },
  {
    name: "Magdaline Kiyeng",
    role: "Communication and Data Analyst",
    imageUrl: "/hero-main.jpg",
    bio: "Communication and data wizard analyzing research findings and extracting valuable insights.",
  },
  {
    name: "Marie Florence Bamvuginyumvira",
    role: "Communication and Marketing",
    imageUrl: "/hero-main.jpg",
    bio: "Dynamic Communication and Marketing Professional delivering impactful strategies and campaigns.",
  },
  {
    name: "Beatrice Odera",
    role: "Peace, Development and Training Consultant",
    imageUrl: "/hero-main.jpg",
    bio: "Development of Strategic Plans, and training in areas of Justice and Peace",
  },
  {
    name: "Nicholas Waigwa",
    role: "Multimedia Journalist - Consultant",
    imageUrl: "/hero-main.jpg",
    bio: "Versatile Multimedia Journalist & Consultant. Storyteller, detail-oriented content creator, delivering strategic insights for resonant communication.",
  },
  {
    name: "Thomas Kyalo",
    role: "Multimedia Expert - Consultant",
    imageUrl: "/hero-main.jpg",
    bio: "Seasoned Multimedia Expert & Consultant. Crafting impactful visual narratives, transforming visions into engaging multimedia strategies.",
  },
  
  // More people...
];

export default function TeamList() {
  return (
    <div className="container m-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:items-start lg:space-y-0  gap-4 lg:gap-8">
      {people.map((person, index) => (
        <div key={person.name} className={"p-4 rounded-lg shadow h-full"}>
          <div className="relative space-y-4">
            <AspectRatio ratio={4/4} className="h-full">
              <Image
                className="w-full h-full object-cover shadow-lg rounded-lg"
                src={person.imageUrl}
                width={300}
                height={300}
                alt=""
              />
            </AspectRatio>

            <div className="w-full">
              <div className="space-y-4">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3 className="text-primary">{person.name}</h3>
                  <p className="text-sm">{person.role}</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-500">{person.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

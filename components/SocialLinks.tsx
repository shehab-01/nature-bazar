import React from "react";
import { Facebook, Github, Linkedin, Youtube, Slack } from "lucide-react";
import Link from "next/link";
// import { cn } from "@/lib/utils";

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.Facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.github.com",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.Slack.com",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-baseline-last gap-3.5">
      {socialLink?.map((item, index) => (
        <Link
          key={index}
          href={item?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border rounded-full text-nature_light_white"
        >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;

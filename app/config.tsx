// ! Imports for config

import { Inbox } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";

// * Config

// ! Connect links

export const CONNECT_LINKS: Array<{
  name: string;
  href: string;
  icon: React.ReactNode;
}> = [
  {
    name: "Email",
    href: "mailto:mlamine.abdellaoui@aucegypt.edu",
    icon: <Inbox className="size-6 " />,
  },
  {
    name: "X",
    href: "https://x.com/Lamiiiiiine",
    icon: <SiX className="size-6 fill-foreground" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Lamiiine",
    icon: <SiGithub className="size-6 fill-foreground" />,
  },
  //  {
  //  	name: "LinkedIn",
  //  	href: "https://www.linkedin.com/in/noahrileypittman/",
  //  	icon: <SiLinkedin className="size-6 fill-foreground" />,
  //  },
];

// ! All projects

export const ALL_PROJECTS: Array<{
  name: string;
  desc: string;
  href: string;
  src: string;
}> = [
  {
    name: "relocate-with-us",
    desc: "job board for visa sponsored opportunities",
    href: "https://relocate-with-us.github.io/",
    src: "/projects/ree.png",
  },
  {
    name: "awesome list of visa sponsored jobs",
    desc: "a cicd to scrape jobs, +330 stars",
    href: "https://github.com/Lamiiine/Awesome-daily-list-of-visa-sponsored-jobs",
    src: "/projects/ree.png",
  },
];

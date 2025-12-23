"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, HardDrive, ArrowRight } from "lucide-react";

interface SkillIconProps {
  name: string;
  icon?: React.ReactNode;
}

const skillIcons: Record<string, React.ReactNode> = {
  // Frontend
  JavaScript: (
    <Image
      src="/JavaScript.svg"
      alt="JavaScript"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  TypeScript: (
    <Image
      src="/TypeScript.svg"
      alt="TypeScript"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  React: (
    <Image
      src="/React.svg"
      alt="React"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  "Next.js": (
    <Image
      src="/Next.js.svg"
      alt="Next.js"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),

  // DevOps & Infra
  Git: (
    <Image
      src="/Git.svg"
      alt="Git"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  Jenkins: (
    <Image
      src="/Jenkins.svg"
      alt="Jenkins"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  "Github Actions (CI/CD)": (
    <Image
      src="/GitHub Actions.svg"
      alt="GitHub Actions"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  "AWS (EC2, S3)": (
    <Image
      src="/AWS.svg"
      alt="AWS"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  Vercel: (
    <Image
      src="/Vercel.svg"
      alt="Vercel"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  FastAPI: (
    <Image
      src="/FastAPI.svg"
      alt="FastAPI"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  NGINX: (
    <Image
      src="/NGINX.svg"
      alt="NGINX"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  Jinja2: (
    <Image
      src="/Jinja.svg"
      alt="Jinja2"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  NPM: (
    <Image
      src="/NPM.svg"
      alt="NPM"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  Redux: (
    <Image
      src="/Redux.svg"
      alt="Redux"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),

  // State & Data
  Zustand: (
    <Image
      src="/Zustand.svg"
      alt="Zustand"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  "TanStack Query": <Layers className="h-8 w-8 text-red-400" />,
  Storage: <HardDrive className="h-8 w-8 text-sky-400" />,
  Firebase: (
    <Image
      src="/Firebase.svg"
      alt="Firebase"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),

  // Design & UX
  Figma: (
    <Image
      src="/Figma.svg"
      alt="Figma"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),

  // Communication & Collab
  Notion: (
    <Image
      src="/Notion.png"
      alt="Notion"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  Slack: (
    <Image
      src="/Slack.svg"
      alt="Slack"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  Discord: (
    <Image
      src="/Discord.png"
      alt="Discord"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  GitHub: (
    <Image
      src="/GitHub.svg"
      alt="GitHub"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
  Jira: (
    <Image
      src="/Jira.svg"
      alt="Jira"
      width={32}
      height={32}
      className="w-8 h-8"
    />
  ),
};

const skillLinks: Record<string, string> = {
  React: "https://dietisdie.tistory.com/category/React",
  Storage: "https://dietisdie.tistory.com/category/Storage",
  Jinja2: "https://dietisdie.tistory.com/category/Jinja2",
};

export function SkillIcon({ name, icon }: SkillIconProps) {
  const defaultIcon = skillIcons[name] || (
    <div className="h-8 w-8 flex items-center justify-center bg-gray-600 rounded text-white font-bold text-xs">
      {name.charAt(0)}
    </div>
  );

  const link = skillLinks[name];
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-500/30 backdrop-blur-sm border border-zinc-400/50 p-6 h-full transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-500/50 flex flex-col items-center justify-center">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-800/10 to-sky-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex flex-col items-center gap-3 w-full">
          <div className="text-sky-400 group-hover:text-sky-300 transition-colors">
            {icon || defaultIcon}
          </div>
          <div className="text-center font-medium text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
            {name}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-1 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200 ease-out">
            <ArrowRight className="h-4 w-4 text-blue-400 group-hover:text-sky-400 transition-colors" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

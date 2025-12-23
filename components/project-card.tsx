"use client";

import Link from "next/link";
import { ArrowUpRight, Github, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
  deepDiveFile?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  repoUrl,
  deepDiveFile,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative h-[550px] overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-blue-500/50">
        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden w-full aspect-video bg-zinc-900/50">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-6 flex-grow flex flex-col min-h-0">
            <h3 className="text-xl font-bold mb-2 line-clamp-1">{title}</h3>
            <p className="text-zinc-400 mb-4 line-clamp-3 flex-shrink-0">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3 flex-shrink-0">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-zinc-700/50 flex-shrink-0 space-y-2">
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700/50 border border-transparent hover:border-sky-500/50"
                  asChild
                >
                  <Link
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700/50 border border-transparent hover:border-sky-500/50"
                  asChild
                >
                  <Link
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    배포된 서비스
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              {deepDiveFile && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="px-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 border border-transparent hover:border-sky-500/50"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = deepDiveFile;
                    link.download =
                      deepDiveFile.split("/").pop() || "deepdive.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <FileText className="mr-1 h-4 w-4" />
                  View Project Deep Dive
                  <Download className="ml-1  h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

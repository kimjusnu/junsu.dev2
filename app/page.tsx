"use client";

import Link from "next/link";
import { ArrowRight, Github, Mail, MapPin, Info } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ProjectCarousel } from "@/components/project-carousel";
import { SkillIcon } from "@/components/skill-icon";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">Full Stack Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-800/20 to-sky-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">안녕하세요,</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
                김준수입니다
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              직관적이고 깔끔한 화면을 만드는 프론트엔드 개발자입니다. 사용자가
              바로 이해할 수 있는 구조, 사용하기 편한 흐름을 고민합니다.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-sky-500 border-0"
                asChild
              >
                <Link href="#projects">
                  <span className="relative z-10 flex items-center">
                    View Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-sky-400 hover:text-sky-300 hover:border-sky-500/50"
                asChild
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/kimjusnu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:junsu4621@naver.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="저를 소개드립니다" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/profile.png"
                  alt="김준수"
                  className="max-w-[410px] h-auto object-contain rounded-xl"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50">
                  <MapPin className="h-4 w-4 text-sky-400" />
                  <span className="text-sm font-medium text-white">
                    오션뷰 카페 얼트에서
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="flex">
              <GlassmorphicCard className="w-full">
                <p className="text-lg text-zinc-300">
                  저는 화려한 디자인보다, 직관적이고 깔끔한 화면을 만드는
                  프론트엔드 개발자입니다. 솔직히 말씀드리면 디자인은 잘
                  못합니다. 다양한 효과도 넣어보고 싶고, 예쁘게 꾸미고 싶지만…
                  쉽지 않더라고요. 😅
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  남중, 남고, 공대, 군대를 거쳐온 제 백그라운드 때문인지
                  화려하고 감성적인 디자인보단, 심플하고 직관적인 UI가 더
                  익숙합니다. 하지만 그렇기 때문에 사용자가 바로 이해할 수 있는
                  구조, 사용하기 편한 흐름을 더 깊이 고민하게 됐습니다.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  저는 기능을 구현하는 것이 아니라, 사용자의 경험을 설계합니다.
                  GUI를 채우는 작업보다는, UI가 전달할 정보와 흐름, 그리고 UX가
                  만들어낼 감정과 반응을 먼저 생각합니다.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">이름</div>
                    <div className="font-medium">김준수</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">이메일</div>
                    <div className="font-medium">junsu4621@naver.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">위치</div>
                    <div className="font-medium">대한민국</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">상태</div>
                    <div className="font-medium text-green-500">
                      기회 열려있음
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                    Download Resume
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10 ">
          <SectionHeading title="My Skills" subtitle="기술 스택" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            <SkillIcon name="JavaScript" />
            <SkillIcon name="TypeScript" />
            <SkillIcon name="React" />
            <SkillIcon name="Next.js" />
            <SkillIcon name="Git" />
            <SkillIcon name="FastAPI" />
            <SkillIcon name="NGINX" />
            <SkillIcon name="Jinja2" />
            <SkillIcon name="NPM" />
            <SkillIcon name="Redux" />
            <SkillIcon name="Jenkins" />
            <SkillIcon name="Github Actions (CI/CD)" />
            <SkillIcon name="AWS (EC2, S3)" />
            <SkillIcon name="Vercel" />
            <SkillIcon name="Zustand" />
            <SkillIcon name="TanStack Query" />
            <SkillIcon name="Storage" />
            <SkillIcon name="Firebase" />
            <SkillIcon name="Figma" />
            <SkillIcon name="Notion" />
            <SkillIcon name="Slack" />
            <SkillIcon name="Discord" />
            <SkillIcon name="Jira" />
            <SkillIcon name="GitHub" />
          </div>
          <p className="text-center text-sm text-zinc-500 mt-8 flex items-center justify-center gap-2">
            <Info className="h-4 w-4" />
            <span>
              각 기술 아이콘을 클릭하면 관련 학습 내용을 확인할 수 있습니다
            </span>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="주요 프로젝트" />

          <ProjectCarousel />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="제 경력" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="함께 일해요" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16">
            <GlassmorphicCard className="h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">이메일</div>
                    <div className="font-medium">junsu4621@naver.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/kimjusnu</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">현재 상태</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>프리랜스 및 정규직 기회 열려있음</span>
                </div>
              </div>
            </GlassmorphicCard>

            <div className="h-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
                김준수
              </span>
              <span className="text-white"> 포트폴리오</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} 김준수. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/kimjusnu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:junsu4621@naver.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

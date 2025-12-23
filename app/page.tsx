"use client";

import Link from "next/link";
import { ArrowRight, Github, Mail, MapPin, Info, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { TfiFaceSmile } from "react-icons/tfi";

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
              사용자가 ‘생각하지 않아도 되는 UI’를 만드는 프론트엔드
              개발자입니다. 백엔드와 AI까지 함께 다루며, 화면 너머의 흐름까지
              이해하고 설계합니다.
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
              <Link
                href="https://dietisdie.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="sr-only">Blog</span>
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
          <SectionHeading
            title={
              <span className="flex items-center justify-center gap-2">
                저를 소개합니다{" "}
                <TfiFaceSmile className="text-zinc-200 w-8 h-8 md:w-10 md:h-10" />
              </span>
            }
            subtitle="about"
          />

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
                  저는 남중, 남고, 공대, 군대를 거치며 자연스럽게 효율과
                  명확함을 중시하는 환경에 익숙해졌습니다.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  불필요한 요소보다는, 한눈에 이해되고 빠르게 사용할 수 있는
                  구조를 선호하며 이러한 기준은 제 UI와 UX 설계 방식의 바탕이
                  되었습니다.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  처음 사용하는 사용자도 별도의 설명 없이 사용할 수 있는 경험을
                  목표로 하며, 실제 서비스 환경에서도 이러한 방향은 긍정적인
                  피드백으로 이어졌습니다.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  최근에는 프론트엔드를 중심으로 백엔드와 AI까지 함께 다루며,
                  화면의 효율뿐만 아니라 시스템 전체의 효율까지 고려한 개발을
                  지향하고 있습니다.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">역할/포지션</div>
                    <div className="font-medium">프론트엔드 중심 풀스택</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">주요 기술</div>
                    <div className="font-medium">React, Next.js</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">학력</div>
                    <div className="font-medium">
                      한국공학대학교 컴퓨터공학부 졸업
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">경력</div>
                    <div className="font-medium">1년+</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-sky-500 hover:to-blue-600 border-0 text-white">
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
          <SectionHeading
            title="아래의 기술들을 다룰 수 있습니다"
            subtitle="tech stack"
          />

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
          <SectionHeading
            title="이런 프로젝트들을 해봤어요"
            subtitle="progects"
          />

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
          <SectionHeading title="이렇게 성장해왔습니다" subtitle="experience" />

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
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="relative z-10">contact</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-800/20 to-sky-500/20 animate-pulse"></span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <GlassmorphicCard className="h-full">
              <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
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
                    <div className="text-sm text-zinc-500">깃허브</div>
                    <div className="font-medium">github.com/kimjusnu</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">블로그</div>
                    <div className="font-medium">dietisdie.tistory.com</div>
                  </div>
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
            <Link
              href="https://dietisdie.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <BookOpen className="h-5 w-5" />
                <span className="sr-only">Blog</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

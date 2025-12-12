"use client";

import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

type TimelineGroup = {
  year: string;
  tag?: string;
  items: {
    title: string;
    detail: string;
  }[];
};

const experienceGroups: TimelineGroup[] = [
  {
    year: "2025",
    tag: "인턴 · 현업 · 강의",
    items: [
      {
        title: "에임비랩 SW부서 대리 (프론트엔드 & 백엔드)",
        detail: "2025.07 - 현재 · 마이피드 1.5/2.0, 관리기 등 개발",
      },
      {
        title: "더이노베이터스 TA 기술연구부서 인턴",
        detail: "2025.03 - 2025.06 · StartupQT 플랫폼, CI/CD 고도화",
      },
    ],
  },
  {
    year: "2024",
    tag: "부트캠프 · 커뮤니티",
    items: [
      {
        title: "스나이퍼팩토리 프론트엔드 3기",
        detail: "2024.10 - 2024.12 · 팀 프로젝트 리더, 우수상",
      },
      { title: "TUK GDSC Beginner", detail: "2024.05 - 2024.08 · React 학습" },
      {
        title: "웅진씽크빅 × Udemy Next.js 부트캠프 3기",
        detail: "2024.04 - 2024.09 · 우수 학생, 팀 프로젝트 2등",
      },
      {
        title: "현장실습 서포터즈 드림온 5기 부단장",
        detail: "2024.02 - 2025.02",
      },
    ],
  },
  {
    year: "2023",
    tag: "학습 시작 · 서포터즈",
    items: [
      {
        title: "현장실습 서포터즈 드림온 4기 단원",
        detail: "2023.07 - 2024.01 · 현장실습 지원",
      },
      { title: "프론트엔드 학습 시작", detail: "2023.09 · HTML, JS, CSS" },
      {
        title: "현장실습 서포터즈 드림온 3기 단원",
        detail: "2022.12 - 2023.06 · 캠퍼스 홍보 콘텐츠",
      },
    ],
  },
  {
    year: "2021 - 2022",
    tag: "군 복무",
    items: [
      {
        title: "대한민국 육군 53사단 126여단 4대대 병장",
        detail:
          "2021.06.07 - 2022.12.06 · 부산 호국훈련 전략기획 PPT 제작·발표",
      },
    ],
  },
  {
    year: "2020",
    tag: "학업 · 동아리",
    items: [
      {
        title: "대학생 발표연합동아리 Spring 42기 운영진",
        detail: "2020.10 - 2021.04 · 기획팀 팀장",
      },
      {
        title: "대학생 발표연합동아리 Spring 40기 기수",
        detail: "2020.03 - 2020.09 · 발표 수상 2회",
      },
      {
        title: "한국공학대학교 컴퓨터공학부 입학",
        detail: "2020.03 · 소프트웨어 전공",
      },
    ],
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:border-l-2 before:border-sky-800/40 before:h-full before:z-0"
          : ""
      }`}
    >
      {experienceGroups.map((group, index) => {
        const alignRight = index % 2 === 0;
        return (
          <div
            key={group.year}
            className={`relative z-10 flex items-center ${
              alignRight ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <motion.div
              className={`w-full md:w-1/2 ${
                alignRight ? "md:pl-10" : "md:pr-10"
              }`}
              initial={{ opacity: 0, x: alignRight ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900/85 via-slate-900/75 to-slate-900/60 backdrop-blur-sm border border-sky-500/20 p-6 transition-all duration-300 hover:border-sky-400/50 shadow-[0_12px_35px_-28px_rgba(56,189,248,0.5)]">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-700/12 via-blue-800/10 to-sky-400/12 rounded-xl blur-sm opacity-20 hover:opacity-55 transition duration-800 hover:duration-200"></div>

                <div className="relative space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="px-3 py-1 inline-flex rounded-full border border-sky-500/25 bg-sky-500/8 text-base text-sky-100 font-semibold">
                      {group.year}
                    </div>
                    {group.tag && (
                      <div className="px-3 py-1 inline-flex rounded-full border border-sky-400/20 bg-sky-400/8 text-sm text-sky-200">
                        {group.tag}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {group.items.map((item, idx) => (
                      <li
                        key={`${group.year}-${idx}`}
                        className="leading-relaxed group/item"
                      >
                        <div className="text-base font-semibold text-sky-50 flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-400 shadow-[0_0_0_3px_rgba(56,189,248,0.15)]"></span>
                          <span>{item.title}</span>
                        </div>
                        <div className="text-sm text-zinc-300 mt-1 ml-3 group-hover/item:text-sky-100 transition-colors">
                          {item.detail}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {!isMobile && (
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <motion.div
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-sky-600 to-blue-500 z-10 flex items-center justify-center border border-sky-300/50 shadow-[0_0_20px_rgba(56,189,248,0.45)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-sky-100"></div>
                </motion.div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

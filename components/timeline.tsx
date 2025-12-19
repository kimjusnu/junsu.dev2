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
    year: "2026",
    tag: "현업",
    items: [
      {
        title: "에임비랩 SW개발팀 대리 (프론트엔드 & 백엔드)",
        detail: "2025.07 - 현재",
      },
    ],
  },
  {
    year: "2025",
    tag: "인턴 · 현업 · 교육 · 학업",
    items: [
      {
        title: "AI 기반 데이터 분석 및 시각화 교육 수료",
        // 2025.12.12에 수강
        detail: "2025.12.22 · 한국산학연협회 주관",
      },
      {
        title: "에임비랩 SW개발팀 (프론트엔드 & 백엔드)",
        detail:
          "2025.07 - 2025.12 · 마이피드 1.0 유지보수/1.5 개발 · 홈페이지 마이그레이션 · GA 기반 모니터링 및 데이터 분석 · AI 기반 관리기 3종 UI/UX 설계 및 개발",
      },
      {
        title: "한국공학대학교 SW캡스톤디자인 우수상",
        detail:
          "2025.03 - 2025.09 · 식습관 관리 앱 '잇핏' · 프론트엔드 개발(PWA) · 논문 작성 · 성과 발표",
      },
      {
        title: "더이노베이터스 TA 기술연구부서 인턴 (프론트엔드)",
        detail: "2025.03 - 2025.06 · StartupQT 플랫폼 개발 및 백오피스 개발",
      },
    ],
  },
  {
    year: "2024",
    tag: "부트캠프 · 커뮤니티",
    items: [
      {
        title: "스나이퍼팩토리 프론트엔드 3기",
        detail:
          "2024.10 - 2024.12 · 팀 프로젝트 리더 · 우수상 · 와이리 Vue.js→Next.js 마이그레이션",
      },
      {
        title: "TUK GDSC Beginner",
        detail: "2024.05 - 2024.08 · React 스터디 및 프로젝트",
      },
      {
        title: "웅진씽크빅 × Udemy Next.js 부트캠프 3기",
        detail:
          "2024.04 - 2024.09 · 우수 수강생 선발 · 팀 프로젝트 2등 · Componique 개발",
      },
      {
        title: "현장실습 서포터즈 드림온 5기 부단장",
        detail:
          "2024.02 - 2025.02 · 현장실습 상담소 개최 · 기업 인터뷰 진행 · 유튜브 영상 제작",
      },
    ],
  },
  {
    year: "2023",
    tag: "학습 시작 · 서포터즈",
    items: [
      {
        title: "현장실습 서포터즈 드림온 4기 단원",
        detail: "2023.07 - 2024.01 · 현장실습 상담소 개최 · 박람회 부스 운영",
      },
      { title: "프론트엔드 학습 시작", detail: "2023.09 · HTML, JS, CSS" },
      {
        title: "현장실습 서포터즈 드림온 3기 단원",
        detail:
          "2022.12 - 2023.06 · 카드뉴스/포스터 제작 · SNS 채널 관리 · 행사 지원",
      },
    ],
  },
  {
    year: "2021 - 2022",
    tag: "군 복무",
    items: [
      {
        title: "부산 호국훈련",
        detail: "2021.10.25 - 2021.11.05 · 전략기획 PPT 제작 및 훈련 참가",
      },
      {
        title: "UFS (Ulchi Freedom Shield) 훈련 참가",
        detail:
          "2021.08 · 위성운용병(군통신망 개통 및 운영) · 정보분석조(지하철역 인질 테러 대응 훈련)",
      },
      {
        title: "대한민국 육군 53사단 126여단 4대대 병장 만기전역",
        detail:
          "2021.06.07 - 2022.12.06 · 통신병 · 정보분석조 · 부대 통신망 유지보수",
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
        detail: "2020.03 · 컴퓨터공학부 소프트웨어 전공",
      },
    ],
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div
      className={`space-y-6 relative ${
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
                alignRight ? "md:pl-6" : "md:pr-6"
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

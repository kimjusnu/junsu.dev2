"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "인턴",
    company: "더이노베이터스 · TA 기술연구부서",
    period: "2025.03 - 2025.06",
    description:
      "프론트엔드 개발 담당. React·Next.js 기반 신규 기능 설계/개발, CI/CD 파이프라인 고도화 및 배포 자동화. StartupQT 프로젝트를 기획·주도하여 제작/검수 리드타임 42% 단축 달성.",
  },
  {
    title: "프론트엔드 3기 부트캠프 수료",
    company: "스나이퍼팩토리",
    period: "2024.09 - 2024.11",
    description:
      "프론트엔드 전반 심화 학습. 팀 프로젝트 리더로 전체 일정 및 UI 개발 총괄. 우수상 수상.",
  },
  {
    title: "Next.js 부트캠프 수료",
    company: "웅진씽크빅 × Udemy",
    period: "2024.07 - 2024.09",
    description:
      "Next.js 집중 교육 수료 후 실전 프로젝트 완수 (전체 FE 담당). 2등 우수상 수상.",
  },
  {
    title: "물리 강사",
    company: "와이즈만 영재학원",
    period: "2025.01 - 현재",
    description: "초·중·고 대상 물리 수업. 내신·수능 대비 강의.",
  },
  {
    title: "현장실습 서포터즈 1·2·3기",
    company: "한국공학대학교",
    period: "2022.12 - 2025.02",
    description: "1·2기 단원 / 3기 부단장. 실습 지원 및 캠퍼스 홍보 콘텐츠 제작.",
  },
  {
    title: "병장 만기전역",
    company: "대한민국 육군 53사단",
    period: "2021.06 - 2022.12",
    description: "부산 호국훈련 전략기획 피피티 제작 후 발표.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-800/10 to-sky-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

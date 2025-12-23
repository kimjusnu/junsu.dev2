"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
  deepDiveFile?: string; // 프로젝트 상세 문서 파일 경로 (예: "/docs/myfeed-deepdive.pdf")
}

const projects: Project[] = [
  {
    title: "마이피드 1.0/1.5",
    description:
      "에임비랩의 핵심서비스 마이피드1.0을 유지보수 및 기능개선하고 1.5를 신규개발 하였습니다.",
    tags: ["HTML", "JavaScript", "Jinja2"],
    image: "/myfeed1.png",
    demoUrl: "#",
    repoUrl: "#",
    deepDiveFile: "/docs/myfeed-deepdive.pdf",
  },
  {
    title: "EatFit",
    description:
      "식습관 관리 앱. 사용자 식습관 데이터를 활용한 맞춤형 영양관리 서비스. PWA 형태로 개발했습니다.",
    tags: ["Next.js", "React", "TypeScript", "PWA", "AI"],
    image: "/placeholder.svg?height=400&width=600",
    demoUrl: "#",
    repoUrl: "#",
    deepDiveFile: "/docs/eatfit-deepdive.pdf",
  },
  {
    title: "StartupQT",
    description:
      "퀴즈 저작·검수·관리 시스템. 콘텐츠 작성부터 검수, 승인/반려, 학습 분석까지 전 과정을 자동화한 웹 애플리케이션입니다.",
    tags: ["Next.js", "TypeScript", "Tiptap", "AG Grid", "Zustand", "AWS"],
    image: "/startupqt1.png",
    demoUrl: "https://startupqt.com",
    repoUrl: "https://github.com/kimjusnu",
    deepDiveFile: "/docs/startupqt-deepdive.pdf",
  },
  {
    title: "와이리 홈페이지",
    description:
      "Vue.js 기반 기업 홈페이지를 Next.js SSR로 마이그레이션. SEO 최적화 및 성능 개선 (FCP 1.8s → 0.9s).",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "SEO"],
    image: "/yiry1.png",
    demoUrl: "https://www.wairi.co.kr/webapp",
    repoUrl: "https://github.com/iri-wa-7team/iri-wa",
    deepDiveFile: "/docs/wairi-deepdive.pdf",
  },
  {
    title: "Componique",
    description:
      "Next.js + TailwindCSS 기반 오픈소스 UI 컴포넌트 라이브러리. npm 배포로 최고 피크 시점 20만+ 다운로드 기록.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Rollup", "NPM"],
    image: "/componique1.png",
    demoUrl: "https://componique.vercel.app",
    repoUrl: "https://github.com/kimjusnu/componique",
    deepDiveFile: "/docs/componique-deepdive.pdf",
  },
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(projects.length); // 중간 세트에서 시작
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isAnimating = useRef(false);

  // 한 번에 3개씩 보여주고 한 개씩 이동 (무한 루프)
  // currentIndex는 제한 없이 증가/감소하고, translateX 계산에서 무한 루프 처리

  const next = () => {
    if (isAnimating.current) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (isAnimating.current) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // translateX 계산 - 고정 카드 너비 + gap (무한 루프)
  const getTranslateX = (index: number) => {
    // 카드 너비를 고정값으로 계산 (반응형 고려)
    if (typeof window === "undefined") return 0;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    let cardWidth: number;
    const gap = 32; // gap-8 = 32px

    if (isMobile) {
      // 모바일: 전체 너비
      const container = carouselRef.current;
      cardWidth = container ? container.offsetWidth : 0;
    } else if (isTablet) {
      // 태블릿: (전체 너비 - gap) / 2
      const container = carouselRef.current;
      cardWidth = container ? (container.offsetWidth - gap) / 2 : 0;
    } else {
      // 데스크톱: (전체 너비 - 2*gap) / 3
      const container = carouselRef.current;
      cardWidth = container ? (container.offsetWidth - gap * 2) / 3 : 0;
    }

    if (cardWidth === 0) return 0;

    // 무한 루프: 중간 세트에서 시작
    // index는 전체 복제된 배열의 인덱스 (0 ~ projects.length * 3 - 1)
    const totalOffset = index * (cardWidth + gap);

    return -totalOffset;
  };

  // currentIndex 변경 시 애니메이션 및 무한 루프 처리
  useEffect(() => {
    if (!carouselRef.current) return;

    // 범위 체크: currentIndex가 범위를 벗어나면 중간 세트로 즉시 조정 (애니메이션 없이)
    let adjustedIndex = currentIndex;
    let shouldSkipAnimation = false;

    if (currentIndex >= projects.length * 2) {
      // 뒤 세트의 끝에 도달하면 중간 세트로 점프
      adjustedIndex = projects.length + (currentIndex % projects.length);
      shouldSkipAnimation = true;
    } else if (currentIndex < projects.length) {
      // 앞 세트에 있으면 중간 세트로 점프
      adjustedIndex = projects.length + (currentIndex % projects.length);
      shouldSkipAnimation = true;
    }

    if (shouldSkipAnimation) {
      setCurrentIndex(adjustedIndex);
      x.set(getTranslateX(adjustedIndex)); // 즉시 위치 업데이트
      return;
    }

    // 정상 범위 내에서는 애니메이션 실행
    const targetX = getTranslateX(currentIndex);
    isAnimating.current = true;

    const controls = animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    return () => controls.stop();
  }, [currentIndex, x]);

  // 초기 x 값 설정
  useEffect(() => {
    if (carouselRef.current) {
      const initialX = getTranslateX(projects.length);
      x.set(initialX);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full mt-16">
      {/* Dots Indicator - 카드 위에 배치 */}
      <div className="flex justify-center gap-2 mb-6">
        {projects.map((_, index) => {
          const actualIndex = currentIndex % projects.length;
          const endIndex = actualIndex + 3;
          const isVisible =
            (index >= actualIndex &&
              index < Math.min(endIndex, projects.length)) ||
            (endIndex > projects.length && index < endIndex % projects.length);
          return (
            <button
              key={index}
              onClick={() => {
                if (isAnimating.current) return;
                // 클릭한 항목이 보이는 3개 중 하나가 되도록 인덱스 조정 (중간 세트 기준)
                if (index < actualIndex) {
                  setCurrentIndex(projects.length + index);
                } else if (index >= actualIndex + 3) {
                  setCurrentIndex(projects.length + index - 2);
                } else {
                  setCurrentIndex(projects.length + index);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                isVisible
                  ? "w-8 bg-gradient-to-r from-blue-500 to-sky-400"
                  : "w-2 bg-zinc-600 hover:bg-zinc-500"
              }`}
              aria-label={`프로젝트 ${index + 1}로 이동`}
            />
          );
        })}
      </div>

      <div className="relative flex items-center px-20">
        {/* Navigation Buttons - 카드 바깥쪽 좌우에 배치 */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 text-zinc-400 hover:text-white transition-colors duration-300"
          aria-label="이전 프로젝트"
        >
          <ChevronLeft className="h-10 w-10" strokeWidth={2.5} />
        </button>

        <div
          ref={carouselRef}
          className="relative overflow-hidden flex-1"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <motion.div className="flex gap-8" style={{ x }}>
            {/* 무한 루프를 위한 카드 복제 - 앞, 중간, 뒤 세트 */}
            {[...projects, ...projects, ...projects].map((project, idx) => {
              // 실제 인덱스 계산
              const actualIndex = idx % projects.length;
              const setIndex = Math.floor(idx / projects.length);
              return (
                <div
                  key={`project-${actualIndex}-set-${setIndex}`}
                  className="flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.333px)]"
                >
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </motion.div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 z-20 text-zinc-400 hover:text-white transition-colors duration-300"
          aria-label="다음 프로젝트"
        >
          <ChevronRight className="h-10 w-10" strokeWidth={2.5} />
        </button>
      </div>

      {/* Project Counter */}
      <div className="text-center mt-8 text-sm text-zinc-500">
        {(() => {
          const actualIndex = currentIndex % projects.length;
          const endIndex = actualIndex + 3;
          if (endIndex > projects.length) {
            // [4, 5, 1] 같은 경우
            return `${actualIndex + 1}-${projects.length}, 1 / ${
              projects.length
            }`;
          }
          return `${actualIndex + 1}-${endIndex} / ${projects.length}`;
        })()}
      </div>
    </div>
  );
}

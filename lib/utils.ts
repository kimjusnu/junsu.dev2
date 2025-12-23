import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// GitHub Pages basePath 상수
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

// GitHub Pages basePath를 적용한 이미지 경로 생성
export function getImagePath(path: string): string {
  // 이미 basePath가 포함되어 있으면 그대로 반환
  if (path.startsWith(BASE_PATH)) {
    return path;
  }
  // 상대 경로인 경우 basePath 추가
  if (path.startsWith('/')) {
    return `${BASE_PATH}${path}`;
  }
  return path;
}

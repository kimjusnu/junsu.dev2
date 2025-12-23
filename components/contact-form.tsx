"use client";

import type React from "react";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const formspreeEndpoint = useMemo(
    () => process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
    []
  );

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.color = "rgb(125 211 252)"; // sky-300
    e.currentTarget.style.caretColor = "rgb(125 211 252)";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.color = "rgb(212 212 216)"; // zinc-300
    e.currentTarget.style.caretColor = "rgb(148 163 184)"; // zinc-400
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const subject = (formData.get("subject") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = "이 입력란을 작성해주세요";
    else if (name.length < 2)
      nextErrors.name = "이름을 두 글자 이상 입력해주세요";

    if (!email) {
      nextErrors.email = "이 입력란을 작성해주세요";
    } else {
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailPattern.test(email)) {
        nextErrors.email = "이메일 형식을 다시 확인해주세요 (@ 포함)";
      }
    }

    if (!subject) nextErrors.subject = "이 입력란을 작성해주세요";
    else if (subject.length < 2)
      nextErrors.subject = "제목을 두 글자 이상 입력해주세요";

    if (!message) nextErrors.message = "이 입력란을 작성해주세요";
    else if (message.length < 5)
      nextErrors.message = "메시지를 다섯 글자 이상 입력해주세요";
    else if (message.length > 2000)
      nextErrors.message = "메시지는 2000자 이내로 작성해주세요";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    if (!formspreeEndpoint) {
      toast({
        title: "Form endpoint missing",
        description: "환경변수 NEXT_PUBLIC_FORMSPREE_ENDPOINT를 설정해주세요.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        // ignore parse errors
      }

      const hasErrors = Array.isArray(data?.errors) && data.errors.length > 0;
      const ok = data?.ok !== false && !hasErrors && res.ok;

      if (!ok) {
        const msg =
          (hasErrors && data.errors.map((e: any) => e?.message).join(", ")) ||
          "전송에 실패했습니다. 잠시 후 다시 시도해주세요.";
        throw new Error(msg);
      }

      setErrors({});
      toast({
        title: "메시지가 전송되었습니다!",
        description: (
          <div className="flex items-center gap-2 mt-1 text-sky-50/90">
            <CheckCircle2 className="h-4 w-4 text-sky-300" />
            <span>확인 후 빠르게 답변드릴게요.</span>
          </div>
        ),
        className:
          "backdrop-blur-xl bg-sky-500/10 border border-sky-400/30 shadow-lg shadow-sky-900/30 text-sky-50",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "전송에 실패했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-800/10 to-sky-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">메일 보내기</h3>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="space-y-2">
              <Input
                placeholder="이름"
                name="name"
                onInput={() =>
                  errors.name && setErrors((p) => ({ ...p, name: undefined }))
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={cn(
                  "bg-zinc-900/60 border border-zinc-700 text-sky-200 placeholder:text-sky-500/70 caret-sky-300 transition-all hover:border-sky-400/70 hover:ring-1 hover:ring-sky-500/30 focus:border-sky-400 focus:ring-sky-500/30 focus:text-sky-200 focus-visible:text-sky-200 focus:bg-zinc-900/80 focus-visible:bg-zinc-900/80 focus:caret-sky-300 focus-visible:caret-sky-300",
                  errors.name &&
                    "border-red-400/80 hover:border-red-400 focus:border-red-400 ring-1 ring-red-500/30 focus:ring-red-500/40"
                )}
              />
              {errors.name && (
                <div className="flex items-center gap-1 text-xs text-red-300">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="이메일"
                name="email"
                onInput={() =>
                  errors.email && setErrors((p) => ({ ...p, email: undefined }))
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={cn(
                  "bg-zinc-900/60 border border-zinc-700 text-sky-200 placeholder:text-sky-500/70 caret-sky-300 transition-all hover:border-sky-400/70 hover:ring-1 hover:ring-sky-500/30 focus:border-sky-400 focus:ring-sky-500/30 focus:text-sky-200 focus-visible:text-sky-200 focus:bg-zinc-900/80 focus-visible:bg-zinc-900/80 focus:caret-sky-300 focus-visible:caret-sky-300",
                  errors.email &&
                    "border-red-400/80 hover:border-red-400 focus:border-red-400 ring-1 ring-red-500/30 focus:ring-red-500/40"
                )}
              />
              {errors.email && (
                <div className="flex items-center gap-1 text-xs text-red-300">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Input
                placeholder="제목"
                name="subject"
                onInput={() =>
                  errors.subject &&
                  setErrors((p) => ({ ...p, subject: undefined }))
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={cn(
                  "bg-zinc-900/60 border border-zinc-700 text-sky-200 placeholder:text-sky-500/70 caret-sky-300 transition-all hover:border-sky-400/70 hover:ring-1 hover:ring-sky-500/30 focus:border-sky-400 focus:ring-sky-500/30 focus:text-sky-200 focus-visible:text-sky-200 focus:bg-zinc-900/80 focus-visible:bg-zinc-900/80 focus:caret-sky-300 focus-visible:caret-sky-300",
                  errors.subject &&
                    "border-red-400/80 hover:border-red-400 focus:border-red-400 ring-1 ring-red-500/30 focus:ring-red-500/40"
                )}
              />
              {errors.subject && (
                <div className="flex items-center gap-1 text-xs text-red-300">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.subject}</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="메시지"
                rows={5}
                name="message"
                onInput={() =>
                  errors.message &&
                  setErrors((p) => ({ ...p, message: undefined }))
                }
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={cn(
                  "bg-zinc-900/60 border border-zinc-700 text-sky-200 placeholder:text-sky-500/70 caret-sky-300 transition-all hover:border-sky-400/70 hover:ring-1 hover:ring-sky-500/30 focus:border-sky-400 focus:ring-sky-500/30 focus:text-sky-200 focus-visible:text-sky-200 focus:bg-zinc-900/80 focus-visible:bg-zinc-900/80 focus:caret-sky-300 focus-visible:caret-sky-300",
                  errors.message &&
                    "border-red-400/80 hover:border-red-400 focus:border-red-400 ring-1 ring-red-500/30 focus:ring-red-500/40"
                )}
              />
              {errors.message && (
                <div className="flex items-center gap-1 text-xs text-red-300">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.message}</span>
                </div>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-sky-500 hover:to-blue-600 border-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>전송 중...</>
              ) : (
                <>
                  메일 보내기 <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

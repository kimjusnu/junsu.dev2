"use client";

import type React from "react";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const formspreeEndpoint = useMemo(
    () => process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
    []
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formspreeEndpoint) {
      toast({
        title: "Form endpoint missing",
        description: "환경변수 NEXT_PUBLIC_FORMSPREE_ENDPOINT를 설정해주세요.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    setStatusMessage(null);
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // Formspree가 errors 배열을 주면 실패로 처리, 그 외에는 200이면 성공 처리
      try {
        const data = await res.json();
        if (Array.isArray(data?.errors) && data.errors.length > 0) {
          const errorText = data.errors
            .map((e: any) => e?.message || "Error")
            .join(", ");
          throw new Error(errorText);
        }
      } catch {
        // JSON 파싱 실패 시에도 200이면 성공으로 간주
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setStatusMessage({
        type: "success",
        text: "메시지가 전송되었어요. 확인 후 답변드릴게요!",
      });
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "전송에 실패했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
      setStatusMessage({
        type: "error",
        text: "전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
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
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                placeholder="Your Name"
                required
                name="name"
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                required
                name="email"
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Subject"
                required
                name="subject"
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                rows={5}
                required
                name="message"
                className="bg-zinc-900/50 border-zinc-700 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-sky-500 hover:to-blue-600 border-0"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            {statusMessage && (
              <p
                className={`text-sm ${
                  statusMessage.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
                role="status"
                aria-live="polite"
              >
                {statusMessage.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CVPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-white overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-40 bg-white p-2 h-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-260">
            <Link
              onClick={() => window.history.back()}
              href="/work"
              className="flex flex-col items-center"
            >
              <Image
                src="/icons/back_icon.png"
                alt="Back"
                width={20}
                height={20}
              />
            </Link>
            <a
              href="/CV.pdf"
              download="CV.pdf"
              className="bg-pink-600 text-white px-2 py-1 rounded-lg transition-colors text-sm font-medium"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading CV to Display...</p>
          </div>
        </div>
      )}

      <div className="fixed top-10 left-0 w-screen h-[calc(100vh-64px)] overflow-hidden  bg-white">
        <iframe
          src="/CV.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitV"
          className="w-full h-full border-0"
          title="My Professional Curriculum Vitae"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      
    </div>
  );
}

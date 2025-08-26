"use client";

import { useState } from "react";

type Article = {
  category: string;
  title: string;
  author: string;
};

type ArticleCarouselProps = {
  title?: string;
  articles: Article[];
};

export default function ArticleCarousel({ title, articles }: ArticleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(articles.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.ceil(articles.length / 3) - 1 : prev - 1
    );
  };

  const startIndex = currentIndex * 3;
  const visibleArticles = articles.slice(startIndex, startIndex + 3);

  return (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h3 className="section-subtitle">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-70">
              {currentIndex + 1} / {Math.ceil(articles.length / 3)}
            </span>
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleArticles.map((article, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-[var(--color-pastel-blue)] rounded-lg overflow-hidden mb-4">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
            </div>
            <div className="category-label opacity-70 mb-2">{article.category}</div>
            <h3 className="article-title group-hover:opacity-80 transition-opacity mb-2">
              {article.title}
            </h3>
            <p className="text-sm opacity-70">{article.author}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

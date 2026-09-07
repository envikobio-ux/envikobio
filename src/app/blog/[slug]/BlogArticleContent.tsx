'use client';

import React from 'react';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface BlogArticleContentProps {
  content: string;
}

export default function BlogArticleContent({ content }: BlogArticleContentProps) {
  if (!content) {
    return <p className="text-[#999999] italic">Content coming soon...</p>;
  }

  return <MarkdownRenderer content={content} />;
}

'use client';

import React, { useMemo } from 'react';
import Navbar from 'src/layouts/dashboard/navbar';
import {
  Box,
  Card,
  Chip,
  Paper,
  useTheme,
  Container,
  CardMedia,
  Typography,
  useMediaQuery
} from '@mui/material';


interface ProcessedSection {
  title: string;
  content: string;
}

interface ProcessedContent {
  intro: string;
  sections: ProcessedSection[];
}

interface Props {
  blog_details: any;
}

export default function BlogDetailsView({ blog_details }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Format date with proper type safety
  const formatDate = useMemo(() => {
    if (!blog_details?.creationTime) return '';
    try {
      const date = new Date(blog_details.creationTime);
      return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  }, [blog_details?.creationTime]);

  // Efficient Body Processing with proper types
  const processedContent = useMemo((): ProcessedContent => {
    if (!blog_details?.body) return { intro: '', sections: [] };

    const sections = blog_details.body.split(/\d+\.\s+\*\*/).filter(Boolean);

    if (sections.length > 1) {
      const intro = sections[0] || '';
      const formattedSections: ProcessedSection[] = sections.slice(1).map((section: string) => {
        const [title, ...contentLines] = section.split('\n');
        return {
          title: title?.replace(/\*\*/g, '').trim() || '',
          content: contentLines.filter((line: string) => line.trim()).join('\n')
        };
      });
      return { intro, sections: formattedSections };
    }

    // Fallback: treat all as paragraphs
    const paragraphs = blog_details.body.split('\n').filter(Boolean);
    return {
      intro: paragraphs[0] || '',
      sections: paragraphs.slice(1).map((p: string) => ({
        title: '',
        content: p
      }))
    };
  }, [blog_details?.body]);

  // Safe content splitting function
  const splitContent = (content: string): string[] => {
    if (!content) return [];
    return content.split('\n').filter(Boolean);
  };

  if (!blog_details) {
    return (
      <>
        <Navbar  />
        <Container maxWidth="lg" sx={{ py: 4 }} dir="rtl">
          <Typography variant="h6" textAlign="center">
            لا توجد بيانات للمقال
          </Typography>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar  />

      
    </>
  );
}
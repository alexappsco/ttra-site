
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
        <Navbar isHome />
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
      <Navbar isHome />

      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }} dir="rtl">
        <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, background: 'transparent' }}>
          {/* IMAGE */}
          <Card
            sx={{
              mb: 4,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.08)'
            }}
          >
            <CardMedia
              component="img"
              src={blog_details.attachmentUrl}
              alt={blog_details.title}
              sx={{
                height: { xs: 220, sm: 320, md: 420 },
                width: '100%',
                objectFit: 'contain'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/800x400/4a90e2/ffffff?text=Blog+Image';
              }}
            />
          </Card>

          {/* TITLE AND CATEGORY */}
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: 2
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' },
                fontWeight: 700,
                lineHeight: 1.3,
                flex: 1,
                color: 'text.primary'
              }}
            >
              {blog_details.title}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
              <Chip
                label={blog_details.blogCategoryName}
                color="primary"
                size="small"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  bgcolor:'#367ce5'
                }}
              />
              {formatDate && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: '0.9rem' }}
                >
                  {formatDate}
                </Typography>
              )}
            </Box>
          </Box>

          {/* CONTENT */}
          <Box sx={{ maxWidth: '1150px' }}>
            {/* INTRO */}
            {processedContent.intro && (
              <Box sx={{ mb: 4 }}>
                {splitContent(processedContent.intro).map((paragraph: string, i: number) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 2,
                      color: 'text.secondary',
                      mb: 2,
                      textAlign: 'justify'
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            )}

            {/* SECTIONS */}
            {processedContent.sections.map((section: ProcessedSection, index: number) => (
              <Box key={index} sx={{ mb: 4 }}>
                {section.title && (
                  <Typography
                    sx={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: 'text.primary',
                      display: 'flex',
                      gap: 1,
                      alignItems: 'center',
                      mb: 2
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        fontWeight: 600
                      }}
                    >
                      {index + 1}
                    </Box>
                    {section.title}
                  </Typography>
                )}

                {section.content && splitContent(section.content).map((content: string, i: number) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      mb: 1.5,
                      color: 'text.secondary',
                      pr: section.title ? 4 : 0,
                      textAlign: 'right'
                    }}
                  >
                    {content}
                  </Typography>
                ))}
              </Box>
            ))}

          </Box>
        </Paper>
      </Container>
    </>
  );
}
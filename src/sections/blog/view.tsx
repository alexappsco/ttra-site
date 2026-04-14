
'use client';
import React from 'react';
import { Box} from '@mui/material';
interface BlogCategory {
  id: string;
  nameAr: string;
  nameEn: string;
}

interface Props {
  blog: any;
  blog_category: any;
  initialCategory?: string;
}

export default function BlogView({ blog, blog_category, initialCategory = 'all' }: Props) {
  return "load"
}

function CategoryTab({ label, active, onClick }: any) {
  return (
    <Box
      onClick={onClick}
      sx={{
        px: 3,
        py: 1.5,
        cursor: 'pointer',
        borderRadius: 2,
        whiteSpace: 'nowrap',
        fontWeight: 'bold',
        minWidth: 'fit-content',
        transition: '0.2s',
        backgroundColor: active ? '#59A0F2' : 'transparent',
        color: active ? '#fff' : 'text.primary',
        '&:hover': {
          backgroundColor: active ? '#59A0F2' : 'rgba(89,160,242,0.15)',
        },
      }}
    >
      {label}
    </Box>
  );
}

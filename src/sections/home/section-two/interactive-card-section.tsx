'use client';
import React, { useRef, useState, useLayoutEffect } from 'react';
import { Box, Stack, useTheme, Container } from '@mui/material';

import DiamondCard from './diamond-card-section';

export const InteractiveCardSection: React.FC = () => {
  const theme = useTheme();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const [hovered, setHovered] = useState<'top' | 'left' | 'right' | null>(null);

  const CARD_DATA = [
    {
      title: 'المشتري',
      description: 'ابحث، اكتشف، وتفاوض على مشروع يحقق طموحك الاستثماري',
      mainIconPath: '/assets/section-two/accountant.svg',
      hoverIconPath: '/assets/section-two/accountant.svg',
      bgColor: '#0ABEF8',
    },
    {
      title: 'البائع',
      description: 'اعرض نشاطك التجاري وابدأ التواصل مع المشترين المحتملين',
      mainIconPath: '/assets/section-two/users.svg',
      hoverIconPath: '/assets/section-two/users.svg',
      bgColor: '#0082D2',
    },
  ];

  const getStroke = (index: number, baseColor: string) => {
    if (hovered === null) return baseColor;

    if (hovered === 'top') return "#00AAE1"; 
    if (hovered === 'left' && index === 0) return "#0ABEF8"; 
    if (hovered === 'right' && index === 1) return "#0082D2"; 

    return baseColor;
  };

  function useConnectorLines(
    containerRef: React.RefObject<HTMLElement | null>,
    topRef: React.RefObject<HTMLElement | null>,
    leftRef: React.RefObject<HTMLElement | null>,
    rightRef: React.RefObject<HTMLElement | null>
  ) {
    const [containerSizeState, setContainerSizeState] = useState({ width: 0, height: 0 });
    const [linesState, setLinesState] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

    useLayoutEffect(() => {
      const update = () => {
        const container = containerRef.current;
        const top = topRef.current;
        const left = leftRef.current;
        const right = rightRef.current;
        if (!container || !top || !left || !right) return;

        const cRect = container.getBoundingClientRect();
        const tRect = top.getBoundingClientRect();
        const lRect = left.getBoundingClientRect();
        const rRect = right.getBoundingClientRect();

        const center = (rect: DOMRect) => ({ x: rect.left + rect.width / 2 - cRect.left, y: rect.top + rect.height / 2 - cRect.top });
        const t = center(tRect);
        const l = center(lRect);
        const r = center(rRect);

        setContainerSizeState({ width: Math.round(cRect.width), height: Math.round(cRect.height) });
        setLinesState([
          { x1: t.x, y1: t.y, x2: l.x, y2: l.y },
          { x1: t.x, y1: t.y, x2: r.x, y2: r.y },
        ]);
      };

      let rafId = 0;
      const schedule = () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(update);
      };

      const ro = new ResizeObserver(schedule);
      ro.observe(containerRef.current!);
      ro.observe(topRef.current!);
      ro.observe(leftRef.current!);
      ro.observe(rightRef.current!);

      window.addEventListener('resize', schedule);
      window.addEventListener('scroll', schedule, true);

      schedule();

      return () => {
        ro.disconnect();
        window.removeEventListener('resize', schedule);
        window.removeEventListener('scroll', schedule, true);
      };
    }, [containerRef, topRef, leftRef, rightRef]);

    return { containerSizeState, linesState } as const;
  }

  const SvgConnectors: React.FC<{
    containerSize: { width: number; height: number };
    lines: { x1: number; y1: number; x2: number; y2: number }[];
    stroke: string;
  }> = ({ containerSize, lines, stroke }) => (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'visible',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
        preserveAspectRatio="none"
      >
        {lines.map((ln, idx) => (
          <line
            key={idx}
            x1={ln.x1}
            y1={ln.y1}
            x2={ln.x2}
            y2={ln.y2}
            stroke={getStroke(idx, stroke)} 
            strokeWidth={3}
            strokeDasharray="6 6"
            strokeLinecap="round"
            style={{
              animation:
                hovered === 'top' ||
                (hovered === 'left' && idx === 0) ||
                (hovered === 'right' && idx === 1)
                  ? 'glow-dash 1.5s infinite ease-in-out'
                  : 'none',
              transition: 'stroke 0.3s ease-in-out'
            }}
          />
        ))}
      </svg>
    </Box>
  );

  const { containerSizeState: containerSizeHook, linesState: linesHook } =
    useConnectorLines(containerRef, topRef, leftRef, rightRef);

    const glowAnimation = `
  @keyframes glow-dash {
    0% {
      stroke-dashoffset: 0;
      filter: drop-shadow(0px 0px 3px currentColor);
      opacity: 1;
    }
    50% {
      stroke-dashoffset: 20;
      filter: drop-shadow(0px 0px 6px currentColor);
      opacity: 0.7;
    }
    100% {
      stroke-dashoffset: 0;
      filter: drop-shadow(0px 0px 3px currentColor);
      opacity: 1;
    }
  }
`;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, sm: 6, md: 10 },
        px: { xs: 1, sm: 2, md: 0 },
        backgroundColor: '#fff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }} ref={containerRef}>
        <style>{glowAnimation}</style>
        <Box
          ref={topRef}
                   sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 2, sm: 9, md: 12 },
            position: 'relative',
            zIndex: 3,
          }}
          onMouseEnter={() => setHovered('top')}
          onMouseLeave={() => setHovered(null)}
        >
          <DiamondCard
            mainIconPath="/assets/section-two/isthwaz.svg"
            title="استحواذ"
            description="منصتك الذكية لعرض وشراء المشاريع التجارية بكل سهولة"
            bgColor="#00AAE1"
            hoverIconPath="/assets/section-two/isthwaz.svg"
          />
        </Box>

        <SvgConnectors containerSize={containerSizeHook} lines={linesHook} stroke={theme.palette.grey[400]} />

        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'relative', zIndex: 3, width: '100%', height: {xs:75 ,sm:140,md:150} }}
        >
          <Box sx={{ position: 'absolute', bottom: 0, left: '15%' }}>
            <Box
              ref={leftRef}
              sx={{ position: 'relative' }}
              onMouseEnter={() => setHovered('left')}
              onMouseLeave={() => setHovered(null)}
            >
              <DiamondCard {...CARD_DATA[0]} />
            </Box>
          </Box>

          <Box sx={{ position: 'absolute', bottom: 0, right: '15%' }}>
            <Box
              ref={rightRef}
              sx={{ position: 'relative' }}
              onMouseEnter={() => setHovered('right')}
              onMouseLeave={() => setHovered(null)}
            >
              <DiamondCard {...CARD_DATA[1]} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default InteractiveCardSection;


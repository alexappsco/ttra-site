'use client';

import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';

function WhoWeAre() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Motion config for one elem..
  const itemMotion = (direction: 'left' | 'right' | 'up', index: number) => ({
    initial: {
      opacity: 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
      y: direction === 'up' ? 40 : 0,
    },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.15 },
  });

  return (
    <Box id='who-we-are' sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* Title */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography sx={{ fontWeight: 500, fontSize: { xs: 28, md: 40 }, lineHeight: 1.2, mb: 1 }}>
          من نحن
        </Typography>

        <Image
          src="/assets/images/our-services/Vector 14.png"
          width={180}
          height={15}
          alt="underline"
          style={{ margin: '0 auto', display: 'block', maxWidth: '100%' }}
        />
      </Box>

      {/* Content */}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 3, md: 4, lg: 1 }}
        sx={{ px: { xs: 2, md: 6 }, mb: { xs: 6, md: 10 }, maxWidth: '100%' }}
      >
        {/* Image */}
        <Grid item xs={12} md={6}>
          <m.div {...itemMotion(isMobile ? 'up' : 'right', 0)}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/assets/images/about/Right (1).png"
                width={420}
                height={340}
                alt="Doctors and shapes"
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  height: 'auto',
                  borderRadius: 12,
                  display: 'block',
                }}
                sizes="(min-width: 1200px) 520px, (min-width: 900px) 420px, 100vw"
              />
            </Box>
          </m.div>
        </Grid>

        {/* Text */}
        <Grid item xs={12} md={6} sx={{ order: { xs: -1, md: 0 } }}>
          <m.div {...itemMotion(isMobile ? 'up' : 'left', 1)}>
            <Box sx={{ maxWidth: 480, mx: { xs: 'auto', md: 0 }, textAlign: { xs: 'center', md: 'start' }, width: '100%' }}>
              <Typography
                sx={{
                  fontSize: { xs: 16, md: 22 },
                  fontWeight: 500,
                  color: '#2D201C',
                  lineHeight: 1.6,
                  mb: 2,
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  textAlign: 'justify',
                }}
              >
                نحن منصة عناية جلدية رقمية متخصصة توفر لك استشارات مجانية مع أطباء جلدية دوليين بخبرة معتمدة. هدفنا إننا نقدّم تجربة علاج متكاملة من أول التشخيص، للتحاليل، لوصول الأدوية لحد باب بيتك — وكل ده من خلال تطبيق واحد، بسهولة وأمان.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 16, md: 20 },
                  fontWeight: 500,
                  color: '#2D201C',
                  lineHeight: 1.6,
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  textAlign: 'justify',
                }}
              >
                نهتم بكل احتياجات البشرة للجنسين داخل الإمارات، ونضمن لك خصوصية عالية، جودة طبية مضمونة، وتجربة سلسة من أول رسالة لحد استلام العلاج.
              </Typography>
            </Box>
          </m.div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WhoWeAre;

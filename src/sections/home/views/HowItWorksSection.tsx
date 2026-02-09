'use client';

import { Box, Typography, Card, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { m } from 'framer-motion';
import LayoutContainer from './LayoutContainer';

type Step = {
  step: string;
  title: string;
  description: string;
  icon: string;
};

const STEPS: Step[] = [
  {
    step: '01',
    title: 'حمّل التطبيق',
    description: 'ابدأ رحلتك معنا بتسجيل تطبيق نيو ديرة من متجر التطبيقات',
    icon: '/assets/icons/app/who-work/mobile.svg',
  },
  {
    step: '02',
    title: 'تصفح واختر',
    description: 'استكشف مئات المنتجات الأصلية من مختلف الأسواق واختر ما يناسبك',
    icon: '/assets/icons/app/who-work/search.svg',
  },
  {
    step: '03',
    title: 'اطلب',
    description: 'أضف ما تحتاجه لسلة المشتريات وأكمل طلبك',
    icon: '/assets/icons/app/who-work/cart.svg',
  },
  {
    step: '04',
    title: 'ادفع واستلم',
    description: 'ادفع واستلم منتجاتك في أسرع وقت ممكن',
    icon: '/assets/icons/app/who-work/wailt.svg',
  },
];

/* ================= ANIMATIONS ================= */
const textMotion = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const containerMotion = {
  hidden: {},
  visible: { transition: { delayChildren: 0.3, staggerChildren: 0.35 } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HowItWorksSection() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box  id="how-it-works" sx={{ py: 10, textAlign: 'center', overflow: 'hidden', background:"rgba(248, 246, 243, 1)" }}>
      <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textMotion}>
        <Typography sx={{ fontSize: { xs: 30, md: 48 }, fontWeight: 700, mb: 1 }}>
          كيف <span style={{ color: 'rgba(193, 154, 107, 1)' }}>يعمل ؟</span>
        </Typography>
      </m.div>

      <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textMotion}>
        <Typography sx={{ fontSize: { xs: 16, md: 20 }, color: 'rgba(154, 110, 58, 1)', mb: 7 }}>
          أربع خطوات بسيطة للحصول على طلبك
        </Typography>
      </m.div>

      <LayoutContainer>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={isDesktop ? containerMotion : undefined} // stagger only on desktop
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            {STEPS.map((item, index) => (
              <m.div
                key={index}
                variants={cardMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <Card
                  sx={{
                    width: 260,
                    height: 280,
                    p: 3,
                    position: 'relative',
                    borderRadius: 4,
                    boxShadow: '0px 10px 25px rgba(0,0,0,0.08)',
                    backgroundColor: '#FFFFFF',
                    mt: { xs: 0, md: index === 1 || index === 3 ? 6 : 0 },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      backgroundColor: '#C89B6E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ fontSize: 12, fontWeight: 600, color: '#FFF' }}>
                      {item.step}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      mx: 'auto',
                      mb: 2,
                      borderRadius: 3,
                      backgroundColor: '#EADFD3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image src={item.icon} alt={item.title} width={26} height={26} />
                  </Box>

                  <Typography sx={{ fontSize: 18, fontWeight: 600, mb: 1 }}>{item.title}</Typography>

                  <Typography sx={{ fontSize: 14, color: '#B08968', lineHeight: '22px' }}>
                    {item.description}
                  </Typography>
                </Card>
              </m.div>
            ))}
          </Box>
        </m.div>
      </LayoutContainer>
    </Box>
  );
}

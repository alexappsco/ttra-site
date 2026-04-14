'use client';

import React from 'react';
import { Box, Typography, Container, Stack, Divider } from '@mui/material';
import { m } from 'framer-motion';
import { useLocale } from 'next-intl';
import Grid from '@mui/material/Grid';

export default function AboutSection() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  const textAlign = isArabic ? 'left' : 'right';
  const dir = isArabic ? 'ltr' : 'rtl';

  return (
    <Box 
      sx={{ 
        background: `linear-gradient(180deg, #391462 0%, #1A062E 100%)`, 
        color: '#fff', 
        pt: 15, 
        pb: 15, 
        direction: dir,
      }}
    >
      <Container maxWidth="md">
        
        {/* --- العنوان الرئيسي العلوي --- */}
        <Box sx={{ mb: 12, textAlign: 'center' }}>
          <m.div {...motionProps}>
            <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: 2, display: 'block', mb: 2 }}>
              {isArabic ? 'من نحن' : 'About us'}
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700, 
                lineHeight: 1.1,
                fontSize: { xs: '2.5rem', md: '3.8rem' },
                color: '#fff'
              }}
            >
              {isArabic ? 'نعيد صياغة ' : "We're making "}
              <span style={{ fontStyle: 'italic', color: '#D4AF37' }}>
                  {isArabic ? 'مستقبل القراءة' : 'reading rituals'}
              </span>
              <br />
              {isArabic ? 'ليصبح واقعاً ملموساً' : 'a modern reality'}
            </Typography>
          </m.div>
        </Box>

        {/* --- القسم الأول: البداية والروح --- */}
        <Box sx={{ mb: 10 }}>
          <Divider sx={{ borderColor: 'rgba(212, 175, 55, 0.3)', mb: 4 }} />
          <Grid container sx={{ flexDirection: isArabic ? 'row' : 'row' }}>
             {/* العنوان الجانبي */}
            <Grid item xs={12} md={3}>
              <Typography sx={{ color: '#D4AF37', fontWeight: 600, textAlign: textAlign, fontSize: '1.2rem', mb: { xs: 2, md: 0 } }}>
                {isArabic ? 'البداية والروح' : 'The Origin'}
              </Typography>
            </Grid>
            {/* المحتوى */}
            <Grid item xs={12} md={9}>
              <m.div {...motionProps}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, fontSize: '1.9rem', textAlign: textAlign, lineHeight: 1.3 }}>
                    {isArabic ? 'لم نكن يوماً مجرد مطورين تقنيين' : 'Beyond technical development'}
                </Typography>
                <Typography sx={{ color: '#fff', opacity: 0.9, lineHeight: 1.9, fontSize: '1.1rem', textAlign: textAlign, mb: 3 }}>
                    {isArabic 
                      ? 'بل نحن قرّاء في المقام الأول. بدأت منصتنا كحلم لمجموعة من عشاق الكتب الذين رفضوا أن تتحول القراءة إلى ذكرى. لاحظنا أن العالم يتغير، وأن الأجيال الجديدة تمتلك أدواتها الخاصة للتعبير والمعرفة، فقررنا ألا ننتظرهم ليعودوا إلى الكتب، بل أن نذهب نحن بالكتب إليهم، في المكان الذي يحبونه: شاشاتهم الذكية.'
                      : 'We are readers first. Our platform began as a dream for book lovers who refused to let reading become a memory.'}
                </Typography>
                <Typography sx={{ color: '#fff', opacity: 0.9, lineHeight: 1.9, fontSize: '1.1rem', textAlign: textAlign, mb: 3 }}>
                    {isArabic 
                      ? 'نحن فريق منصة "تترى" آمنا بأن الكتاب ليس مجرد ورق، بل هو روحٌ تسافر عبر الزمن، ولأننا ندرك أن لغة العصر قد تغيرت، أخذنا على عاتقنا مهمة إعادة إحياء طقوس القراءة بروحٍ عصرية.'
                      : 'We believe a book is a soul traveling through time. We redefined reading rituals for the modern era.'}
                </Typography>
                <Typography sx={{ color: '#fff', opacity: 0.9, lineHeight: 1.9, fontSize: '1.1rem', textAlign: textAlign }}>
                    {isArabic 
                      ? 'لقد جئنا لنبني جسراً بين عراقة المعرفة وبين نبض الأجيال الجديدة؛ فنحن لا نقدم مجرد كتب رقمية، بل نصيغ تجربة قراءة تخاطب عقول الشباب بلغتهم التي يألفونها، وبأدوات تكنولوجية تلامس شغفهم.'
                      : 'We bridge the gap between classic knowledge and the new generation through technology.'}
                </Typography>
              </m.div>
            </Grid>
          </Grid>
        </Box>

        {/* --- القسم الثاني: الهدف --- */}
        <Box sx={{ mb: 10 }}>
          <Divider sx={{ borderColor: 'rgba(212, 175, 55, 0.3)', mb: 4 }} />
          <Grid container>
            <Grid item xs={12} md={3}>
              <Typography sx={{ color: '#D4AF37', fontWeight: 600, textAlign: textAlign, fontSize: '1.2rem', mb: { xs: 2, md: 0 } }}>
                {isArabic ? 'الهدف الأسمى' : 'The Goal'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <m.div {...motionProps}>
                <Typography sx={{ color: '#fff', lineHeight: 1.8, fontSize: '1.3rem', textAlign: textAlign, fontWeight: 500 }}>
                    {isArabic 
                      ? 'هدفنا أن نعيد الكتاب إلى مكانه الطبيعي: "قريباً من القلب، ومتاحاً بلمسة شاشة"، لنثبت للعالم أن القراءة لا تشيخ، بل تتجدد لترتدي حلة المستقبل.'
                      : 'Our goal is to return the book to its natural place: "Close to the heart, available at a touch".'}
                </Typography>
                <Typography sx={{ color: '#D4AF37', mt: 2, fontSize: '1.1rem', textAlign: textAlign }}>
                    {isArabic 
                      ? 'ابتكرنا "تترى" لنثبت أن التكنولوجيا لن تستبدل الكتاب، بل لتجعله أكثر قوة وانتشاراً.'
                      : 'We created "Tatra" to prove technology empowers books rather than replacing them.'}
                </Typography>
              </m.div>
            </Grid>
          </Grid>
        </Box>

        {/* --- القسم الثالث: المهمة والرؤية --- */}
        <Box sx={{ mb: 10 }}>
          <Divider sx={{ borderColor: 'rgba(212, 175, 55, 0.3)', mb: 4 }} />
          <Grid container>
            <Grid item xs={12} md={3}>
              <Typography sx={{ color: '#D4AF37', fontWeight: 600, textAlign: textAlign, fontSize: '1.2rem', mb: { xs: 2, md: 0 } }}>
                {isArabic ? 'المهمة والرؤية' : 'Mission & Vision'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <m.div {...motionProps}>
                <Stack spacing={5}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#fff', textAlign: textAlign }}>
                        {isArabic ? 'مهمتنا: القراءة بلمسة عصرية' : 'Mission: Modern Reading'}
                    </Typography>
                    <Typography sx={{ color: '#fff', opacity: 0.85, lineHeight: 1.8, textAlign: textAlign, fontSize: '1.1rem' }}>
                        {isArabic 
                          ? 'مهمتنا هي إعادة تعريف تجربة القراءة لتناسب نمط الحياة السريع. نحن نسعى لكسر حواجز الملل من خلال منصة تجمع بين المحتوى الغني والواجهة الذكية، مخاطبين عقول الشباب بلغة التكنولوجيا التي يتقنونها، لنحول كل هاتف محمول إلى مكتبة عالمية تنبض بالحياة.'
                          : 'Our mission is to redefine the reading experience for a fast-paced lifestyle, turning every phone into a global library.'}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#fff', textAlign: textAlign }}>
                        {isArabic ? 'رؤيتنا' : 'Our Vision'}
                    </Typography>
                    <Typography sx={{ color: '#fff', opacity: 0.85, lineHeight: 1.8, textAlign: textAlign, fontSize: '1.1rem' }}>
                        {isArabic 
                          ? 'أن نكون المنصة الرائدة التي تقود الجيل الجديد نحو استعادة شغف المعرفة، جاعلين من الكتاب الرفيق الرقمي الأول لكل شاب عربي.'
                          : 'To be the leading platform guiding the new generation towards reclaiming their passion for knowledge.'}
                    </Typography>
                  </Box>
                </Stack>
              </m.div>
            </Grid>
          </Grid>
        </Box>

        {/* --- القسم الرابع: لماذا نحن؟ --- */}
        <Box sx={{ mb: 8 }}>
          <Divider sx={{ borderColor: 'rgba(212, 175, 55, 0.3)', mb: 4 }} />
          <Grid container>
            <Grid item xs={12} md={3}>
              <Typography sx={{ color: '#D4AF37', fontWeight: 800, textAlign: textAlign, fontSize: '1.2rem', mb: { xs: 2, md: 0 } }}>
                {isArabic ? 'لماذا نحن؟' : 'Why Us?'}
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack spacing={4}>
                {[
                  { 
                    t: isArabic ? '1. بساطة الوصول' : '1. Simple Access', 
                    d: isArabic ? 'كتبك المفضلة معك في كل مكان، بدون ثقل أو عناء.' : 'Your favorite books anywhere.' 
                  },
                  { 
                    t: isArabic ? '2. تجربة تفاعلية' : '2. Interactive', 
                    d: isArabic ? 'واجهات مصممة خصيصاً لتناسب راحة العين وسهولة التصفح.' : 'Specially designed interfaces.' 
                  },
                  { 
                    t: isArabic ? '3. نبض الشباب' : '3. Youth Pulse', 
                    d: isArabic ? 'نختار المحتوى ونطوره بأساليب تكنولوجية تجعل القراءة مغامرة وليست واجباً.' : 'Technology-driven reading adventures.' 
                  },
                ].map((feat, i) => (
                  <m.div key={i} {...motionProps}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: textAlign, color: '#D4AF37' }}>{feat.t}</Typography>
                    <Typography sx={{ color: '#fff', opacity: 0.9, textAlign: textAlign, fontSize: '1.05rem' }}>{feat.d}</Typography>
                  </m.div>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}
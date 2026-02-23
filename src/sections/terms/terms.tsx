
'use client';

import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function TermsSection() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        spacing={{ xs: 4, md: 6 }}
        sx={{
          maxWidth: 1000,
          mx: 'auto',
        }}
      >
        {/* العنوان الرئيسي */}
        <Box>
            <Link
            href="/"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '16px',
                textDecoration: 'none',
                color: '#B8935C',
                fontWeight: 500,
            }}
            >
            <ArrowBackIcon sx={{ fontSize: 20 }} />
            الرجوع للصفحة الرئيسية
            </Link>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: {
                xs: '1.8rem',
                sm: '2.2rem',
                md: '2.6rem',
              },
            }}
          >
            الشروط والأحكام
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            لمنصة New Diera (نيو ديره)
          </Typography>

          <Typography sx={{ lineHeight: 2 }}>
            تشكل هذه الشروط والأحكام اتفاقًا قانونيًا ملزمًا بينك وبين منصة New Dieraنيو ديره، وتحكم استخدامك للتطبيق أو الموقع الإلكتروني والخدمات المقدمة من خلاله. ويُعد استخدامك للمنصة أو التسجيل فيها موافقة صريحة منك على هذه الشروط.
          </Typography>
        </Box>

        <Divider />

        {/* أولاً */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            أولاً: التعريفات
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              يقصد بالمصطلحات التالية – أينما وردت في هذه الشروط – المعاني الموضحة أدناه ما لم يقتضِ السياق خلاف ذلك:
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              1.المنصة: منصة New Diera (نيو ديره) الإلكترونية، وتشمل التطبيق والموقع الإلكتروني.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.New Diera (نيو ديره): الجهة المالكة والمشغلة للمنصة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.البائع: أي شخص طبيعي أو اعتباري مسجل في منصة New Diera (نيو ديره) لعرض وبيع المنتجات.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              4.المستخدم: أي شخص يستخدم المنصة، سواء بائعًا أو مشتريًا.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              5.المشتري: المستخدم الذي يقوم بشراء المنتجات عبر المنصة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              6.المنتجات: السلع المعروضة للبيع من قبل البائعين عبر منصة New Diera  نيو ديره.
            </Typography>
          </Box>
        </Box>

        {/* ثانياً */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            ثانيًا: نطاق التطبيق
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              تنظم هذه الشروط:
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              1.العلاقة بين منصة New Diera (نيو ديره) وجميع المستخدمين.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.العلاقة التعاقدية بين البائع والمشتري الناتجة عن عمليات البيع عبر المنصة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              ويقتصر دور منصة New Diera (نيو ديره) على توفير البيئة التقنية اللازمة لإتمام عمليات العرض والشراء.
            </Typography>
          </Box>
        </Box>

        {/* ثالثاً */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            ثالثًا: الالتزام بالأنظمة
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              تخضع هذه الشروط وتُفسَّر وفق الأنظمة المعمول بها في المملكة العربية السعودية، وبما في ذلك على سبيل المثال لا الحصر:
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              1.نظام التجارة الإلكترونية.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.نظام التعاملات الإلكترونية.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.نظام حماية المستهلك.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              4.نظام مكافحة الجرائم المعلوماتية.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              5.أنظمة ضريبة القيمة المضافة ذات الصلة.
            </Typography>
          </Box>
        </Box>

        {/* رابعاً */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            رابعًا: التسجيل وحساب المستخدم
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              1.يلتزم المستخدم بتقديم معلومات صحيحة ودقيقة ومحدثة عند التسجيل.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.يتحمل المستخدم المسؤولية الكاملة عن جميع الأنشطة التي تتم عبر حسابه.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.يحق لمنصة New Diera (نيو ديره) تعليق أو إلغاء الحساب في حال:
            </Typography>
            <Typography px={2} sx={{ lineHeight: 2 }}>
              -تقديم بيانات غير صحيحة أو مضللة.
            </Typography>
            <Typography px={2} sx={{ lineHeight: 2 }}>
              -مخالفة هذه الشروط أو الأنظمة المعمول بها.
            </Typography>
            <Typography px={2} sx={{ lineHeight: 2 }}>
             -إساءة استخدام المنصة أو الإضرار بسمعتها.
            </Typography>
          </Box>
        </Box>

        {/* خامسًا */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            خامسًا: التزامات البائع
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              يلتزم البائع المسجل في منصة New Diera (نيو ديره) بما يلي:
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              1.امتلاك الصفة النظامية لممارسة النشاط التجاري داخل المملكة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.عرض منتجات نظامية وغير محظورة وفق الأنظمة المعمول بها.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.تقديم وصف دقيق وصحيح للمنتجات يشمل السعر والمواصفات.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              4.الالتزام بسياسات الشحن والاسترجاع والاستبدال المعلنة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              5.الامتثال لنظام حماية المستهلك ونظام ضريبة القيمة المضافة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              6.تحمّل المسؤولية الكاملة عن جودة المنتجات وسلامتها ومطابقتها للوصف.
            </Typography>
          </Box>
        </Box>

        {/* سادسًا */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            سادسًا: دور ومسؤولية منصة New Diera نيو ديره
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              1.تعمل منصة New Diera (نيو ديره) كوسيط تقني يربط بين البائعين والمشترين.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.لا تُعد المنصة طرفًا في عقد البيع المبرم بين البائع والمشتري.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.لا تتحمل منصة New Diera (نيو ديره) أي مسؤولية عن:
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              oجودة أو سلامة المنتجات.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              oالتزامات البائع تجاه المشتري.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              4.يحق للمنصة اتخاذ الإجراءات اللازمة بحق أي بائع مخالف.
            </Typography>
          </Box>
        </Box>

        {/* سابعًا */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            سابعًا: الطلبات ووسائل الدفع
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              1.تتم عمليات الشراء والدفع عبر وسائل دفع إلكترونية آمنة ومعتمدة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.يُعد تأكيد الطلب وإتمام الدفع موافقة نهائية من المشتري.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.تكون الأسعار المعروضة شاملة لضريبة القيمة المضافة إن وجدت، ما لم يُذكر خلاف ذلك.
            </Typography>
          </Box>
        </Box>

        {/* ثامنًا */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            ثامنًا: الشحن والتوصيل
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              1.يلتزم البائع بتوضيح سياسة الشحن ومدة التوصيل قبل إتمام الطلب.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.لا تتحمل منصة New Diera (نيو ديره) مسؤولية أي تأخير ناتج عن شركات الشحن.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.تنتقل مسؤولية المنتج إلى المشتري عند استلامه.
            </Typography>
          </Box>
        </Box>

        {/* تاسعًا */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            تاسعًا: الاسترجاع والاستبدال
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              1.تخضع عمليات الاسترجاع والاستبدال لأحكام نظام التجارة الإلكترونية.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.يلتزم البائع بقبول الإرجاع خلال المدة النظامية متى ما تحققت الشروط.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.يجب توضيح سياسة الاسترجاع والاستبدال بوضوح في صفحة المنتج.
            </Typography>
          </Box>
        </Box>

        {/* عاشرًا */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            عاشرًا: حقوق الملكية الفكرية
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              1.جميع حقوق الملكية الفكرية المتعلقة بمنصة New Diera (نيو ديره) محفوظة لها.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.يمنع نسخ أو إعادة استخدام أي محتوى دون موافقة خطية مسبقة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.يتحمل البائع كامل المسؤولية عن حقوق الملكية الفكرية لمنتجاته.
            </Typography>
          </Box>
        </Box>

        {/* الحادي عشر */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            الحادي عشر: الخصوصية وحماية البيانات
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              1.تلتزم منصة New Diera (نيو ديره) بحماية البيانات الشخصية للمستخدمين.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.يتم جمع البيانات واستخدامها وفق سياسة الخصوصية المعتمدة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.لا يتم الإفصاح عن البيانات إلا وفق ما تقضي به الأنظمة ذات العلاقة.
            </Typography>
          </Box>
        </Box>

        {/* الثاني عشر */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            الثاني عشر: الإيقاف أو الإنهاء
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
             1.يحق لمنصة  New Dieraنيو ديره:
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.تعليق أو إنهاء أي حساب في حال مخالفة هذه الشروط.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              3.حذف أي محتوى مخالف أو غير نظامي دون إشعار مسبق.
            </Typography>
          </Box>
        </Box>

        {/* الثالث عشر */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            الثالث عشر: تحديد المسؤولية
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              لا تتحمل منصة New Diera (نيو ديره) أي مسؤولية عن:
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
             1.أي خسائر أو أضرار غير مباشرة.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
             2.النزاعات الناشئة بين البائع والمشتري.
            </Typography>
          </Box>
        </Box>

        {/* الرابع عشر */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            الرابع عشر: تسوية النزاعات
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Typography sx={{ lineHeight: 2 }}>
              1.يتم السعي لتسوية النزاعات وديًا قدر الإمكان.
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              2.في حال عدم التوصل إلى حل، تكون المحاكم المختصة في المملكة العربية السعودية هي الجهة المختصة.
            </Typography>
          </Box>
        </Box>

        {/* الخامس عشر */}
        <Box>
          <Typography variant="h5" fontWeight={700}>
            الخامس عشر: التعديلات
          </Typography>

          <Box sx={{ pt: 2, mb: 5 }}>
            <Typography sx={{ lineHeight: 2 }}>
              يحق لمنصة New Diera (نيو ديره) تعديل هذه الشروط في أي وقت، ويُعد استمرار استخدام المنصة بعد التعديل موافقة ضمنية عليه.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
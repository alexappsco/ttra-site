import React from 'react';
import { Share as ShareIcon, Search as SearchIcon, FavoriteBorder as FavoriteIcon, VisibilityOutlined as VisibilityIcon } from '@mui/icons-material';
import {
  Box,
  Card,
  Stack,
  Button,
  useTheme,
  Container,
  CardMedia,
  TextField,
  Typography,
  CardContent
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { paths } from 'src/routes/paths';

// --- بيانات المشاريع الوهمية ---
// ملاحظة: لقد أضفت مسارات صور وهمية يمكنك استبدالها بـ img1.svg, img2.svg, img3.svg
const DUMMY_PROJECTS = [
  {
    id: 1,
    title: 'متجر فيت بودي',
    description: 'متجر متخصص في بيع أدوات اللياقة البدنية والمكملات الغذائية، بعلامة تجارية حديثة وخدمة توصيل سريعة.',
    imagePath: '/assets/section-four/img1.svg',
    tags: ['طرح جديد'],
    location: 'المدينة الدمام',
    views: 520,
    price: '320,000 ر.س',
    cost: '95,000 ر.س',
    profit: '100,000 ر.س',
    priceChange: 5,
    profitChange: 4,
  },
  {
    id: 2,
    title: 'ميني ماركت',
    description: 'سوبرماركت قائم في حي سكني نشيط. يوفر منتجات غذائية ويومية متنوعة. بانتظام ومتابعة بكناليات.',
    imagePath: '/assets/section-four/img2.svg',
    tags: ['مستهدفة'],
    location: 'المدينة جدة',
    views: 320,
    price: '500,000 ر.س',
    cost: '180,000 ر.س',
    profit: '90,000 ر.س',
    priceChange: 24,
    profitChange: 0,
  },
  {
    id: 3,
    title: 'عيادة التوازن للعلاج الطبيعي',
    description: 'عيادة متخصصة في العلاج الطبيعي وإعادة التأهيل. تقدم خدمات متميزة بجودة ممتازة.',
    imagePath: '/assets/section-four/img3.svg',
    tags: ['طرح جديد'],
    location: 'المدينة الرياض',
    views: 2357,
    price: '1,000,000 ر.س',
    cost: '290,000 ر.س',
    profit: '230,000 ر.س',
    priceChange: 29,
    profitChange: 17,
  },
];

// --- مكون بطاقة المشروع الفردية ---
const ProjectCard: React.FC<typeof DUMMY_PROJECTS[0]> = (project) => {
  const theme = useTheme();
  const router = useRouter();

  // دالة مساعدة لتنسيق البيانات المالية
  const DataRow = ({ label, value, change, isProfit = false }: { label: string, value: string, change: number, isProfit?: boolean }) => {
    const isUp = change >= 0;
    const color = isUp ? theme.palette.success.main : theme.palette.error.main;
    const icon = isUp ? '▲' : '▼';

    return (
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
        <Typography variant="body2" color="text.secondary">{label}:</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{value}</Typography>
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color }}>
            <Typography variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 'bold' }}>{change}%</Typography>
            <Typography variant="caption" sx={{ lineHeight: 1 }}>{icon}</Typography>
          </Stack>
        </Stack>
      </Stack>
    );
  };


  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 350,
        borderRadius: 3,
        boxShadow: theme.shadows[4],
        transition: '0.3s',
        '&:hover': {
          boxShadow: theme.shadows[8],
          transform: 'translateY(-2px)'
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="180"
          image={project.imagePath}
          alt={project.title}

          sx={{ objectFit: 'cover', width: '100%' }}
        />
        {/* شارة 'طرح جديد' */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: theme.palette.error.main,
            color: '#fff',
            borderRadius: 1,
            px: 1,
            py: 0.5
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>{project.tags[0]}</Typography>
        </Box>
      </Box>

      <CardContent sx={{ p: 2, textAlign: 'right' }}>
        {/* العنوان والعداد */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0048B5' }}>{project.title}</Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="caption" color="text.secondary">{project.views}</Typography>
            <VisibilityIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
          </Stack>
        </Stack>

        {/* الوصف */}
        <Typography variant="body2" color="text.secondary" mb={2}>
          {project.description}
        </Typography>

        {/* البيانات المالية */}
        <Box sx={{ borderTop: `1px solid ${theme.palette.divider}`, pt: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>القيمة المطلوبة:</Typography>
          <DataRow label="البيع" value={project.price} change={project.priceChange} />
          <DataRow label="التكاليف" value={project.cost} change={project.priceChange} /> {/* استخدام نفس قيمة التغير للمثال */}
          <DataRow label="الأرباح" value={project.profit} change={project.profitChange} isProfit />
        </Box>

        {/* الأيقونات السفلية */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2, borderTop: `1px solid ${theme.palette.divider}`, pt: 1 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary">{project.location}</Typography>
            {/* أيقونة الموقع هنا */}
          </Stack>
          <Stack direction="row" spacing={1}>
            <FavoriteIcon sx={{ cursor: 'pointer', color: theme.palette.grey[500] }} />
            <ShareIcon sx={{ cursor: 'pointer', color: theme.palette.grey[500] }} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};


// --- المكون الرئيسي للقسم ---
export const ProjectShowcaseSection: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
        backgroundColor: '#F7F9FA', // خلفية فاتحة
        textAlign: 'center',
        direction: 'rtl' // للغة العربية
      }}
    >
      <Container maxWidth="lg">
        {/* العنوان والوصف */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            // ✅ التعديلات لتطابق حجم ووزن وخط الديسكتوب
            fontWeight: 700,
            color: '#226EF2', // لون أزرق جديد
            fontSize: { xs: '2rem', md: '42px' }, // 42px للديسكتوب، متجاوب للجوال
            lineHeight: { xs: 1.2, md: '51px' }, // 51px للديسكتوب
            mb: 1
          }}
        >
          أمثلة لعرض المشاريع
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          mb={4}
        >
          هذه أمثلة لعرض المشاريع المطروحة داخل المنصة — يمكنك الآن تصفح الإعلانات أو بدء طرح مشروعك بكل سهولة.
        </Typography>

        شريط البحث
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          mb={6}
          sx={{
            maxWidth: 600,
            mx: 'auto',
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: 2.5, // padding inline ~ 20px
              gap: 1.25, // gap ~ 10px
              width: 90,
              height: 51,
              margin: '0 auto',
              bgcolor: '#0095FA',
              boxShadow: '0px 4px 34px rgba(112, 79, 56, 0.14)',
              borderRadius: '65px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#0085E0',
                boxShadow: '0px 4px 28px rgba(112, 79, 56, 0.18)',
              },
            }}
          >
            بحث
          </Button>
          <TextField
            fullWidth
            placeholder="البحث عن الشركات"
            variant="outlined"
            size="medium"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: theme.palette.grey[500], mr: 1 }} />,
              sx: {
                borderRadius: 99,
                backgroundColor: '#fff',
                height: 56,
                paddingRight: '12px !important', // تعديل التباعد الداخلي
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.grey[300],
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          />
        </Stack>

            {/* عرض الصور فقط */}
<Stack
  direction={{ xs: 'column', md: 'row' }}
  spacing={{ xs: 4, md: 3 }}
  justifyContent="center"
  alignItems="center"
  mb={6}
>
  {DUMMY_PROJECTS.map((project) => (
    <Box
      key={project.id}
      sx={{
        position: 'relative',
        width: { xs: '100%', sm: 300, md: 350 },
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
        },
      }}
    >
      <Box
        component="img"
        src={project.imagePath}
        alt={project.title}
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'cover',
        }}
      />
    </Box>
  ))}
</Stack>

        <Button
          variant="contained"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            px: 2.5, // 10px horizontal padding
            py: 1.5, // 12px vertical padding
            gap: 1.25, // 10px gap
            width: 623,
            height: 58,
            bgcolor: '#0095FA',
            boxShadow: '0px 4px 5px rgba(7, 102, 232, 0.2)',
            borderRadius: '14px',
            color: '#fff',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textTransform: 'none',
            mx: 'auto', // center horizontally
            '&:hover': {
              bgcolor: '#0085E0',
              boxShadow: '0px 4px 8px rgba(7, 102, 232, 0.3)',
            },
          }}
          onClick={()=>{router.push(paths.controlPanel.landing.view); }}
        >

          تصفح النشاطات المطروحة</Button>

      </Container>
    </Box>
  );
};

export default ProjectShowcaseSection;

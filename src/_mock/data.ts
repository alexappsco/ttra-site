export type Blog = {
  id: string;
  image: string;
  title: string;
  description: string;
  content: string;
  date: string;
};

export const BLOGS: Blog[] = [
  {
    id: '1',
    image: '/assets/blog/cloth.png',
    title: 'الملابس والاقمشة',
    description: ' أقمشة فاخرة وملابس تقليدية',
    content: 'اكتشف مجموعة متنوعة من العطور العربية الأصيلة والبهارات الشرقية المختارة بعناية، من العود والمسك والورد الطائفي إلى خلطات البهارات المستوحاة من أشهر الأسواق التقليدية.',
    date: 'منذ 5 أيام',
  },
  {
    id: '2',
    image: '/assets/blog/home.png',
    title: 'المنزل والديكور',
    description: 'ديكورات عصرية وتراثية',
    content: 'المحتوى الكامل للمقال هنا...',
    date: 'منذ 6 أيام',
  },
  {
    id: '3',
    image: '/assets/blog/cof.png',
    title: 'القهوة والتمور',
    description: 'قهوة عربية أصيلة وتمور فاخرة',
    content: 'المحتوى الكامل للمقال هنا...',
    date: 'منذ أسبوع',
  },
  {
    id: '4',
    image: '/assets/blog/man.png',
    title: 'البهارات والعطور',
    description: ' بهارات طازجة وعطور شرقية',
    content: 'المحتوى الكامل للمقال هنا...',
    date: 'منذ أسبوعين',
  },
];

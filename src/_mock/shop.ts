export type Shop = {
  id: string;
  image: string;
  title: string;
  description: string;
  content: string;
};

export const Shop: Shop[] = [
  {
    id: '1',
    image: '/assets/blog/thmari.jpg',
    title: 'سوق الثمري',
    description: 'أقمشة فاخرة وملابس تقليدية',
    content:
      'اكتشف أروع الأقمشة الفاخرة والملابس التقليدية الأصيلة، وتمتع بتجربة تسوق مستوحاة من أصالة الأسواق القديمة في الرياض.',
  },
  {
    id: '2',
    image: '/assets/blog/muqela.jpg',
    title: 'سوق المعقلية',
    description: 'ديكورات عصرية وتراثية',
    content:
      'تجد هنا مزيجًا فريدًا من الديكورات العصرية والقطع التراثية التي تعكس ثقافة السوق وتاريخ الحرفيين المحليين.',
  },
  {
    id: '3',
    image: '/assets/blog/zaal.jpg',
    title: 'سوق الزل',
    description: 'قهوة عربية أصيلة وتمور فاخرة',
    content:
      'تمتع بأجواء السوق العربية الأصيلة مع مجموعة مختارة من القهوة العربية الفاخرة والتمور الطازجة المستوحاة من الأسواق التقليدية.',
  },
  {
    id: '4',
    image: '/assets/blog/dera.jpg',
    title: 'سوق الديرة',
    description: 'بهارات طازجة وعطور شرقية',
    content:
      'استكشف نكهات الشرق مع مجموعة من البهارات الطازجة والعطور العربية، لتجربة تسوق غنية بروائح وأساليب الأسواق القديمة.',
  },
];

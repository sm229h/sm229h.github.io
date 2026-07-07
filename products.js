// داده‌ی نمونه محصولات بلو شاپ
const PRODUCTS = [
  {
    id: 1,
    title: "هدفون بی‌سیم بلوشاپ مدل Aero X2",
    category: "لوازم صوتی",
    price: 2450000,
    oldPrice: 2990000,
    rating: 4.6,
    reviews: 214,
    stock: true,
    image: "https://picsum.photos/seed/blue1/600/600",
    thumbs: ["https://picsum.photos/seed/blue1/600/600","https://picsum.photos/seed/blue1b/600/600","https://picsum.photos/seed/blue1c/600/600"],
    specs: { "برند":"BlueShop","رنگ":"آبی سرمه‌ای","نوع اتصال":"بلوتوث ۵.۳","باتری":"تا ۳۰ ساعت","گارانتی":"۱۸ ماهه" },
    description: "هدفون بی‌سیم با حذف نویز فعال، مناسب سفر و کار روزمره با کیفیت صدای استودیویی."
  },
  {
    id: 2,
    title: "ساعت هوشمند بلوشاپ Pulse Mini",
    category: "لوازم دیجیتال",
    price: 3190000,
    oldPrice: 3690000,
    rating: 4.4,
    reviews: 132,
    stock: true,
    image: "https://picsum.photos/seed/blue2/600/600",
    thumbs: ["https://picsum.photos/seed/blue2/600/600","https://picsum.photos/seed/blue2b/600/600","https://picsum.photos/seed/blue2c/600/600"],
    specs: { "برند":"BlueShop","صفحه‌نمایش":"۱.۹۶ اینچ AMOLED","ضدآب":"IP68","باتری":"تا ۷ روز","گارانتی":"۱۲ ماهه" },
    description: "پایش سلامت، اعلان‌های هوشمند و طراحی سبک برای استفاده تمام‌روز."
  },
  {
    id: 3,
    title: "کیف پول چرم بلوشاپ کلاسیک",
    category: "مد و پوشاک",
    price: 890000,
    oldPrice: null,
    rating: 4.8,
    reviews: 87,
    stock: true,
    image: "https://picsum.photos/seed/blue3/600/600",
    thumbs: ["https://picsum.photos/seed/blue3/600/600","https://picsum.photos/seed/blue3b/600/600","https://picsum.photos/seed/blue3c/600/600"],
    specs: { "جنس":"چرم طبیعی","رنگ":"آبی نفتی","تعداد جیب":"۸ عدد","گارانتی":"۶ ماهه" },
    description: "کیف پول دست‌دوز از چرم طبیعی با جای‌کارت فراوان و درزهای مقاوم."
  },
  {
    id: 4,
    title: "اسپیکر قابل حمل بلوشاپ Wave 20",
    category: "لوازم صوتی",
    price: 1590000,
    oldPrice: 1890000,
    rating: 4.3,
    reviews: 156,
    stock: true,
    image: "https://picsum.photos/seed/blue4/600/600",
    thumbs: ["https://picsum.photos/seed/blue4/600/600","https://picsum.photos/seed/blue4b/600/600","https://picsum.photos/seed/blue4c/600/600"],
    specs: { "برند":"BlueShop","توان خروجی":"۲۰ وات","ضدآب":"IPX7","باتری":"۱۲ ساعت","گارانتی":"۱۲ ماهه" },
    description: "صدای قدرتمند و باس عمیق در بدنه‌ای کوچک و ضدآب برای هر جایی."
  },
  {
    id: 5,
    title: "کوله پشتی بلوشاپ سیتی‌پک",
    category: "کیف و کوله",
    price: 1250000,
    oldPrice: 1450000,
    rating: 4.5,
    reviews: 98,
    stock: true,
    image: "https://picsum.photos/seed/blue5/600/600",
    thumbs: ["https://picsum.photos/seed/blue5/600/600","https://picsum.photos/seed/blue5b/600/600","https://picsum.photos/seed/blue5c/600/600"],
    specs: { "جنس":"پارچه ضدآب","جای لپ‌تاپ":"تا ۱۵.۶ اینچ","حجم":"۲۲ لیتر","گارانتی":"۱۲ ماهه" },
    description: "طراحی شهری با جای مخصوص لپ‌تاپ و پورت شارژ USB روی بدنه."
  },
  {
    id: 6,
    title: "پاوربانک بلوشاپ ۲۰۰۰۰ میلی‌آمپر",
    category: "لوازم دیجیتال",
    price: 980000,
    oldPrice: 1190000,
    rating: 4.2,
    reviews: 241,
    stock: true,
    image: "https://picsum.photos/seed/blue6/600/600",
    thumbs: ["https://picsum.photos/seed/blue6/600/600","https://picsum.photos/seed/blue6b/600/600","https://picsum.photos/seed/blue6c/600/600"],
    specs: { "ظرفیت":"۲۰۰۰۰mAh","شارژ سریع":"۲۲.۵ وات","تعداد پورت":"۳ عدد","گارانتی":"۱۸ ماهه" },
    description: "شارژ سریع و همزمان چند دستگاه با نمایشگر دیجیتال درصد باتری."
  },
  {
    id: 7,
    title: "عینک آفتابی بلوشاپ هورایزن",
    category: "مد و پوشاک",
    price: 690000,
    oldPrice: null,
    rating: 4.7,
    reviews: 64,
    stock: false,
    image: "https://picsum.photos/seed/blue7/600/600",
    thumbs: ["https://picsum.photos/seed/blue7/600/600","https://picsum.photos/seed/blue7b/600/600","https://picsum.photos/seed/blue7c/600/600"],
    specs: { "جنس فریم":"استات ایتالیایی","حفاظت":"UV400","رنگ":"آبی دودی","گارانتی":"۱۲ ماهه" },
    description: "طراحی مینیمال با پوشش کامل اشعه‌ی UV برای روزهای آفتابی."
  },
  {
    id: 8,
    title: "دوربین اکشن بلوشاپ GoWave 4K",
    category: "لوازم دیجیتال",
    price: 4290000,
    oldPrice: 4890000,
    rating: 4.6,
    reviews: 73,
    stock: true,
    image: "https://picsum.photos/seed/blue8/600/600",
    thumbs: ["https://picsum.photos/seed/blue8/600/600","https://picsum.photos/seed/blue8b/600/600","https://picsum.photos/seed/blue8c/600/600"],
    specs: { "رزولوشن":"4K/60fps","ضدآب":"تا ۱۰ متر","تثبیت تصویر":"دارد","گارانتی":"۱۸ ماهه" },
    description: "فیلمبرداری حرفه‌ای در سفر و ورزش با تثبیت‌کننده تصویر پیشرفته."
  }
];

function formatPrice(n){
  return n.toLocaleString('fa-IR') + ' تومان';
}

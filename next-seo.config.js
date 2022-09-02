/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Bánh tráng Hương Gió",
  titleTemplate: "%s | Bánh tráng Hương Gió",
  defaultTitle: "Bánh tráng Hương Gió",
  description: "Đem đến những loại bánh tráng ngon nhất trên thị trường",
  canonical: "https://rice-paper.vercel.app/",
  openGraph: {
    url: "https://rice-paper.vercel.app/",
    title: "Bánh tráng Hương Gió - Đặc sản Tây Ninh",
    description: "Đem đến những loại bánh tráng ngon nhất trên thị trường",
    images: [
      {
        url: "/Ricepaperlogo.png",
        alt: "Bánh tráng Hương Gió og-image",
      },
    ],
    site_name: "Bánh tráng Hương Gió",
  },
};

export default defaultSEOConfig;

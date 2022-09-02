/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Bánh tráng Hương Gió",
  titleTemplate: "%s | Bánh tráng Hương Gió",
  defaultTitle: "Bánh tráng Hương Gió",
  description: "Đem đến những loại bánh tráng ngon nhất trên thị trường",
  canonical: "https://rice-paper.vercel.app/",
  openGraph: {
    url: "https://rice-paper.vercel.app/",
    title: "nextarter-chakra",
    description: "Đem đến những loại bánh tráng ngon nhất trên thị trường",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "Bánh tráng Hương Gió og-image",
      },
    ],
    site_name: "Bánh tráng Hương Gió",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;

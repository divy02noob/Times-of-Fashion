export const metadata = {
  title: "About Us",
  description: "Our story, ethos, and mission at Times of Fashion.",
};

export default function AboutPage() {
  // Server component: render client content wrapper
  const AboutContent = require("./AboutContent").default;
  return <AboutContent />;
}



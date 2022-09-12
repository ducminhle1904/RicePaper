import { Box } from "@mantine/core";

import FeatureSections from "lib/components/FeatureSections";
import HomeBanner from "lib/components/HomeBanner";
import ProductSection from "lib/components/ProductSection";

const Home = () => {
  return (
    <Box>
      <HomeBanner />
      <FeatureSections />
      <ProductSection />
    </Box>
  );
};

export default Home;

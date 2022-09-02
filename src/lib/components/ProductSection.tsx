import { Center, Title, Box, Text, Grid } from "@mantine/core";

import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <Box>
      <Center
        mb={50}
        sx={() => ({
          display: "flex",
          flexDirection: "column",
        })}
      >
        <Title
          color="#F28123"
          weight={700}
          order={1}
          size="50px"
          className="animate__animated animate__fadeInUp"
        >
          TOP COMBO BÁN CHẠY
        </Title>
        <Text
          color="cyan"
          size="sm"
          className="animate__animated animate__fadeInDown"
        >
          Những sản phẩm bán chạy trong tháng
        </Text>
      </Center>
      <Grid>
        <Grid.Col span={3}>
          <ProductCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <ProductCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <ProductCard />
        </Grid.Col>
        <Grid.Col span={3}>
          <ProductCard />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

import { Center, Title, Box, Text, Grid, Divider } from "@mantine/core";

import { ContactUs } from "./ContactUsForm";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  return (
    <Box>
      <Center
        mb={100}
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
          align="center"
        >
          TOP COMBO BÁN CHẠY
        </Title>
        <Text
          color="cyan"
          size="sm"
          className="animate__animated animate__fadeInDown"
          mb={50}
        >
          Những sản phẩm bán chạy trong tháng
        </Text>
        <Grid>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid.Col>
        </Grid>
      </Center>
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
          align="center"
          mb={50}
        >
          BÁNH TRÁNG TÂY NINH
        </Title>
        <Divider size="xl" color="cyan" />
        <Grid>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid.Col>
          <Grid.Col sm={6} md={4} lg={3}>
            <ProductCard />
          </Grid.Col>
        </Grid>
      </Center>
      <ContactUs />
    </Box>
  );
}

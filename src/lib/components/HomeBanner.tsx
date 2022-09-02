import {
  BackgroundImage,
  Center,
  Title,
  Box,
  Text,
  Group,
  Button,
} from "@mantine/core";

export default function HomeBanner() {
  return (
    <Box>
      <BackgroundImage
        src="/homebanner.jpg"
        radius="sm"
        style={{ width: "100%", height: "50vh", backgroundPosition: "center" }}
      >
        <Center
          p="md"
          sx={() => ({
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          })}
        >
          <Text
            color="#FFFFFF"
            weight={700}
            size="xl"
            className="animate__animated animate__fadeInDown"
          >
            HƯƠNG GIÓ
          </Text>
          <Title
            color="#F28123"
            weight={700}
            order={1}
            size="50px"
            className="animate__animated animate__fadeInUp"
          >
            ĐẶC SẢN BÁNH TRÁNG TÂY NINH
          </Title>
          <Group spacing={20}>
            <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
              Xem bánh tráng
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              Đăt hàng
            </Button>
          </Group>
        </Center>
      </BackgroundImage>
    </Box>
  );
}

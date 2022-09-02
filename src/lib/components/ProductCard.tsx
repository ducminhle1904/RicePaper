import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Button,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

const mockdata = [{ label: "50 loại bơ" }, { label: "50 loại me" }];

export default function ProductCard() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <List.Item key={feature.label}>{feature.label}</List.Item>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src="/banhtrang.jpg" alt="Tesla Model S" />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>Combo 50 Bơ 30 Me</Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Chi tiết
        </Text>

        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size={16} />
            </ThemeIcon>
          }
        >
          {features}
        </List>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              360.000Đ
            </Text>
            <Text
              size="sm"
              color="dimmed"
              weight={500}
              sx={{ lineHeight: 1 }}
              mt={3}
            >
              /combo
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Mua ngay
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}

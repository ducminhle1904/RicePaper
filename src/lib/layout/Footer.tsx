import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  Image,
} from "@mantine/core";
import { IconBrandFacebook, IconBrandShopee } from "@tabler/icons";

import type { FooterLinksProps } from "lib/helper/interface";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  description: {
    marginTop: 5,
    textAlign: "center",
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",
    gap: 50,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export default function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link) => (
      <Text<"a">
        key={link.label}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            radius="md"
            src="/Ricepaperlogo.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <Text size="xs" color="dimmed" className={classes.description}>
            CỬA HÀNG BÁNH TRÁNG HƯƠNG GIÓ
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © Copyright 2022-2025 Đặc Sản Bánh Tráng Tây Ninh.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Text color="dimmed" size="sm">
            Kết nối với chúng tôi
          </Text>
          <ActionIcon size="lg">
            <IconBrandFacebook size={18} stroke={1.5} color="blue" />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandShopee size={18} stroke={1.5} color="orange" />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

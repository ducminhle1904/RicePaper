import {
  ActionIcon,
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Indicator,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import {
  IconSearch,
  IconShoppingCart,
  IconHome2,
  IconBuildingStore,
  IconArticle,
  IconCar,
  IconPhoneCall,
  IconCreditCard,
} from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";

import type { LinkItem } from "lib/helper/interface";

const useStyles = createStyles((theme) => ({
  headerShadow: {
    boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
  },
  inner: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: 110,
    maxWidth: "unset",
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export default function HeaderMiddle({ links }: LinkItem) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].label);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link href={link.link} key={link.label} passHref>
      <a
        href={link.link}
        className={cx(classes.link, {
          [classes.linkActive]: active === link.label,
        })}
        onClick={() => {
          setActive(link.label);
        }}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={110} fixed className={classes.headerShadow}>
      <Container className={classes.inner}>
        <Menu
          shadow="md"
          width="100%"
          transition="rotate-right"
          transitionDuration={150}
        >
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              className={classes.burger}
            />
          </Menu.Target>

          <Menu.Dropdown mt={30}>
            <Menu.Item
              component={NextLink}
              href="/"
              icon={<IconHome2 size={14} />}
            >
              Trang chủ
            </Menu.Item>

            <Menu.Item
              component={NextLink}
              href="/san-pham"
              icon={<IconBuildingStore size={14} />}
            >
              Cửa hàng
            </Menu.Item>

            <Menu.Item icon={<IconCar size={14} />}>Đặt hàng</Menu.Item>
            <Menu.Item icon={<IconArticle size={14} />}>Tin tức</Menu.Item>
            <Menu.Item icon={<IconPhoneCall size={14} />}>Liên hệ</Menu.Item>
            <Menu.Item icon={<IconCreditCard size={14} />}>
              Thanh toán
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <NextLink href="/">
          <Image
            radius="md"
            src="/Ricepaperlogo.png"
            alt="Logo"
            width={100}
            height={100}
            style={{ cursor: "pointer" }}
          />
        </NextLink>

        <Group className={classes.links} spacing={20}>
          {items}
        </Group>

        <Group spacing={5} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg" color="cyan">
            <IconSearch size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="dark">
            <Indicator inline label="1" size={16}>
              <IconShoppingCart size={25} stroke={1.5} />
            </Indicator>
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}

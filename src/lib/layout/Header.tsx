import {
  ActionIcon,
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  Image,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconShoppingCart } from "@tabler/icons";
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
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.label,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.label);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={110} fixed className={classes.headerShadow}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Image
          radius="md"
          src="/Ricepaperlogo.png"
          alt="Logo"
          width={100}
          height={100}
        />
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

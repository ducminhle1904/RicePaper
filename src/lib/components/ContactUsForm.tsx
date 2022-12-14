import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";

import { ContactIconsList } from "./ContactIcons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [
  { id: 1, Icon: IconBrandTwitter },
  { id: 2, Icon: IconBrandYoutube },
  { id: 3, Icon: IconBrandInstagram },
];

export function ContactUs() {
  const { classes } = useStyles();

  const icons = social.map((Icon) => (
    <ActionIcon
      key={Icon.id}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon.Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Li??n h??? ?????t h??ng</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            ????? l???i email v?? s??? ??i???n tho???i, ch??ng t??i s??? li??n h??? trong v??ng 24
            gi???.
          </Text>

          <ContactIconsList variant="white" />

          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="H??? & T??n"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="L???i nh???n"
            placeholder="T??i mu???n ?????t mua s???n ph???m,..."
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button className={classes.control}>G???i tin nh???n</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}

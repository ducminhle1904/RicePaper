import { Box } from "@mantine/core";
import type { ReactNode } from "react";

import { FOOTER_ITEM, HEADER_ITEM } from "lib/helper";

import Footer from "./Footer";
import HeaderMiddle from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={() => ({
        margin: "0 auto",
        transition: "0.5s ease-out",
      })}
    >
      <Box>
        <HeaderMiddle links={HEADER_ITEM.links} />
        <Box
          sx={() => ({
            marginY: 22,
            padding: "0 50px",
          })}
        >
          {children}
        </Box>
        <Footer data={FOOTER_ITEM.data} />
      </Box>
    </Box>
  );
};

export default Layout;

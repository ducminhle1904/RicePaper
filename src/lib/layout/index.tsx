import { Box, LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

import { FOOTER_ITEM, HEADER_ITEM } from "lib/helper";

import Footer from "./Footer";
import HeaderMiddle from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <Box
      sx={() => ({
        margin: "0 auto",
        transition: "0.5s ease-out",
      })}
    >
      <Box>
        <HeaderMiddle links={HEADER_ITEM.links} />
        {loading ? (
          <LoadingOverlay visible overlayBlur={2} />
        ) : (
          <Box
            sx={() => ({
              marginTop: 120,
              padding: "0 50px",
              "@media (max-width: 415px)": {
                padding: "0 20px",
              },
            })}
          >
            {children}
          </Box>
        )}

        <Footer data={FOOTER_ITEM.data} />
      </Box>
    </Box>
  );
};

export default Layout;

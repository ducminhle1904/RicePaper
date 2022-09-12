import { IconTruck, IconCertificate, IconCoin } from "@tabler/icons";

import type { FooterLinksProps, LinkItem } from "./interface";

export const HEADER_ITEM: LinkItem = {
  links: [
    {
      link: "/",
      label: "Trang chủ",
    },
    {
      link: "/san-pham",
      label: "Cửa hàng",
    },
    {
      link: "#",
      label: "Đặt hàng",
    },
    {
      link: "#",
      label: "Tin tức",
    },
    {
      link: "#",
      label: "Liên hệ",
    },
    {
      link: "#",
      label: "Thanh toán",
    },
  ],
};

export const FOOTER_ITEM: FooterLinksProps = {
  data: [
    {
      title: "Thông tin",
      links: [
        {
          label: "Số điện thoại: 0947734495",
          link: "#",
        },
        {
          label: "Email: ducle7144@gmail.com",
          link: "#",
        },
        {
          label: "Địa chỉ: 269/9A, Trung Sơn, Q8",
          link: "#",
        },
      ],
    },
    {
      title: "Sản phẩm",
      links: [
        {
          label: "Muối Tây Ninh",
          link: "#",
        },
        {
          label: "Món ngon Tây Ninh",
          link: "#",
        },
        {
          label: "Combo Đặc Sản",
          link: "#",
        },
        {
          label: "Nguyên liệu bánh tráng",
          link: "#",
        },
      ],
    },
  ],
};

export const FEATURE_SECTION_ITEM = [
  {
    icon: IconTruck,
    title: "Miễn phí giao hàng phạm vi 5km",
    description: "Giao tận tay cho khách hàng",
  },
  {
    icon: IconCertificate,
    title: "Chất lượng tốt nhất",
    description:
      "Hương gió tự tin đem đến chất lượng sản phẩm tốt nhất cho khách hàng",
  },
  {
    icon: IconCoin,
    title: "Giá cả cạnh tranh",
    description: "Nguồn hàng đầu mối, tự tin giá cả cạnh tranh với thị trường",
  },
];

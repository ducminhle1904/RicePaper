export interface LinkItem {
  links: { link: string; label: string }[];
}
export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

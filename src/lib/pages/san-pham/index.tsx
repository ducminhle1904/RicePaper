import Breadcrumbs from "nextjs-breadcrumbs";

export default function Products() {
  return (
    <Breadcrumbs
      useDefaultStyle
      rootLabel="Trang chủ"
      replaceCharacterList={[{ from: "san-pham", to: "Sản Phẩm" }]}
    />
  );
}

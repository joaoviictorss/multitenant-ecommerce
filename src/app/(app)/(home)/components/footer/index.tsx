import { FooterProps } from "./data";
import { Footer as Layout } from "./Layout";

const Footer = (props: FooterProps) => {
  const layoutProps = {
    ...props,
  }
  return <Layout {...layoutProps} />;
};

export { Footer };
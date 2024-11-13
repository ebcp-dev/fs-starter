import FooterClient from "./footer-client";
import { FooterServer } from "./server";

export function Footer() {
  return (
    <FooterClient>
      <FooterServer />
    </FooterClient>
  );
}

export default Footer;

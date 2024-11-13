import HeaderClient from "./header-client";
import { HeaderServer } from "./server";

export function Header() {
  return (
    <HeaderClient>
      <HeaderServer />
    </HeaderClient>
  );
}

export default Header;

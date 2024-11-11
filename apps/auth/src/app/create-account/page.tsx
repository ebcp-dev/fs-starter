import { CreateAccount } from "@fs-starter/create-account";
import { CreateAccountServer } from "@fs-starter/create-account/server";

export default function CreateAccountPage() {
  return (
    <CreateAccount>
      <CreateAccountServer />
    </CreateAccount>
  );
}

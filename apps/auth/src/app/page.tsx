import Landing from "../lib/landing/landing";
import { LandingServer } from "../lib/landing/landing-server";

export default function LandingPage() {
  return (
    <Landing>
      <LandingServer />
    </Landing>
  );
}

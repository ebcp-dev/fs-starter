import "./global.css";
import { Footer, Header } from "@fs-starter/layout/server";

export const metadata = {
  title: "auth",
  description: "Authentication web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

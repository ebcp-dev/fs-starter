import "./global.css";
import { Footer, Header } from "@fs-starter/layout/server";
import { ThemeProvider } from "@fs-starter/layout";
import { FC, PropsWithChildren } from "react";

export const metadata = {
  title: "auth",
  description: "Authenticate to access more features",
};
const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    // Note! If you do not add suppressHydrationWarning to your <html> you will get warnings because next-themes updates that element. This property only applies one level deep, so it won't block hydration warnings on other elements.
    // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

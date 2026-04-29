import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { SystemWarning } from "./SystemWarning";

type SiteShellProps = {
  children: ReactNode;
  currentPage?: string;
};

export function SiteShell({ children, currentPage }: SiteShellProps) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SystemWarning />
      <Nav currentPage={currentPage} />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}

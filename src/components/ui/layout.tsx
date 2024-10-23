import { Cursor } from "@/components/ui/cursor";
import { Header } from "@/components/ui/header";
import { Fragment, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <Fragment>
    <main className="container grid grow grid-cols-12 gap-6">
      <Outlet />
    </main>
    <Header />
    <Cursor />
  </Fragment>
);

Layout.SafeMargin = ({ children }: PropsWithChildren) => (
  <div className="pt-32">{children}</div>
);

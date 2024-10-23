import { Layout } from "@/components/ui/layout";
import { Home } from "@/pages";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

type Route = RouteObject & {
  label?: string;
};

export const pages: Route[] = [
  {
    path: "/",
    label: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    label: "About us",
    element: <h1>About us</h1>,
  },
  {
    path: "/projects",
    label: "Projects",
    element: <h1>Projects</h1>,
  },
  {
    path: "/team",
    label: "Our team",
    element: <h1>Our team</h1>,
  },
  {
    path: "/enrollment",
    element: <h1>Enrollment Form</h1>,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: pages,
  },
]);

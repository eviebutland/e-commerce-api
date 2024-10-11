import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction , LoaderFunctionArgs} from "@remix-run/node";

import "./tailwind.css";
import invariant from "tiny-invariant";  // used for throwing errors

export const loader = (): boolean => {
  console.log('running in loader')
  return true
  // invariant(params.contactId, "Missing contactId param");
  // const loggedIn = getLogin(params.contactId) 
  // return json(loggedIn) 
}
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const loggedIn = useLoaderData<typeof loader>()// this is how you access the API reponse in the code
  console.log(loggedIn) 
  return <Outlet />;
}

import type { MetaFunction } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { faTree } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
  return (
    <div className="flex  items-center">
      <div className="flex justify-between items-center gap-16 w-full">
        <header className="justify-center">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to the One-Stop-Christmas-Shop
          </h1>
          <FontAwesomeIcon icon={faTree} />
        </header>
        <nav className="flex  items-center justify-center gap-4 ">
          <ul className="flex justify-end">
            {resources.map(({ href, text }) => (
              <li key={href}>
                <a
                  className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const resources = [
  {
    href: "https://remix.run/start/quickstart",
    text: "New in",
  },
  {
    href: "https://remix.run/start/tutorial",
    text: "Home",
  },
  {
    href: "https://remix.run/docs",
    text: "Cooking",
  },
  {
    href: "https://rmx.as/discord",
    text: "On the day",
  },
];

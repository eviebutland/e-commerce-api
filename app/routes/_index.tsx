import type { MetaFunction } from "@remix-run/node";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { faTree } from "@fortawesome/free-solid-svg-icons";
import christmasInLondon from '~/assets/christmas-phonebox.png'
export default function Index() {
  return (
    <div >
      <div className="flex items-center p-4">
      <div className="flex justify-between items-center gap-16 w-full">
        <header className="justify-center flex items-center space-x-4">
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
        <section>
          <div></div> 
          {/* make a background image instead */}
          <img className="h-100 w-full cover" src={christmasInLondon} alt="Christmas in London"/>
        </section>
        {/* Grid with links to 4 sections */}
        {/* article section */}
        {/* pull through video's / images from instagram / pinterest */}
    </div>
  );
}

const resources = [
  {
    href: "/new-in",
    text: "New in",
  },
  {
    href: "/homewear",
    text: "Home",
  },
  {
    href: "/cooking",
    text: "Cooking",
  },
  {
    href: "/on-the-day",
    text: "On the day",
  },
];

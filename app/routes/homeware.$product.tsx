import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({
  params,
}: LoaderFunctionArgs) {
  console.log(params)
  return params
  // return fakeDb.getAllConcertsForCity(params.city);
}

export default function Product() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
   
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            here is {}
          </h1>
        
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          go back?
        </nav>
      </div>
    </div>
  );
}



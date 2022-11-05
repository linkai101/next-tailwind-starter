
export default function Home() {
  return <>
    <div className="container px-8 py-8">
      <h1 className="text-3xl">next-tailwind-starter <span className="text-lg text-gray-400">v2022.11</span></h1>
      <p className="text-md">
        by <a href="https://github.com/linkai101" className="font-bold text-blue-500 hover:underline" target="_blank">@linkai101</a>
      </p>

      <p className="mt-4">
        A starter Next.js project installed with TypeScript and Tailwind.
      </p>
      <p className="text-sm mt-2">
        <b>[BETA]</b> Using the experimental <code>/app</code> directory of Next.js v13.
      </p>
    </div>
  </>;
}
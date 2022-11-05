import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>next-tailwind-starter</title>
        <meta name="description" content="by @linkai101 on github" />
      </head>
      <body>{children}</body>
    </html>
  )
}

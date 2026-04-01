export const metadata = {
  title: 'Worldex Protocol',
  description: 'DeFi on World Chain'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

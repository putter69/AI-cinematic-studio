import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PromptLab - Engineer Cinematic AI Prompts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayaveer Nallapati — Software Engineer & AI/ML Developer",
  description:
    "Portfolio of Jayaveer Nallapati, a software engineer focused on backend systems, full-stack products, and applied AI.",
  other: {
    "codex-preview": "development",
    "theme-color": "#f7f8fa",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=t?t==='dark':true;document.documentElement.dataset.theme=d?'dark':'light';document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){document.documentElement.dataset.theme='dark';document.documentElement.style.colorScheme='dark';}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

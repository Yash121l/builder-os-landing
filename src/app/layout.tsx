import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

// -- SEO Metadata --
export const metadata: Metadata = constructMetadata({
  title: "Builder OS by Hevarto – Modern Software Stack for Builders",
  description:
    "Builder OS by Hevarto is your all-in-one operating system to manage projects, teams, CRM, security, and more — designed for modern builders.",
  keywords: [
    "Builder OS",
    "Hevarto",
    "Construction CRM",
    "Project Management",
    "Real Estate Software",
    "Smart Building",
  ],
  metadataBase: new URL("https://builder-os.hevarto.com"),
  openGraph: {
    title: "Builder OS by Hevarto",
    description:
      "Manage your builder business with a powerful and intuitive OS. CRM, security, billing & more — all in one place.",
    url: "https://builder-os.hevarto.com",
    siteName: "Builder OS",
    images: [
      {
        url: "https://builder-os.hevarto.com/og-image.png", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Builder OS by Hevarto",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Builder OS by Hevarto",
    description:
      "Your all-in-one builder toolkit. Automate, manage, and grow with Builder OS.",
    creator: "@hevarto", // If you have a Twitter handle
    images: ["https://builder-os.hevarto.com/og-image.png"],
  },
  alternates: {
    canonical: "https://builder-os.hevarto.com",
  },
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full mx-auto scroll-smooth"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
          <ThemeToggle />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}

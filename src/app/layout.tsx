import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nikita Kalal — Full Stack Developer",
  description:
    "Portfolio of Nikita Kalal, Full Stack Developer. React, PHP, MySQL, MongoDB.",
  metadataBase: new URL("https://nikitakalal.dev"),
  openGraph: {
    title: "Nikita Kalal — Full Stack Developer",
    description:
      "Portfolio of Nikita Kalal, Full Stack Developer. React, PHP, MySQL, MongoDB.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${sourceSans.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

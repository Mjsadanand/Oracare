
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import DynamicRibbon from "@/components/DynamicRibbon";
import DynamicPageTitle from "@/components/DynamicPageTitle";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oracare",
  description: "Built with the passion to revolutionize oral healthcare, Oracare is your trusted partner in delivering advanced dental solutions. Our platform connects patients with top-notch dental professionals, ensuring quality care and innovative treatments.",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <DynamicPageTitle />
          <DynamicRibbon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

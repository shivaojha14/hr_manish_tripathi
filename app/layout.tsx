import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description:
    "HR professional with 8 years of experience in talent acquisition, employee engagement, performance management, compliance, and HR policy development.",
  keywords: [
    "HR Manager",
    "Human Resources",
    "Recruitment",
    "Talent Acquisition",
    "Payroll",
    "HR Compliance",
    "Prayagraj",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description:
      "HR professional with 8 years of experience across talent acquisition, employee relations, compliance, and HR operations.",
    type: "website",
    locale: "en_IN",
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description:
      "HR professional with 8 years of experience across talent acquisition, employee relations, compliance, and HR operations.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: "AXOL - Digital Education Services",
    template: "%s | axol.co.uk",
  },
  description:
    "Expert IT consulting and development services. Specializing in modern web development, enterprise solutions, and cutting-edge technologies.",
  keywords: [
    "IT services",
    "software development",
    "web development",
    "enterprise solutions",
    "DevOps",
    "cloud migration",
    "AI integration",
    "IT consulting",
    "IT contractor",
    "Leeds IT contractor",
  ],
  authors: [{ name: "Sam Nogalski" }],
  creator: "Sam Nogalski",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6Le-f38gAAAAAAgJcEBgn3Y2vqDC5hDGO_u_9YIG"
          strategy="afterInteractive"
        />
        {/* Google Tag Manager */}
        <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-PQH3X7HB');
              `,
                    }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.className
        )}
      >
        <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PQH3X7HB"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Portfolio | Data Analyst & Aeronautical Engineer',
  description:
    'Personal portfolio showcasing data analysis, automation, and aviation safety projects. Transforming complex data into strategic decisions.',
  keywords: [
    'Data Analyst',
    'Aeronautical Engineer',
    'Power BI',
    'Python',
    'Aviation Safety',
    'Quality Assurance',
    'Data Science',
  ],
  authors: [{ name: 'Jeisson Daniel Rodríguez Novoa' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Portfolio | Data Analyst & Aeronautical Engineer',
    description:
      'Transforming complex data into strategic decisions in aviation and beyond.',
    siteName: 'Portfolio 2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Data Analyst & Aeronautical Engineer',
    description:
      'Transforming complex data into strategic decisions in aviation and beyond.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

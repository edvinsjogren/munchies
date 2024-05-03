'use client';
import NextAdapterApp from 'next-query-params/app';
import { QueryParamProvider } from 'use-query-params';
import './globals.css';
import { sanfrancisco } from '../utils/font_utils';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sanfrancisco.variable} bg-off-white font-sanfrancisco`}
      >
        <main className="relative mx-auto flex w-full max-w-screen-xl flex-col px-6 py-10">
          <QueryParamProvider adapter={NextAdapterApp}>
            {children}
          </QueryParamProvider>
        </main>
      </body>
    </html>
  );
}

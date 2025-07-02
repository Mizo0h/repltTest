import './globals.css';
import { Inter } from 'next/font/google';
import AuthProvider from '@/components/AuthProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Navigation from '@/components/layout/Navigation';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Challenge Play',
  description: 'Master Git through interactive challenges',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="h-full">
      <body 
        className={`${inter.className} h-full`}
        suppressHydrationWarning={true}
      >
        <AuthProvider session={session}>
          <div className="flex flex-col min-h-full">
            <Navigation />
            <Suspense fallback={
              <div className="flex-grow">
                <div className="animate-pulse flex justify-center items-center min-h-[60vh]">
                  <div className="text-center">
                    <div className="h-8 w-32 bg-gray-100 rounded mx-auto"></div>
                    <div className="space-y-3 mt-4">
                      <div className="h-4 w-48 bg-gray-100 rounded"></div>
                      <div className="h-4 w-40 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            }>
              <main className="flex-grow flex flex-col">
                {children}
              </main>
            </Suspense>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

// Force dynamic rendering
export const dynamic = 'force-dynamic';

'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Session } from 'next-auth';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface NavigationClientProps {
  session: Session | null;
}

export default function NavigationClient({ session: serverSession }: NavigationClientProps) {
  const { data: clientSession, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  // Use client-side session for real-time updates
  const session = status === 'loading' ? serverSession : clientSession;

  const handleSignOut = async () => {
    setIsMenuOpen(false);
    await signOut({ 
      redirect: false,
    });
    router.push('/');
    router.refresh(); // Force a router refresh to update the UI
  };

  // Close menu when session changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [session]);

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600" onClick={handleNavigation}>
                Challenge Play
              </Link>
            </div>
            {session && (
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/games"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  onClick={handleNavigation}
                  prefetch={true}
                >
                  Games
                </Link>
                <Link
                  href="/leaderboard"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  onClick={handleNavigation}
                  prefetch={true}
                >
                  Leaderboard
                </Link>
                <Link
                  href="/profile"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  onClick={handleNavigation}
                  prefetch={true}
                >
                  Profile
                </Link>
              </div>
            )}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                {session.user?.email === 'admin@example.com' && (
                  <Link
                    href="/admin"
                    className="text-gray-500 hover:text-gray-700"
                    onClick={handleNavigation}
                    prefetch={true}
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleSignOut}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/login"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleNavigation}
                  prefetch={true}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                  onClick={handleNavigation}
                  prefetch={true}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          {/* Only show mobile menu button if user is logged in */}
          {session && (
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu icon */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
          {/* Show mobile sign in/up buttons when not logged in */}
          {!session && (
            <div className="flex items-center sm:hidden space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-500 hover:text-gray-700"
                onClick={handleNavigation}
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                onClick={handleNavigation}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu - only shown when logged in and menu is open */}
      {session && (
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white border-t border-gray-100`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/games"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              onClick={handleNavigation}
              prefetch={true}
            >
              Games
            </Link>
            <Link
              href="/leaderboard"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              onClick={handleNavigation}
              prefetch={true}
            >
              Leaderboard
            </Link>
            <Link
              href="/profile"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              onClick={handleNavigation}
              prefetch={true}
            >
              Profile
            </Link>
            {session.user?.email === 'admin@example.com' && (
              <Link
                href="/admin"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                onClick={handleNavigation}
                prefetch={true}
              >
                Admin
              </Link>
            )}
            <button
              onClick={handleSignOut}
              className="block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 
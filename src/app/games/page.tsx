import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function GamesPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="bg-gray-50 min-h-full flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
            Available Games
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Choose a game to test your Git knowledge
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link href="/games/1" className="block">
            <div className="bg-white border border-gray-100 overflow-hidden shadow-sm rounded-lg hover:shadow transition-shadow duration-200">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-700">Git Basics</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Learn the fundamentals of Git version control
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-600">
                    Level 1
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/games/2" className="block">
            <div className="bg-white border border-gray-100 overflow-hidden shadow-sm rounded-lg hover:shadow transition-shadow duration-200">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-700">
                  Branching Strategies
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Master Git branching and merging techniques
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-600">
                    Level 2
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 
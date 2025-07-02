import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email!,
    },
  });

  if (!user) {
    return null;
  }

  return (
    <div className="bg-gray-50 min-h-full flex-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 shadow-sm overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-700">
                Profile Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Your personal details and progress
              </p>
            </div>
            <div className="border-t border-gray-100">
              <dl>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                    {user.name || 'Not set'}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                    {user.email}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Level</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                    Level {user.level}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">XP</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                    {user.xp} XP
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Current Streak</dt>
                  <dd className="mt-1 text-sm text-gray-700 sm:mt-0 sm:col-span-2">
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium">{user.streak || 0}</span>
                      <span className="ml-1 text-gray-500">days</span>
                      {user.streak > 0 && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-600">
                          🔥 On Fire!
                        </span>
                      )}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
          Challenge Play
        </h1>
        <p className="text-lg leading-8 text-gray-600 mb-12">
          Master Git and collaborative development through interactive challenges.
          Learn by doing with our gamified platform designed to make version control fun and engaging.
        </p>

        <div className="flex justify-center gap-4">
          {session ? (
            <Link
              href="/games"
              className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </Link>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Log in to Play
              </Link>
            </>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="rounded-lg bg-indigo-100 p-3">
              <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="mt-4 text-lg font-semibold">Interactive Learning</h2>
            <p className="mt-2 text-gray-600 text-center">Learn Git commands through hands-on challenges and real-world scenarios.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-lg bg-green-100 p-3">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="mt-4 text-lg font-semibold">Track Progress</h2>
            <p className="mt-2 text-gray-600 text-center">Monitor your learning journey with detailed progress tracking.</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="rounded-lg bg-yellow-100 p-3">
              <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="mt-4 text-lg font-semibold">Learn Best Practices</h2>
            <p className="mt-2 text-gray-600 text-center">Master Git workflows and collaborative development practices.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

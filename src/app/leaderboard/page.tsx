import LeaderboardClient from './LeaderboardClient';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function LeaderboardPage() {
  const session = await getServerSession(authOptions);
  return <LeaderboardClient initialSession={session} />;
} 
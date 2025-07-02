import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import GameClient from './GameClient';

interface GamePageProps {
  params: { id: string };
}

export default async function GamePage({ params }: GamePageProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return <GameClient gameId={params.id} />;
} 
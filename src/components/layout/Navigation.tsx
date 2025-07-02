import { getServerSession } from 'next-auth';
import NavigationClient from './NavigationClient';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Navigation() {
  const session = await getServerSession(authOptions);
  
  return <NavigationClient session={session} />;
} 
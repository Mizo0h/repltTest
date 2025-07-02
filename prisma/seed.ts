import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12);
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      username: 'admin',
      password: adminPassword,
    },
  });

  // Create demo user
  const hashedPassword = await bcrypt.hash('demo123', 12);
  const demoUser = await prisma.user.create({
    data: {
      name: 'Demo User',
      email: 'demo@example.com',
      username: 'demouser',
      password: hashedPassword,
    },
  });

  // Create demo games
  const games = await Promise.all([
    prisma.game.create({
      data: {
        title: 'Git Basics',
        description: 'Learn the fundamentals of Git version control',
        level: 1,
        questions: {
          create: [
            {
              question: 'What command is used to initialize a new Git repository?',
              options: JSON.stringify(['git init', 'git start', 'git create', 'git new']),
              correctAnswer: 0,
              order: 1,
            },
            {
              question: 'Which command is used to stage changes for commit?',
              options: JSON.stringify(['git stage', 'git add', 'git commit', 'git push']),
              correctAnswer: 1,
              order: 2,
            },
            {
              question: 'What command shows the working tree status?',
              options: JSON.stringify(['git check', 'git tree', 'git status', 'git info']),
              correctAnswer: 2,
              order: 3,
            },
          ],
        },
      },
    }),
    prisma.game.create({
      data: {
        title: 'Branching Strategies',
        description: 'Master Git branching and merging techniques',
        level: 2,
        questions: {
          create: [
            {
              question: 'Which command creates a new branch?',
              options: JSON.stringify(['git branch', 'git checkout -b', 'git new-branch', 'Both A and B']),
              correctAnswer: 3,
              order: 1,
            },
            {
              question: 'What command switches to another branch?',
              options: JSON.stringify(['git switch', 'git checkout', 'git change', 'Both A and B']),
              correctAnswer: 3,
              order: 2,
            },
            {
              question: 'Which command merges changes from another branch?',
              options: JSON.stringify(['git merge', 'git combine', 'git join', 'git unite']),
              correctAnswer: 0,
              order: 3,
            },
          ],
        },
      },
    }),
  ]);

  console.log('Seed data created:', {
    adminUser: { id: adminUser.id, email: adminUser.email },
    demoUser: { id: demoUser.id, email: demoUser.email },
    games: games.map(game => ({ id: game.id, title: game.title })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 
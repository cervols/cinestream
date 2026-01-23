import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

const commentData: Prisma.CommentCreateInput[] = [
  {
    content: "My super comment!",
  },
  {
    content: "Very great website.",
  },
  {
    content: "Found a movie on your website. Thanks!",
  }
];

export async function main() {
  for (const u of commentData) {
    await prisma.comment.create({ data: u });
  }
}

main();

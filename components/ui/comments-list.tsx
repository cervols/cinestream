import prisma from '@/lib/prisma';

export default async function CommentsList () {
  const comments = await prisma.comment.findMany({
    orderBy: { id: 'desc' }
  });

  if (comments.length === 0) {
    return <div className="text-gray-500 text-center">No comments yet.</div>;
  }

  return (
    <ul className="space-y-2">
      {comments.map((comment) => (
        <li key={comment.id} className="bg-gray-50 border rounded px-4 py-2 text-gray-800">
          {comment.content}
        </li>
      ))}
    </ul>
  );
}

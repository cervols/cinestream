
import GuestbookClient from '@/components/ui/guestbook-client';
import CommentsList from '@/components/ui/comments-list';

export default async function Page() {
  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <GuestbookClient />
      <CommentsList />
    </div>
  );
}

import RegisterWizard from '@/components/ui/register-wizard';

export default function Page() {
  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl mb-8">Create Your Account</h1>
      <RegisterWizard />
    </div>
  );
}

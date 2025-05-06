import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Contact
      </h1>
      <p className="mb-4">
        Feel free to reach out to me through any of my social media channels listed in the footer below.
      </p>
    </section>
  );
}

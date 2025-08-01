import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
}

export default function Page() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-semibold tracking-tighter'>About Me</h1>

      <div className='mb-8'>
        <h2 className='text-xl font-medium mb-3 tracking-tight'>
          Introduction
        </h2>
        <p className='mb-6 text-neutral-700 dark:text-neutral-300'>
          Hello! I'm Keigo Yamauchi, a Software Engineer with extensive
          experience in developing and operating large-scale backend services.
          My professional work is complemented by a Master's degree and research
          background in 3D imaging and computer graphics. This website serves as
          a portfolio of my projects.
        </p>

        <h2 className='text-xl font-medium mb-3 tracking-tight'>
          Professional Experience &amp; Philosophy
        </h2>
        <p className='mb-6 text-neutral-700 dark:text-neutral-300'>
          Throughout my career, I have been instrumental in building and
          maintaining backend systems powering services for over 16 million
          monthly active users. This involved ensuring high availability,
          scalability, and performance for high-traffic environments. I have a
          strong commitment to user-centric design, ensuring seamless and
          positive experiences through robust and efficient technology.
        </p>

        <h2 className='text-xl font-medium mb-3 tracking-tight'>
          Academic Background &amp; Research
        </h2>
        <p className='mb-6 text-neutral-700 dark:text-neutral-300'>
          My academic journey culminated in a Master's degree focusing on
          advanced 3D imaging technologies, specifically in the field of
          holography. This research involved intensive work with distributed
          computing for computer-generated holograms, graphics APIs, and
          parallel computing.
        </p>
        <p className='text-neutral-700 dark:text-neutral-300'>
          Thank you for taking the time to learn more about me. Please feel free
          to explore my works and reach out if you'd like to connect or discuss
          potential opportunities.
        </p>
      </div>
    </section>
  )
}

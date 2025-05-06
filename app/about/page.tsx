import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-medium mb-3 tracking-tight">Introduction</h2>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Hello! I'm Keigo Yamauchi, a Software Engineer with extensive experience in developing and operating
          large-scale backend services. My professional work is complemented by a Master's degree and research background
          in 3D imaging and computer graphics. This website serves as a portfolio of my projects and a space to share my
          journey as I transition towards creating immersive and impactful experiences in the game and interactive
          entertainment industry.
        </p>

        <h2 className="text-xl font-medium mb-3 tracking-tight">Professional Experience &amp; Philosophy</h2>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          In my previous roles, I've been instrumental in building and maintaining backend systems
          powering services for over 16 million monthly active users. This involved ensuring high availability,
          scalability, and performance for high-traffic environments. A core part of my development philosophy
          is a deep commitment to a user-centric approach, always striving to deliver seamless and positive
          experiences through robust and efficient technology.
        </p>

        <h2 className="text-xl font-medium mb-3 tracking-tight">Academic Background &amp; Research</h2>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          My academic journey culminated in a Master's degree focusing on advanced 3D imaging technologies,
          specifically in the field of holography. This research involved intensive work with
          distributed computing for computer-generated holograms, graphics APIs, and parallel computing techniques.
          This experience solidified my passion for technologies that push visual boundaries and create novel
          forms of interaction.
        </p>

        <h2 className="text-xl font-medium mb-3 tracking-tight">Career Aspirations &amp; Current Focus</h2>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          I am driven by a desire to create truly engaging and delightful interactive experiences, and I am now
          enthusiastically channeling my expertise towards the game development and broader entertainment sectors.
          I am particularly excited by the potential of game engines like Unreal Engine to craft realistic and
          immersive worlds. To that end, I am actively deepening my knowledge of UE, modern graphics pipelines,
          and C++ for game development, aiming to contribute to projects that offer rich, narrative-driven, or
          visually stunning experiences.
        </p>

        <h2 className="text-xl font-medium mb-3 tracking-tight">What I'm Looking For</h2>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          I am seeking opportunities within innovative companies, ideally in a role such as a Game Programmer or a
          Backend Engineer within the games/entertainment industry, where I can contribute to impactful, large-scale projects.
          I thrive in environments that foster both a fast-paced, iterative development culture and value
          individual initiative alongside structured, supportive management.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Thank you for taking the time to learn more about me. Please feel free to explore my works and reach out if you'd like to connect or discuss potential opportunities.
        </p>
      </div>
    </section>
  )
}

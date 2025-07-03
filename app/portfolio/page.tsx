import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default function Page() {
  return (
    <section>
      <h1 className='text-2xl font-semibold tracking-tighter'>Portfolio</h1>
      <p className='mb-6 text-sm text-neutral-500 dark:text-neutral-400'>
        Last Updated: May 7, 2025
      </p>

      <div className='mb-8'>
        <p className='mb-2'>
          <strong>Name:</strong> Keigo Yamauchi
        </p>

        <h2 className='text-lg font-medium mb-3'>Professional Summary</h2>
        <p className='mb-6 text-neutral-700 dark:text-neutral-300'>
          At Kufu Company Inc., I have been involved primarily in feature
          development, maintenance, and operation for the "Tokubai" service as a
          Server-Side Engineer. I have contributed to improving the user inquiry
          flow based on feedback, developing APIs for new features, enhancing
          performance, and implementing load countermeasures. By proactively
          handling alerts and raising issues, I deepened my understanding of the
          service and strived to improve development speed and quality. I have
          also contributed to nurturing junior staff, such as serving as an
          instructor for new graduate training.
        </p>

        <h2 className='text-lg font-medium mb-3'>Skills & Expertise</h2>

        <h3 className='font-medium mb-2'>Operating Systems:</h3>
        <ul className='list-disc pl-5 mb-4 text-neutral-700 dark:text-neutral-300'>
          <li>
            MacOS: 4 years 6 months (Proficient from installation to environment
            setup and development)
          </li>
          <li>
            Windows 11/10: 4+ years (Proficient from installation to environment
            setup and development)
          </li>
        </ul>

        <h3 className='font-medium mb-2'>Programming Languages:</h3>
        <ul className='list-disc pl-5 mb-4 text-neutral-700 dark:text-neutral-300'>
          <li>
            Ruby: 10 months (Experience in web application development in a
            professional setting)
          </li>
          <li>JavaScript: 1 year 6 months (Capable of basic programming)</li>
          <li>
            Shell: 2 years 6 months (Capable of implementing complex logic,
            including parallel execution)
          </li>
          <li>
            Python: 1 year (Capable of basic implementation related to machine
            learning, such as vectorization; experience with AI training data
            annotation)
          </li>
          <li>
            C++: 3 years (Capable of object-oriented coding; experience
            developing with DirectX 12, CUDA)
          </li>
          <li>
            HLSL: 1 year (Capable of shading using ray tracing processing)
          </li>
          <li>CUDA: 6 months (Capable of basic programming)</li>
          <li>C: 6 months (Capable of basic programming)</li>
        </ul>

        <h3 className='font-medium mb-2'>Frameworks/Libraries:</h3>
        <ul className='list-disc pl-5 mb-4 text-neutral-700 dark:text-neutral-300'>
          <li>
            Ruby on Rails: 10 months (Experience in web application development
            in a professional setting)
          </li>
          <li>
            Next.js: 2 months (Capable of implementing basic applications;
            self-study)
          </li>
          <li>
            DirectX 12: 1 year (Capable of implementing applications including
            environment setup and GUI)
          </li>
        </ul>

        <h3 className='font-medium mb-2'>Databases:</h3>
        <ul className='list-disc pl-5 mb-4 text-neutral-700 dark:text-neutral-300'>
          <li>MySQL: 10 months (Experience using in a professional setting)</li>
          <li>
            PostgreSQL: 2 months (Capable from installation to table creation)
          </li>
          <li>Redis: 1 year (Experience using in research)</li>
        </ul>

        <h3 className='font-medium mb-2'>Cloud Platforms:</h3>
        <ul className='list-disc pl-5 mb-4 text-neutral-700 dark:text-neutral-300'>
          <li>
            AWS: 1 year 6 months (Experience building and operating in a
            professional setting)
          </li>
          <li>GCP (BigQuery): 3 months (Experience using APIs)</li>
        </ul>

        <h3 className='font-medium mb-2'>Other Tools/Methodologies:</h3>
        <ul className='list-disc pl-5 mb-4 text-neutral-700 dark:text-neutral-300'>
          <li>
            Git: Experience using in a professional setting (including git
            worktree)
          </li>
          <li>
            GitHub Copilot: 1 year (Experience using in a professional setting)
          </li>
          <li>Cline: 2 months (Experience using in a professional setting)</li>
        </ul>

        <h3 className='font-medium mb-2'>Development Areas:</h3>
        <ul className='list-disc pl-5 mb-4 text-neutral-700 dark:text-neutral-300'>
          <li>Web Application Development (Frontend/Backend)</li>
          <li>API Development</li>
          <li>Windows Application Development</li>
          <li>Real-time Graphics (DirectX, HLSL, CUDA)</li>
          <li>Computer-Generated Holography (CGH) Research & Development</li>
          <li>Distributed Computing</li>
          <li>Performance Tuning</li>
          <li>Load Management/Countermeasures</li>
          <li>Maintenance & Operation</li>
          <li>Log Analysis Tool Implementation</li>
          <li>AI Training Data Annotation</li>
          <li>Cloud Architecture & Operation</li>
          <li>Technical Training Instructor</li>
          <li>AI Coding Assistance Tool Utilization</li>
        </ul>

        <h2 className='text-lg font-medium mb-3'>Work Experience</h2>
        <div className='mb-6'>
          <h3 className='font-medium'>
            Kufu Company Inc. (April 2024 – Present)
          </h3>
          <p className='text-neutral-700 dark:text-neutral-300'>
            Department: Service Development Department
          </p>
          <p className='text-neutral-700 dark:text-neutral-300'>
            Position: Server-side engineer
          </p>
          <p className='mb-4 text-neutral-700 dark:text-neutral-300'>
            Main Responsibility: Development for the flyer and shopping
            information service "Tokubai" (September 2024 – Present)
          </p>

          <h4 className='font-medium mb-2'>
            【Major Projects & Responsibilities】
          </h4>

          <div className='mb-4'>
            <h5 className='font-medium'>
              2025 New Graduate Training Instructor
            </h5>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Period: March 2025 – Present
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Role: Training Instructor
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Overview: Conducted Ruby on Rails training for new graduate
              engineers.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Details: Based on the Rails Tutorial, implemented training in a
              practical format including work logging and estimation simulation.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Team: 1 Instructor, 8 Supporters, 3 Trainees
            </p>
          </div>

          <div className='mb-4'>
            <h5 className='font-medium'>Flyer Page Improvement (Web [SP])</h5>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Period: February 2025 – March 2025
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Role: Development (Server-Side)
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Overview: Added a store display feature based on a recommendation
              model to the main flyer page.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Details: Implemented a feature using a proprietary recommendation
              model to display stores of the same and different industries,
              providing users with new store discovery opportunities.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Team Composition: 2 Directors, 1 ML Engineer, 1 Designer, 1
              Server-Side Engineer
            </p>
          </div>

          <div className='mb-4'>
            <h5 className='font-medium'>
              Municipality Name Change Handling (App / Web [PC/SP])
            </h5>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Period: January 2025
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Role: Data Update, Feature Modification
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Overview: Handled municipality name changes due to administrative
              changes.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Details: Updated store information and implemented search
              functionality with new names to maintain data integrity and
              usability.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Team Composition: 1 Director, 1 Server-Side Engineer
            </p>
          </div>

          <div className='mb-4'>
            <h5 className='font-medium'>
              Year-End/New Year Campaign (Web [PC/SP])
            </h5>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Period: December 2024
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Role: Development (Server-Side)
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Overview: Implemented special measures for the peak year-end/New
              Year period.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Details: Implemented special business hour displays for stores and
              a limited-time design to promote awareness, engagement, and return
              visits.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Achievements: Despite a decrease in target chains, achieved +60%
              Impressions, +65% New Users, +40% Engagement, +82% Repeat Users.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Team Composition: 2 Directors, 1 Designer, 3 Server-Side Engineers
            </p>
          </div>

          <div className='mb-4'>
            <h5 className='font-medium'>Load Management (App / Web [PC/SP])</h5>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Period: November 2024 – Present
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Role: Load Monitoring, Countermeasure Implementation, Inquiry
              Handling
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Overview: Responsible for server load countermeasures during
              high-traffic periods.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Details: Contributed to stable operation by monitoring and
              implementing measures during expected high-load periods like
              year-end/New Year and TV broadcasts.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Achievements: Prevented service disruptions due to excessive load
              during the assigned period. Handled inquiries related to load
              countermeasures based on multiple experiences.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Team Structure: Handled by a team of 10 Server-Side Engineers and
              2 Infrastructure Engineers.
            </p>
          </div>

          <div className='mb-4'>
            <h5 className='font-medium'>Alert Handling (App / Web [PC/SP])</h5>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Period: November 2024 – Present
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Role: Alert Monitoring, Initial Response, Root Cause Analysis
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Overview: Responsible for handling service-wide failure alerts.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Details: Handled (acknowledged) approximately 1/3 of all alerts,
              learning the incident response process.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Achievements: Became capable of swift response for experienced
              failure patterns. Improved understanding of the service from the
              infrastructure level.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Team Structure: Handled by a team of 10 Server-Side Engineers and
              2 Infrastructure Engineers.
            </p>
          </div>

          <div className='mb-4'>
            <h5 className='font-medium'>
              "Find Products" Feature Development (App)
            </h5>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Period: October 2024 – February 2025
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Role: API Development, Feature Implementation (Server-Side)
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Overview: Official release and feature expansion of the app's
              "Find Products" function.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>Details:</p>
            <ul className='list-disc pl-5 text-neutral-700 dark:text-neutral-300'>
              <li>
                Official release and API implementation: Officially released the
                feature allowing comparison of flyer information per product
                based on flyer analysis data and implemented related APIs.
              </li>
              <li>
                Addition of target items and efficiency improvement: Increased
                the number of handled items for better usability while
                simplifying the backend management process.
              </li>
              <li>
                Addition of "Price Drop Trend Products" feature and API
                implementation: Implemented API for a feature providing products
                with price drop trends and price history (in collaboration with
                the AX team).
              </li>
            </ul>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Achievements: Improved app user experience, streamlined item
              addition operations.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Team Composition: 2 Directors, 3 Application Developers, 1
              Designer, 2 Server-Side Engineers
            </p>
          </div>

          <div className='mb-4'>
            <h5 className='font-medium'>
              Inquiry Flow (Feedback Form) Improvement (Web [PC/SP])
            </h5>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Period: July 2024 – September 2024 (Release: Web Aug 26, App Sep
              5)
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Role: Server-Side Engineer
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Overview: Addressed user needs to send feedback to stores,
              improving feedback routing efficiency and UX.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Details: Modified feedback form questions/notes, updated help
              pages, implemented store ID linking. Developed PC/SP forms,
              developed App API, testing, created API specification documents.
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Development Environment: OS: MacOS, Language: Ruby, FW: Ruby on
              Rails, DB: MySQL
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Team Composition: 1 Director, 1 Server-Side Engineer (Total team
              including designers, app developers: 7 members)
            </p>
            <p className='text-neutral-700 dark:text-neutral-300'>
              Achievements: Reduced category selection error rate by about half
              (8.5% → 4.4%, comparing 1 month before/after release). Improved
              efficiency of feedback aggregation and analysis. Released on
              schedule while flexibly handling additional requirements.
              Prevented technical debt by refactoring test code.
            </p>
          </div>
        </div>

        <h2 className='text-lg font-medium mb-3'>Education</h2>
        <ul className='mb-6 text-neutral-700 dark:text-neutral-300'>
          <li>April 2015: Entered Sapporo Kosei High School</li>
          <li>March 2018: Graduated from Sapporo Kosei High School</li>
          <li>
            April 2018: Entered Hokkaido University, General Education
            Department
          </li>
          <li>
            March 2019: Completed Hokkaido University, General Education
            Department
          </li>
          <li>
            April 2019: Advanced to Hokkaido University, Faculty of Engineering,
            Department of Information Electronics
          </li>
          <li>
            March 2022: Graduated from Hokkaido University, Faculty of
            Engineering, Department of Information Electronics
          </li>
          <li>
            April 2022: Entered Hokkaido University, Graduate School of
            Information Science and Technology
          </li>
          <li>
            March 2024: Completed Hokkaido University, Graduate School of
            Information Science and Technology
          </li>
          <li>Major: Information science</li>
        </ul>

        <h2 className='text-lg font-medium mb-3'>Licenses & Certifications</h2>
        <ul className='mb-6 text-neutral-700 dark:text-neutral-300'>
          <li>
            Regular Passenger Vehicle Driver's License (Class 1) (Acquired June
            2020)
          </li>
        </ul>

        <h2 className='text-lg font-medium mb-3'>Awards & Presentations</h2>
        <ul className='mb-6 text-neutral-700 dark:text-neutral-300'>
          <li>
            March 2025: Quarterly MVP Award (Service Development Department)
          </li>
          <li>
            January 2025: Monthly MVP Award (Service Development Department)
          </li>
          <li>
            December 2024: Monthly MVP Award (Service Development Department)
          </li>
          <li>
            December 2024: Presented at internal LT "Kufu Engineering Night"
          </li>
        </ul>

        <h2 className='text-lg font-medium mb-3'>Personal Statement</h2>

        <h3 className='font-medium mb-2'>【Work Experience Summary】</h3>
        <p className='mb-4 text-neutral-700 dark:text-neutral-300'>
          Since my first year at Kufu Company Inc., I have aimed to create value
          in development, maintenance, and operations by leveraging my
          initiative. Particularly, by proactively handling about one-third of
          all alerts, I built a foundation for understanding the service from an
          infrastructure level and enhanced my incident response capabilities. I
          believe this experience contributed to stable operations during
          high-load periods like year-end/New Year. In development, I have been
          involved in both web (including SP) and app projects, handling a wide
          range from feature improvements based on user feedback to new feature
          development (including APIs) and performance enhancements. In
          improving the inquiry flow, I accurately grasped user needs and
          achieved improved data analysis efficiency and UX (halving category
          selection errors). For the year-end/New Year campaign, I contributed
          to maximizing campaign effectiveness by achieving high results
          (Imp+60%, New Users+65%, etc.) within a focused target group. Through
          these experiences, I understood the entire flow from requirement
          investigation to implementation and impact measurement, acquiring
          development skills considering impact scope and diverse implementation
          patterns. My experience as a new graduate training instructor also
          improved my ability to verbalize technical concepts and communicate
          them to others. These achievements were recognized with Monthly MVP (2
          times) and Quarterly MVP awards within the Service Development
          Department.
        </p>

        <h3 className='font-medium mb-2'>
          【University/Graduate Research Experience】
        </h3>
        <p className='mb-4 text-neutral-700 dark:text-neutral-300'>
          In graduate school, I majored in advanced communication technologies,
          such as optical and wireless communication, and multimedia
          technologies, including AI and CG. Within this field, I researched
          Computer-Generated Holography (CGH), a promising next-generation
          display technology. As CGH faces challenges due to its immense
          computational requirements, I researched an acceleration approach
          using distributed computing on cloud GPU servers. Development was done
          in a Visual Studio environment using C++ and DirectX, allowing me to
          deeply explore real-time graphics processing techniques. I also
          developed a strong interest in CUDA, organizing study sessions to
          further my knowledge in related technologies.
        </p>

        <h3 className='font-medium mb-2'>
          【Passion for Technology & Creativity】
        </h3>
        <p className='mb-4 text-neutral-700 dark:text-neutral-300'>
          I am confident that the knowledge and skills in real-time graphics
          processing (C++, DirectX, CUDA) gained through my research and
          development experience can significantly contribute to the creative
          industry, where high-quality visual expression is demanded. I have a
          strong passion for visual creation and aspire to develop products that
          surprise and move players. Beyond academics, I have actively engaged
          in diverse creative activities such as band activities, photography,
          and origami, honing both my technical skills and creative
          sensibilities.
        </p>

        <h3 className='font-medium mb-2'>【Future Outlook】</h3>
        <p className='mb-4 text-neutral-700 dark:text-neutral-300'>
          In my daily work, I strive to improve development speed by utilizing
          AI coding assistance tools like GitHub Copilot and Cline, and by
          proactively asking questions to senior colleagues to resolve doubts
          quickly. I also possess an awareness of maintainability, demonstrated
          by pointing out issues like the persistence of outdated event pages.
          Moving forward, I want to leverage my accumulated web development
          skills, initiative, holistic service perspective, experience in
          mentoring juniors, along with the research capabilities and graphics
          technology expertise gained from university and graduate school, and
          leverage the research and development capabilities and knowledge of
          graphics technology cultivated in university and graduate school to
          contribute to the further development of the product and industry.
        </p>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-foreground">About Us</h1>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-foreground mb-6">Our Story</h2>
        <p className="text-lg text-muted-foreground mb-4">
          Founded by Sam Jordan in March 2022, AXOL is a Digital Edtech Product Services agency based in the UK.
          With over a decade of experience in various digital product development roles, Sam recognised the pivotal
          role technology plays in modern education.
        </p>
        <p className="text-lg text-muted-foreground">
          In the wake of the COVID-19 pandemic, EdTech demand soared, flooding the market with countless products.
          However, a deep analysis revealed that many of these solutions lacked a strong pedagogical foundation,
          leaving educators and students underserved.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-foreground mb-6">Our Mission</h2>
        <p className="text-lg text-muted-foreground mb-4">
          This realisation led to the birth of AXOL with a clear and compelling mission: to create meaningful,
          impactful EdTech solutions that prioritise pedagogical evidence and actionable solutions for students
          and teachers worldwide.
        </p>
        <p className="text-lg text-muted-foreground">
          Our vision is simple yet powerful — to build safe and impactful EdTech solutions that will empower the
          next generation of learners.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-foreground mb-6">Why Choose AXOL?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>
            <span className="font-semibold text-foreground">Pedagogical Focus:</span>
            <span className="text-muted-foreground"> We put education at the heart of technology,
            ensuring that every product we develop is rooted in sound pedagogy.</span>
          </li>
          <li>
            <span className="font-semibold text-foreground">Proven Expertise:</span>
            <span className="text-muted-foreground"> With over a decade of experience, our founder,
            Sam Jordan, brings a wealth of knowledge to our team.</span>
          </li>
          <li>
            <span className="font-semibold text-foreground">Impact-Driven:</span>
            <span className="text-muted-foreground"> Our commitment is to create solutions that truly
            make a difference in the lives of students and educators.</span>
          </li>
          <li>
            <span className="font-semibold text-foreground">Global Reach:</span>
            <span className="text-muted-foreground"> We extend our services worldwide, making quality
            EdTech accessible to all.</span>
          </li>
        </ul>
        <p className="mt-6 text-lg text-muted-foreground">
          Join us on our journey to revolutionise education through technology. Together, we&apos;ll shape a brighter
          future for the next generation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <img src="/images/team/sam_jordan.jpeg" alt="Sam Jordan" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-1">Sam Jordan</h3>
            <p className="text-xl text-muted-foreground mb-3">Founder & Product Director</p>
            <a 
              href="https://www.linkedin.com/in/sam-jordan-axol/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              LinkedIn
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <img src="/images/team/sam_nogalski.jpeg" alt="Sam Nogaliski" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-1">Sam Nogaliski</h3>
            <p className="text-xl text-muted-foreground mb-3">Technical Director</p>
            <a 
              href="https://www.linkedin.com/in/nogalskisam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

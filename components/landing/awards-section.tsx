import Image from "next/image";

const awards = [
  {
    awardingCompany: "TIME Magazine",
    title: "World's Top EdTech Companies",
    position: "Top 20",
    year: "2024",
    description: "One of our projects was featured in the top 20 out of 250 in Time Magazine's top EdTech Apps Globally",
    logo: "/images/awards/time.png",
    color: "text-primary",
    url: "https://time.com/collection/worlds-top-edtech-companies-2024/"
  },
  {
    awardingCompany: "SME",
    title: "UK Enterprise Awards",
    position: "Winner",
    year: "2025",
    description: "Winner of Best Digital EdTech Product Services Agency 2025",
    logo: "/images/awards/sme.png",
    color: "text-primary",
    url: "https://smenews.digital/winners/axol-ltd/"
  },
  {
    awardingCompany: "All Right Leeds",
    title: "Best App Developers in Leeds",
    position: "8th Overall",
    year: "2025",
    description: "Ranking 8th overall and the only EdTech Agency listed",
    logo: "/images/awards/all_right_leeds.png",
    color: "text-chart-2",
    url: "https://www.allrightleeds.co.uk/top-app-developers-leeds/#8_AXOL"
  }
];

export function AwardsSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence in digital education has been recognized by industry leaders and publications worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            return (
              <a
                key={index}
                href={award.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer block"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Logo container with enhanced styling */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <Image
                    src={award.logo}
                    alt={`${award.awardingCompany} logo`}
                    width={72}
                    height={72}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                {/* Year text */}
                <div className="relative z-10 mb-4 text-sm font-semibold text-muted-foreground">
                  {award.year}
                </div>
                
                {/* Awarding company */}
                <div className="relative z-10 text-sm font-bold text-primary/80 mb-3 uppercase tracking-wide">
                  {award.awardingCompany}
                </div>
                
                {/* Award title */}
                <h3 className="relative z-10 text-xl font-bold text-foreground mb-3 leading-tight">
                  {award.title}
                </h3>
                
                {/* Position with enhanced styling */}
                <div className={`relative z-10 text-2xl font-black ${award.color} mb-4`}>
                  {award.position}
                </div>
                
                {/* Description */}
                <p className="relative z-10 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {award.description}
                </p>
                
                {/* Decorative corner element with link indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
            <span className="text-lg font-semibold text-foreground">
              Trusted by educational institutions worldwide to deliver exceptional digital learning experiences
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

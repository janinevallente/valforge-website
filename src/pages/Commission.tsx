import { Check } from "lucide-react";

const Commission = () => {
  const services = [
    {
      id: "SVC-01",
      title: "Straight Build",
      subtitle: "STANDARD ASSEMBLY",
      description: "Clean assembly of your Gunpla kit with precision and care",
      features: [
        "Nub mark removal",
        "Panel line accent",
        "Basic color correction",
        "Quality inspection",
      ],
      featured: false,
    },
    {
      id: "SVC-02",
      title: "Waterslide Decals",
      subtitle: "PREMIUM FINISH",
      description: "Premium finishing with authentic waterslide decal application",
      features: [
        "Everything in Straight Build",
        "High quality waterslide decals",
        "Mark Softer solution",
        "Top coat protection",
      ],
      featured: true,
    },
  ];

  const process = [
    { step: "01", title: "Consultation", description: "Discuss your vision and requirements" },
    { step: "02", title: "Quote", description: "Receive detailed pricing and timeline" },
    { step: "03", title: "Build", description: "Expert assembly with progress updates" },
    { step: "04", title: "Delivery", description: "Carefully packaged and delivered to you" },
  ];

  return (
    <section id="commission" className="relative py-32 px-4 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Diagonal stripe accent top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-20 section-enter">
          <div className="section-tag mb-4">GUNPLA SERVICES</div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
            <h2 className="font-teko font-bold text-6xl md:text-8xl tracking-[0.05em] text-white leading-none">
              COMMISSION
              <br />
              <span className="text-primary">WORK</span>
            </h2>
            <p className="md:mb-5 font-exo text-base text-foreground/40 max-w-xs">
              Professional Gunpla building services with meticulous attention to detail
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-px bg-border mb-20 section-enter">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-[hsl(220_15%_7%)] p-8 transition-all duration-300 hover:bg-[hsl(220_15%_9%)] group ${
                service.featured ? "border-t-2 border-t-primary" : "border-t-2 border-t-transparent"
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary px-3 py-1 font-mono-tech text-[9px] text-white tracking-widest">
                    RECOMMENDED
                  </div>
                </div>
              )}

              {/* Service ID */}
              <div className="font-mono-tech text-[9px] text-foreground/25 tracking-widest mb-4">
                {service.id} — {service.subtitle}
              </div>

              <h3 className="font-teko font-bold text-4xl text-white tracking-wide mb-2">
                {service.title}
              </h3>
              <p className="font-exo text-sm text-foreground/40 mb-8">{service.description}</p>

              {/* Feature list */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 border border-primary/40 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="font-exo text-sm text-foreground/60">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="mt-8 h-px bg-gradient-to-r from-primary/20 to-transparent group-hover:from-primary/50 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div className="mb-20 section-enter">
          <div className="flex items-center gap-4 mb-12">
            <div className="font-mono-tech text-[10px] text-foreground/30 tracking-widest">
              — OPERATIONAL PROTOCOL
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>

          <h3 className="font-teko font-bold text-4xl md:text-5xl text-white tracking-wide mb-12">
            THE PROCESS
          </h3>

          <div className="grid md:grid-cols-4 gap-px bg-border">
            {process.map((item, i) => (
              <div
                key={item.step}
                className="bg-[hsl(220_15%_7%)] p-6 relative group hover:bg-[hsl(220_15%_9%)] transition-colors"
              >
                {/* Step number */}
                <div className="font-teko font-bold text-6xl text-border group-hover:text-primary/20 transition-colors leading-none mb-4">
                  {item.step}
                </div>

                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 w-px h-8 bg-border" />
                )}

                <h4 className="font-teko font-bold text-2xl text-white tracking-wide mb-2">
                  {item.title}
                </h4>
                <p className="font-exo text-sm text-foreground/40">{item.description}</p>

                {/* Active indicator */}
                <div className="mt-6 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div
          id="contact-details"
          className="relative overflow-hidden bg-[hsl(220_15%_7%)] border border-border/50 section-enter"
          style={{ clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))" }}
        >
          {/* Background stripe */}
          <div className="absolute inset-0 stripe-accent opacity-30" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="section-tag justify-center mb-6">
              INITIATE CONTACT
            </div>

            <h3 className="font-teko font-bold text-4xl md:text-6xl text-white tracking-wide mb-4">
              READY TO START YOUR
              <span className="text-primary"> COMMISSION?</span>
            </h3>

            <p className="font-exo text-base text-foreground/50 max-w-xl mx-auto mb-10">
              Let's turn your Gunpla vision into reality — built with passion, precision, and 
              attention to every detail.
            </p>

            {/* Contact links */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                {
                  label: "GMAIL",
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=valentinejnine@gmail.com&su=Gunpla%20Commission%20Inquiry",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                },
                {
                  label: "FACEBOOK",
                  href: "https://www.facebook.com/janinexvallente",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.6v7A10 10 0 0 0 22 12z" />
                    </svg>
                  ),
                },
                {
                  label: "INSTAGRAM",
                  href: "https://www.instagram.com/val.mortel_",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.8-.9a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" />
                    </svg>
                  ),
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 border border-border/60 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </span>
                  <span className="font-exo font-semibold text-sm tracking-[0.15em] text-foreground/60 group-hover:text-foreground transition-colors">
                    {contact.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commission;
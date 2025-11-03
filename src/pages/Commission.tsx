import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Commission = () => {
  const services = [
    {
      title: "Straight Build",
      description: "Clean assembly of your gunpla kit with precision and care",
      price: "Starting at $50",
      features: [
        "Nub mark removal",
        "Panel line accent",
        "Basic color correction",
        "Quality inspection",
      ],
    },
    {
      title: "Waterslide Decals",
      description: "Premium finishing with authentic waterslide decal application",
      price: "Starting at $80",
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
    {
      step: "01",
      title: "Consultation",
      description: "Discuss your vision and requirements",
    },
    {
      step: "02",
      title: "Quote",
      description: "Receive detailed pricing and timeline",
    },
    {
      step: "03",
      title: "Build",
      description: "Expert assembly with progress updates",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Carefully packaged and delivered to you",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section id="commission" className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              GUNPLA SERVICES
            </Badge>
            <h1 className="text-4xl md:text-7xl font-orbitron font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              COMMISSION WORK
            </h1>
            <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
              Professional gunpla building services with meticulous attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`relative overflow-hidden border-border/50 hover:border-primary transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-orbitron">{service.title}</CardTitle>
                  <CardDescription className="text-base font-rajdhani mt-2">
                    {service.description}
                  </CardDescription>
                  {/* <div className="mt-4">
                    <span className="text-4xl font-bold text-primary font-orbitron">{service.price}</span>
                  </div> */}
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground font-rajdhani">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-orbitron font-bold text-center mb-12">
              THE PROCESS
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div 
                  key={item.step}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="text-2xl font-orbitron font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-rajdhani">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Card 
            id="contact-details"
            className="border-primary/50 bg-gradient-to-br from-primary/5 to-transparent"
          >
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                Ready to Start Your Commission?
              </h2>
              <p className="text-xl text-muted-foreground font-rajdhani mb-8 max-w-2xl mx-auto">
                Let’s turn your Gunpla vision into reality, built with passion, precision, and attention to every detail.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=valentinejnine@gmail.com&su=Gunpla%20Commission%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors font-rajdhani text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Gmail
                </a>
                <a
                  href="https://www.facebook.com/janinexvallente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors font-rajdhani text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5
                      c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3
                      c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.6v7A10 10 0 0 0 22 12z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/val.mortel_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors font-rajdhani text-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10
                      c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10
                      2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3
                      3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zM12
                      7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0
                      2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.8-.9a1.1
                      1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Commission;

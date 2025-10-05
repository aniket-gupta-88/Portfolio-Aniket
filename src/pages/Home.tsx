import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Aniket Gupta
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specializing in Scalable Microservices and React
            </p>
            <p className="text-md md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              1+ years of experience leveraging Spring Boot and cloud technologies to build high-availability systems
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="group">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/Aniket_Gupta_Amazon_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a passionate Full Stack Developer with expertise in building scalable, 
                high-performance web applications. Currently working at Tata Consultancy Services (TCS), 
                I specialize in Spring Boot microservices architecture and modern React applications.
              </p>
              <p>
                My experience includes migrating monolithic applications to microservices, 
                implementing CI/CD pipelines with Azure Kubernetes, and developing RESTful APIs 
                that serve thousands of users. I'm committed to writing clean, maintainable code 
                and staying current with the latest technologies in the software development landscape.
              </p>
              <p>
                When I'm not coding, you can find me solving algorithmic challenges on LeetCode 
                and CodeChef, or contributing to open-source projects on GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Briefcase, Code2, Utensils, MessageSquare, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Specializing in Scalable Microservices and React
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="group">
                <Link to="/projects">
                  View All Projects
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

      {/* Current Experience Snapshot */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Current Experience
            </h2>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Payment Portal Team</CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground mt-1">
                        Tata Consultancy Services (TCS)
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">Aug 2024 - Present</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  Migrated traditional payment methods into scalable microservices, handling high-volume transactions securely.
                </p>
                <Button asChild variant="outline">
                  <Link to="/experience">
                    Full Experience Timeline
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Projects Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center animate-fade-in">
              Featured Projects
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Showcasing my latest work
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* FoodUp */}
              <Card className="animate-slide-up hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Utensils className="h-16 w-16 text-primary" />
                  </div>
                  <CardTitle className="text-xl">FoodUp</CardTitle>
                  <Badge variant="secondary" className="w-fit">In Development</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Modern food ordering platform with real-time tracking and secure payment integration for seamless ordering across devices.
                  </CardDescription>
                  <Button asChild className="w-full">
                    <Link to="/projects">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* NexTalk */}
              <Card className="animate-slide-up hover:shadow-xl transition-all hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-16 w-16 text-primary" />
                  </div>
                  <CardTitle className="text-xl">NexTalk</CardTitle>
                  <Badge variant="default" className="w-fit">Completed</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Social platform with real-time WebSockets messaging and secure authentication, achieving 30% improvement in response times.
                  </CardDescription>
                  <Button asChild className="w-full">
                    <Link to="/projects">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Inventory Management System */}
              <Card className="animate-slide-up hover:shadow-xl transition-all hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-16 w-16 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Inventory Management</CardTitle>
                  <Badge variant="default" className="w-fit">Completed</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Full-stack inventory tracking system with automated stock alerts, reporting dashboards, and role-based access control.
                  </CardDescription>
                  <Button asChild className="w-full">
                    <Link to="/projects">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills Highlight */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Core Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Spring Boot', 'React.js', 'Azure Kubernetes', 'AWS', 'Java', 'C++', 'Mongo-DB', 'MySql',].map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-lg px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/skills">
                  View All Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

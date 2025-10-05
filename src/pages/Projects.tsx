import { Github, Utensils, MessageSquare, Package, GraduationCap, BookOpen, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projectIcons = {
  Utensils,
  MessageSquare,
  Package,
  GraduationCap,
  BookOpen,
  FileText,
};

const projectsData = [
  {
    title: 'FoodUp - Online Food Ordering Platform',
    description: 'Currently developing a modern food ordering platform with focus on scalability and user experience. Features include real-time order tracking, secure payment integration, and responsive design for seamless ordering across devices.',
    technologies: ['Spring Boot', 'React', 'PostgreSQL', 'REST APIs', 'Microservices'],
    github: 'https://github.com/aniket8828/FoodUp',
    status: 'In Development',
    icon: 'Utensils' as keyof typeof projectIcons,
  },
  {
    title: 'NexTalk - Social Media Platform',
    description: 'Full-featured social media application with real-time messaging using WebSockets. Implemented secure authentication, user profiles, and optimized database queries resulting in 30% improvement in response times.',
    technologies: ['WebSockets', 'Spring Boot', 'React', 'JWT Auth', 'MongoDB'],
    github: 'https://github.com/aniket8828',
    status: 'Completed',
    icon: 'MessageSquare' as keyof typeof projectIcons,
  },
  {
    title: 'Inventory Management System',
    description: 'Full-stack inventory tracking system with automated stock alerts, real-time inventory monitoring, reporting dashboards, and role-based access control. Streamlines warehouse operations and reduces manual tracking errors.',
    technologies: ['Spring Boot', 'React', 'MySQL', 'REST APIs', 'Redux'],
    github: 'https://github.com/aniket8828',
    status: 'Completed',
    icon: 'Package' as keyof typeof projectIcons,
  },
  {
    title: 'Course Management System',
    description: 'Comprehensive full-stack application for managing educational courses. Features include course creation, enrollment management, progress tracking, and role-based access control for students and instructors.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'REST APIs', 'Redux'],
    github: 'https://github.com/aniket8828/CMS_Backend',
    status: 'Completed',
    icon: 'GraduationCap' as keyof typeof projectIcons,
  },
  {
    title: 'Book Review API',
    description: 'RESTful backend API for managing and retrieving book reviews. Implements CRUD operations, user authentication, rating system, and advanced search functionality with pagination support.',
    technologies: ['Spring Boot', 'MongoDB', 'JWT', 'Swagger', 'Maven'],
    github: 'https://github.com/aniket8828/Book-Review-API',
    status: 'Completed',
    icon: 'BookOpen' as keyof typeof projectIcons,
  },
  {
    title: 'Blog Application Backend',
    description: 'Robust backend service for a blogging platform featuring user authentication, post management, commenting system, and category-based organization. Includes comprehensive API documentation.',
    technologies: ['Spring Boot', 'JPA/Hibernate', 'MySQL', 'Spring Security', 'REST APIs'],
    github: 'https://github.com/aniket8828/blog_app_backend',
    status: 'Completed',
    icon: 'FileText' as keyof typeof projectIcons,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
            Featured Projects
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Showcasing my full-stack development expertise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => {
              const IconComponent = projectIcons[project.icon];
              return (
                <Card 
                  key={index} 
                  className="flex flex-col animate-slide-up hover:shadow-xl transition-all hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-16 w-16 text-primary" />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full group">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

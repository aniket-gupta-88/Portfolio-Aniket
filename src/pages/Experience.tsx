import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const experienceData = [
  {
    title: 'Payment Portal Team',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Aug 2024 - Present',
    location: 'India',
    responsibilities: [
      'Migrated monolithic applications to microservices architecture, improving system scalability and maintainability',
      'Implemented cloud configuration server for centralized management of application properties across environments',
      'Automated CI/CD pipelines and deployed applications on Azure Kubernetes Service (AKS), reducing deployment time by 40%',
      'Collaborated with cross-functional teams to deliver high-quality, production-ready features',
    ],
  },
  {
    title: 'CR (Change Request) Team',
    company: 'Tata Consultancy Services (TCS)',
    period: 'Aug 2023 - Aug 2024',
    location: 'India',
    responsibilities: [
      'Resolved complex cross-domain change requests involving multiple systems and stakeholders',
      'Developed and maintained RESTful APIs using Spring Boot, ensuring high performance and reliability',
      'Participated in code reviews and maintained comprehensive documentation for all changes',
      'Implemented bug fixes and enhancements based on client feedback and business requirements',
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
            Professional Experience
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Building scalable systems and delivering impactful solutions
          </p>

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <Card 
                key={index} 
                className="animate-slide-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

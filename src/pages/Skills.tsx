import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Cloud, Database, Wrench } from 'lucide-react';

const skillsData = {
  'Programming Languages': {
    icon: Code2,
    skills: ['Java', 'JavaScript', 'C', 'C++', 'HTML5', 'CSS3'],
    color: 'text-primary',
  },
  'Frameworks & Libraries': {
    icon: Wrench,
    skills: ['Spring Boot', 'React.js', 'Node.js', 'JUnit', 'Redux'],
    color: 'text-secondary',
  },
  'Databases': {
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    color: 'text-primary',
  },
  'Cloud & DevOps': {
    icon: Cloud,
    skills: ['AWS (EC2, S3)', 'Azure Kubernetes', 'CI/CD', 'Git', 'GitHub', 'Docker', 'Linux'],
    color: 'text-secondary',
  },
};

const additionalSkills = [
  'RESTful APIs',
  'Microservices Architecture',
  'WebSockets',
  'JWT Authentication',
  'API Documentation (Swagger)',
  'JSON',
  'XML',
  'Maven',
  'Postman',
  'Spring Security',
  'JPA/Hibernate',
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
            Technical Skills
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies and tools I work with
          </p>

          {/* Main Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {Object.entries(skillsData).map(([category, data], index) => {
              const IconComponent = data.icon;
              return (
                <Card 
                  key={category} 
                  className="animate-slide-up hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconComponent className={`h-5 w-5 ${data.color}`} />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle>Additional Expertise</CardTitle>
              <CardDescription>
                Other technologies and methodologies I'm proficient in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {additionalSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { Mail, Phone, Linkedin, Github, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactData = {
  email: 'guptaaniket.9990@gmail.com',
  phone: '+91-8828353073',
  linkedin: 'https://www.linkedin.com/in/aniket8828',
  github: 'https://github.com/aniket8828',
};

const codingProfiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/aniket8828',
    description: 'Problem solving and algorithmic challenges',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/aniket8828',
    description: 'Competitive programming contests',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/aniket8828',
    description: 'Data structures and algorithms practice',
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let's connect and discuss opportunities
          </p>

          {/* Contact Information */}
          <Card className="animate-slide-up mb-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href={`mailto:${contactData.email}`}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {contactData.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${contactData.phone}`}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {contactData.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      /in/aniket8828
                    </p>
                  </div>
                </a>

                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      @aniket8828
                    </p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Coding Profiles */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-secondary" />
                Coding Profiles
              </CardTitle>
              <CardDescription>
                Check out my problem-solving journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {codingProfiles.map((profile, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-lg">{profile.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {profile.description}
                      </p>
                    </div>
                    <Button asChild variant="outline">
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Profile
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;

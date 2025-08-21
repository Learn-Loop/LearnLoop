import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Camera, Music, Palette, Calculator } from "lucide-react"
import { Link } from "react-router-dom"

export default function DiscoverPage() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Tech",
      description: "Learn coding, web development, data science, and more",
      skills: ["React", "Python", "JavaScript", "Machine Learning", "DevOps"]
    },
    {
      icon: Palette,
      title: "Design & Creative",
      description: "Graphic design, UI/UX, photography, and creative arts",
      skills: ["Figma", "Photoshop", "UI Design", "Branding", "Illustration"]
    },
    {
      icon: Calculator,
      title: "Business & Finance",
      description: "Entrepreneurship, marketing, finance, and business strategy",
      skills: ["Digital Marketing", "Excel", "Finance", "Project Management", "Sales"]
    },
    {
      icon: Music,
      title: "Arts & Music",
      description: "Music production, instruments, performing arts",
      skills: ["Guitar", "Piano", "Music Production", "Singing", "Dancing"]
    },
    {
      icon: Camera,
      title: "Media & Content",
      description: "Video editing, content creation, podcasting",
      skills: ["Video Editing", "Content Writing", "Photography", "Podcasting", "YouTube"]
    },
    {
      icon: BookOpen,
      title: "Languages & Writing",
      description: "Foreign languages, creative writing, communication",
      skills: ["Spanish", "French", "Creative Writing", "Public Speaking", "Translation"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">LearnLoop</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Join Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Discover Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore thousands of skills taught by professionals in our community. Find your next learning adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Explore {category.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
          <p className="text-muted-foreground mb-6">Join LearnLoop to connect with skilled professionals</p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-8">
              Join LearnLoop Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

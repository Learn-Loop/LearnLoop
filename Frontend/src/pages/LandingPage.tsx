import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen, MessageCircle, Star, CheckCircle, Globe } from "lucide-react"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">LearnLoop</span>
            </div>
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Exchange Skills,
            <span className="text-primary block">Grow Together</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with professionals and learners worldwide. Share your expertise, learn new skills, and build
            meaningful connections in our vibrant community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8">
                Start Learning <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/discover">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Explore Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-foreground mb-4">How LearnLoop Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to start your learning journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>1. Create Your Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sign up and showcase the skills you can teach and what you want to learn. Build your professional
                  learning profile.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>2. Find Your Match</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Discover professionals who can teach you new skills and connect with learners interested in your
                  expertise.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>3. Start Exchanging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect, chat, and begin your skill exchange journey. Learn, teach, and grow together with your
                  matches.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why LearnLoop */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl text-foreground mb-4">Why Choose LearnLoop?</h2>
            <p className="text-lg text-muted-foreground">The benefits that make us different</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Completely Free</h3>
                <p className="text-muted-foreground">
                  No subscription fees or hidden costs. Knowledge sharing should be accessible to everyone.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Peer-Driven Learning</h3>
                <p className="text-muted-foreground">
                  Learn from real professionals with hands-on experience in their fields.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Diverse Skills</h3>
                <p className="text-muted-foreground">
                  From technical skills to creative arts, find expertise across all industries and disciplines.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Connections</h3>
                <p className="text-muted-foreground">
                  Build meaningful professional relationships that extend beyond skill exchange.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Easy Communication</h3>
                <p className="text-muted-foreground">
                  Integrated messaging and scheduling tools to coordinate your learning sessions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Flexible Learning</h3>
                <p className="text-muted-foreground">
                  Learn at your own pace with scheduling that works for both parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-3xl text-foreground mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of professionals already exchanging skills on LearnLoop
          </p>
          <Link to="/signup">
            <Button size="lg" className="text-lg px-8">
              Join LearnLoop Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">LearnLoop</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 LearnLoop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

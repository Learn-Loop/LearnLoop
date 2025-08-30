import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Camera,
  Music,
  Palette,
  Calculator,
  BookOpen,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DiscoverPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Tech",
      description: "Learn coding, web development, data science, and more",
      skills: ["React", "Python", "JavaScript", "Machine Learning", "DevOps"],
      delay: "delay-100",
    },
    {
      icon: Palette,
      title: "Design & Creative",
      description: "Graphic design, UI/UX, photography, and creative arts",
      skills: ["Figma", "Photoshop", "UI Design", "Branding", "Illustration"],
      delay: "delay-200",
    },
    {
      icon: Calculator,
      title: "Business & Finance",
      description:
        "Entrepreneurship, marketing, finance, and business strategy",
      skills: [
        "Digital Marketing",
        "Excel",
        "Finance",
        "Project Management",
        "Sales",
      ],
      delay: "delay-300",
    },
    {
      icon: Music,
      title: "Arts & Music",
      description: "Music production, instruments, performing arts",
      skills: ["Guitar", "Piano", "Music Production", "Singing", "Dancing"],
      delay: "delay-400",
    },
    {
      icon: Camera,
      title: "Media & Content",
      description: "Video editing, content creation, podcasting",
      skills: [
        "Video Editing",
        "Content Writing",
        "Photography",
        "Podcasting",
        "YouTube",
      ],
      delay: "delay-500",
    },
    {
      icon: BookOpen,
      title: "Languages & Writing",
      description: "Foreign languages, creative writing, communication",
      skills: [
        "Spanish",
        "French",
        "Creative Writing",
        "Public Speaking",
        "Translation",
      ],
      delay: "delay-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Navigation with slide-down animation */}
      <nav
        className={`border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-50 transition-all duration-700 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LearnLoop
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button
                  variant="ghost"
                  className="hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Dashboard
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1
              className="font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-pulse"
              style={{
                textShadow: "0 0 40px rgba(59, 130, 246, 0.5)",
              }}
            >
              Discover Skills,
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent pb-4">
                Learn Anything
              </span>
            </h1>
          </div>
          <p
            className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Explore thousands of skills taught by professionals in our
            community. Find your next learning adventure and start exchanging
            knowledge.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link to="/signup">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                <Search className="mr-2 w-5 h-5" />
                Browse All Skills
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white transform hover:scale-105 transition-all duration-300 hover:border-white/50"
              >
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Explore Skill Categories
            </h2>
            <p className="text-lg text-gray-300">
              Choose from diverse categories and find the perfect skill to learn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className={`bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer ${category.delay}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white/10 text-gray-200 text-sm rounded-full backdrop-blur-sm border border-white/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-4 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                      >
                        Explore {category.title}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trending Skills
            </h2>
            <p className="text-lg text-gray-300">
              Most sought-after skills in our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "JavaScript",
              "Python",
              "React",
              "UI/UX Design",
              "Photography",
              "Spanish",
              "Machine Learning",
              "Digital Marketing",
              "Video Editing",
              "Guitar",
              "Data Science",
              "Figma",
              "Content Writing",
              "Excel",
              "Piano",
              "French",
            ].map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-white/5 border border-white/10 rounded-lg text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group cursor-pointer backdrop-blur-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join LearnLoop to connect with skilled professionals and start your
            learning journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 group relative overflow-hidden"
              >
                <span className="relative z-10">Join LearnLoop Today</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:border-white/50"
              >
                Sign In to Explore
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 group">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LearnLoop
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              {["About", "Privacy", "Terms", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 text-center text-sm text-gray-500">
            © 2024 LearnLoop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

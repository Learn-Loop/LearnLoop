import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Users,
  MessageCircle,
  Star,
  ArrowRight,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DashboardPage() {
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

  const statsCards = [
    {
      title: "Active Connections",
      value: "12",
      description: "+2 from last week",
      icon: Users,
      delay: "delay-100",
    },
    {
      title: "Skills Learning",
      value: "5",
      description: "In progress",
      icon: BookOpen,
      delay: "delay-200",
    },
    {
      title: "Skills Teaching",
      value: "8",
      description: "Active sessions",
      icon: Star,
      delay: "delay-300",
    },
    {
      title: "Messages",
      value: "23",
      description: "3 unread",
      icon: MessageCircle,
      delay: "delay-400",
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
              <Link to="/discover">
                <Button
                  variant="ghost"
                  className="hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Discover
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button
                variant="ghost"
                className="hover:bg-white/10 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/";
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1
              className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 40px rgba(59, 130, 246, 0.5)",
              }}
            >
              Welcome Back!
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl mt-2">
                Your Learning Dashboard
              </span>
            </h1>
          </div>
          <p
            className={`text-lg text-gray-300 mb-6 max-w-2xl transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Track your learning progress, manage connections, and discover new
            opportunities
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link to="/discover">
              <Button
                size="lg"
                className="text-base px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                <Search className="mr-2 w-4 h-4" />
                Find New Skills
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white transform hover:scale-105 transition-all duration-300 hover:border-white/50"
            >
              <Plus className="mr-2 w-4 h-4" />
              Add Skills
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className={`bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group ${stat.delay}`}
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">
                      {stat.title}
                    </CardTitle>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-4 w-4 text-blue-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <p className="text-xs text-gray-400">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-white">
                      Recent Connections
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Your latest skill exchange matches
                    </CardDescription>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 mb-4">
                    Connect with professionals to see your recent matches here.
                  </p>
                  <Link to="/discover">
                    <Button
                      variant="outline"
                      className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                    >
                      Find Connections
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl text-white">
                      Learning Progress
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Track your skill development journey
                    </CardDescription>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-8">
                  <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 mb-4">
                    Start learning to see your progress here.
                  </p>
                  <Link to="/discover">
                    <Button
                      variant="outline"
                      className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                    >
                      Browse Skills
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-bold text-3xl mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Learn Something New?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Explore new skills or connect with learners interested in your
            expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discover">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 group relative overflow-hidden"
              >
                <span className="relative z-10">Discover Skills</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:border-white/50"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              View Messages
            </Button>
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

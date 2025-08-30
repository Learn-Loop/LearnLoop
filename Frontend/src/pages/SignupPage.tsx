import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { signup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    try {
      await signup(firstName, lastName, email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.error || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

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
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Signup Form Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="w-full max-w-md relative z-10">
          <Card
            className={`bg-white/5 border-white/10 backdrop-blur-xl transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Join LearnLoop
              </CardTitle>
              <CardDescription className="text-gray-300">
                Create your account to start exchanging skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-300 bg-red-900/20 border border-red-500/20 rounded-md backdrop-blur-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Create a password (min 6 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400/50 focus:ring-blue-400/20 transition-all duration-300"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
              <div className="mt-6 text-center text-sm">
                <span className="text-gray-300">Already have an account? </span>
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300 font-medium"
                >
                  Sign in
                </Link>
              </div>
              <div className="text-center mt-4">
                <Link
                  to="/"
                  className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ← Back to home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm relative z-10">
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

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Cloud,
  Thermometer,
  Clock,
  Wind,
  Droplets,
  Search,
  MapPin,
  Moon,
  Sun,
  LayoutGrid,
} from "lucide-react";
import { useTheme } from "@/components/ThemeToggle";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const WeatherDashboardPage = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Search,
      title: "City Search",
      description:
        "Search for any city worldwide and get instant weather information",
    },
    {
      icon: Clock,
      title: "5-Day Forecast",
      description: "View detailed weather predictions for the next 5 days",
    },
    {
      icon: LayoutGrid,
      title: "Hourly Forecast",
      description:
        "Check detailed hourly forecasts to plan your day effectively",
    },
    {
      icon: Thermometer,
      title: "Temperature Toggle",
      description:
        "Switch between Celsius and Fahrenheit units with a single click",
    },
    {
      icon: MapPin,
      title: "Geolocation",
      description: "Get weather for your current location instantly",
    },
    {
      icon: Droplets,
      title: "Detailed Metrics",
      description:
        "View humidity, wind speed, pressure, and more weather metrics",
    },
    {
      icon: Cloud,
      title: "Weather Animations",
      description: "Dynamic animations based on current weather conditions",
    },
    {
      icon: Moon,
      title: "Dark/Light Theme",
      description: "Choose your preferred visual theme for better visibility",
    },
  ];

  const technologies = [
    "React.js",
    "Context API",
    "Tailwind CSS",
    "Framer Motion",
    "OpenWeatherMap API",
    "Geolocation API",
    "Responsive Design",
    "Local Storage",
  ];

  return (
    <>
      <Navbar />
      <div className={`pt-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 via-transparent to-transparent dark:from-primary-900/10 dark:via-slate-950/5 pointer-events-none" />
          </div>

          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="mb-4">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back to Home
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
                >
                  Weather Dashboard
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-slate-600 dark:text-slate-300 mb-8"
                >
                  A modern, responsive weather dashboard application built with
                  React that allows users to search for any city and view its
                  current weather information and forecasts.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href="https://github.com/aakash-kumar-singh/WeatherForecast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline flex items-center gap-2"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  <a
                    href="https://weather-dashboard-aakash.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative aspect-video"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-sky-500 rounded-lg blur opacity-20" />
                <div className="relative h-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 shadow-xl">
                  <img
                    src="/assets/projects/weather-dashboard-preview.jpg"
                    alt="Weather Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={isDark ? "bg-slate-900" : "bg-slate-50"}>
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                Key Features
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                Explore the powerful features that make this weather dashboard
                stand out
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card p-6 hover:border-primary-500/50 dark:hover:border-primary-600/50 border border-transparent"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-500 dark:text-primary-400">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <section>
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                  Project Overview
                </h2>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p>
                    The Weather Dashboard is a comprehensive web application
                    designed to provide users with accurate and up-to-date
                    weather information. The project demonstrates my proficiency
                    in building responsive user interfaces with React and
                    integrating third-party APIs.
                  </p>

                  <h3>Development Challenges</h3>
                  <p>
                    Building this application involved overcoming several
                    challenges, including:
                  </p>
                  <ul>
                    <li>
                      Designing an intuitive user interface that presents
                      complex weather data in an easily digestible format
                    </li>
                    <li>
                      Implementing efficient API calls to minimize redundant
                      requests and optimize performance
                    </li>
                    <li>
                      Creating smooth animations and transitions to enhance the
                      user experience
                    </li>
                    <li>
                      Ensuring the application works seamlessly across different
                      device sizes and screen orientations
                    </li>
                    <li>
                      Implementing robust error handling for network requests
                      and geolocation features
                    </li>
                  </ul>

                  <h3>Technical Implementation</h3>
                  <p>
                    The application architecture is built around React's Context
                    API for global state management, allowing components to
                    access shared data such as user preferences and current
                    weather information. This approach eliminated prop drilling
                    and kept the component structure clean and maintainable.
                  </p>

                  <p>
                    The UI was built using Tailwind CSS for rapid development
                    and consistent styling, with Framer Motion adding fluid
                    animations that respond to both user interactions and
                    changes in weather data.
                  </p>

                  <h3>Future Enhancements</h3>
                  <p>
                    While the current version offers comprehensive
                    functionality, I plan to implement several enhancements in
                    future updates:
                  </p>
                  <ul>
                    <li>
                      Weather alerts and notifications for severe conditions
                    </li>
                    <li>Historical weather data visualization with charts</li>
                    <li>
                      Additional map views with radar and satellite imagery
                    </li>
                    <li>
                      Integration with calendar apps for event planning based on
                      weather forecasts
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                  Project Details
                </h3>

                <div className="card p-6 mb-6">
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Project Type
                      </dt>
                      <dd className="mt-1 text-slate-900 dark:text-white">
                        Web Application
                      </dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Timeline
                      </dt>
                      <dd className="mt-1 text-slate-900 dark:text-white">
                        Mar 2024 - Present
                      </dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Role
                      </dt>
                      <dd className="mt-1 text-slate-900 dark:text-white">
                        Full-stack Developer
                      </dd>
                    </div>

                    <div>
                      <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Primary API
                      </dt>
                      <dd className="mt-1 text-slate-900 dark:text-white">
                        OpenWeatherMap
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="card p-6">
                  <h4 className="font-medium mb-4 text-slate-900 dark:text-white">
                    Resources & Links
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://github.com/aakash-kumar-singh/WeatherForecast"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github size={16} className="mr-2 flex-shrink-0" />
                        <span>GitHub Repository</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://weather-dashboard-aakash.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink
                          size={16}
                          className="mr-2 flex-shrink-0"
                        />
                        <span>Live Demo</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://openweathermap.org/api"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Cloud size={16} className="mr-2 flex-shrink-0" />
                        <span>OpenWeatherMap API</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={isDark ? "bg-slate-900" : "bg-slate-50"}>
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Interested in working together?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <a href="/#contact" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WeatherDashboardPage;

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import BlogPage from "@/pages/BlogPage";
import InitialLoadingScreen from "@/components/common/InitialLoadingScreen";
import WeatherDashboardPage from "@/pages/WeatherDashboardPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => setIsLoading(false), 1800); // Show loading animation for homepage
    } else {
      setIsLoading(false); // No loading on other pages
    }
  }, [location]); // Dependency on location path

  return (
    <>
      {isLoading && <InitialLoadingScreen />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/projects/weather-dashboard" element={<WeatherDashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
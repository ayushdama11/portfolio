import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import WeatherDashboardPage from "./WeatherDashboardPage";

const projectRoutes = {
  "weather-dashboard": WeatherDashboardPage,
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // If the project exists, render its dedicated page component
  if (id && projectRoutes[id]) {
    const ProjectComponent = projectRoutes[id];
    return <ProjectComponent />;
  }
  
  // Otherwise redirect to 404
  return <Navigate to="/404" replace />;
};

export default ProjectDetailPage;
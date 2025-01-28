import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import NotFoundPage from "./pages/NotFoundPage";
import InteractiveGames from "./games/InteractiveGames";
import ColorMatchGame from "./games/components/ColorMatchGame/index";
import TypingSpeedTest from "./games/components/TypingSpeedTest/index";
import FirstLoading from "./components/common/EnhancedLoadingSpinner";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <FirstLoading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/games" element={<InteractiveGames />} />
        <Route path="/games/color-match" element={<ColorMatchGame />} />
        <Route path="/games/typing-test" element={<TypingSpeedTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

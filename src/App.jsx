import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import InteractiveGames from "@/games/InteractiveGames";
import ColorMatchGame from "@/games/components/ColorMatchGame/index";
import TypingSpeedTest from "@/games/components/TypingSpeedTest/index";
import FirstLoading from "@/components/common/EnhancedLoadingSpinner";
import SlidingPuzzle from "@/games/components/SlidingPuzzle/SlidingPuzzle";
import MemoryMatch from "@/games/components/MemoryMatch/MemoryMatch";
import ComingSoon from "@/components/common/ComingSoon";
import ThemeProvider from "./components/ThemeToggle";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <FirstLoading />;
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<ComingSoon />} />
          <Route path="/games" element={<InteractiveGames />} />
          <Route path="/games/color-match" element={<ColorMatchGame />} />
          <Route path="/games/typing-test" element={<TypingSpeedTest />} />
          <Route path="/games/sliding-puzzle" element={<SlidingPuzzle />} />
          <Route path="/games/memory-match" element={<MemoryMatch />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

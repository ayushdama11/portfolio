// src/constants/gamesData.js
import { Palette, Keyboard } from "lucide-react";

export const games = [
  {
    title: "Color Match Challenge",
    description: [
      "Test your color perception skills",
      "Match RGB values in real-time",
      "Track your high scores and progress",
    ],
    icon: Palette,
    path: "/games/color-match",
    tech: ["RGB", "Color Theory", "Reaction Time"],
  },
  {
    title: "Typing Speed Test",
    description: [
      "Improve your typing accuracy and speed",
      "Practice with random text passages",
      "View detailed performance metrics",
    ],
    icon: Keyboard,
    path: "/games/typing-test",
    tech: ["WPM", "Accuracy", "Statistics"],
  },
];
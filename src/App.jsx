import React from "react";
import { useState, useEffect } from "react";
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
    <>
      <div>App</div>
    </>
  );
};

export default App;

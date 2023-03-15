import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Settings } from "./pages";
import useMediaQuery from "./shared/hooks/useMediaQuery";

function App() {
  const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  const content = (
    <Routes>
      <Route path="/" element={<Navigate to="settings" replace />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );

  return (
    <div className="relative flex flex-row">
      {isSmallScreen ? (
        <div className="flex-1 max-sm:w-full">
          <Navbar />
          {content}
        </div>
      ) : (
        <div className="sm:flex hidden relative">
          <Sidebar />
          {content}
        </div>
      )}
    </div>
  );
}

export default App;

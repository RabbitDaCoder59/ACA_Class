import { useState } from "react";
import Counter from "./pages/Counter";
import Jokes from "./pages/Jokes";
import ThemeToggle from "./pages/ThemeToggle";
import UserList from "./pages/UserList";
import UserLoginForm from "./pages/UserLoginForm";
import UserRegistrationForm from "./pages/UserRegistrationForm";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import BlogRoutes from "./layout/BlogRoutes";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div
        className={`${
          isDark ? "bg-black" : "bg-gray-100"
        } w-full h-full min-h-screen`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route
            path="/theme-toggle"
            element={<ThemeToggle isDark={isDark} setIsDark={setIsDark} />}
          />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/user-login" element={<UserLoginForm />} />
          <Route path="/user-registration" element={<UserRegistrationForm />} />
          <Route path="/blog/*" element={<BlogRoutes />} />
        </Routes>
      </div>

      {/* 
      in light mode
      w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all bg-gray-300
       the inner circle --->
      w-6 h-6 rounded-full shadow-md transform transition-all duration-300 translate-x-0 bg-white
      Light Mode (isDark === false)
      Stays on the left (translate-x-0)
      Remains white (bg-white)


      dark mode 
      w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all bg-gray-500
      the inner circle --->
      w-6 h-6 rounded-full shadow-md transform transition-all duration-300 translate-x-7 bg-blue-500
      Dark Mode (isDark === true)
      Moves to the right (translate-x-7)
      Turns blue (bg-blue-500)
            
      */}
    </>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import "./App.css";
import { URL } from "./constants"

import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
  useUser,
  SignInButton,
} from "@clerk/clerk-react";
import RecentSearch from "./components/RecentSearch";
import QuestionAnswer from "./components/QuestionAnswer";
import { SendIcon } from "./components/MainIcons";

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);
  const [recentHistory, setRecentHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );
  const [selectedHistory, setSelectedHistory] = useState("");
  const scrollToAns = useRef();
  const [loader, setLoader] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode || "dark";
  });

  const { user } = useUser(); // Clerk user object

  const updateHistory = (newItem) => {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history = [newItem, ...history.filter((item) => item !== newItem)];
    localStorage.setItem("history", JSON.stringify(history));
    setRecentHistory(history);
  };

  const askQuestion = async () => {
    if (!question && !selectedHistory) return;
    const currentInput = question || selectedHistory;
    updateHistory(currentInput);
    const payload = {
      contents: [{ parts: [{ text: currentInput }] }],
    };

    setLoader(true);
    try {
      let response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      response = await response.json();
      let dataString = response.candidates[0].content.parts[0].text;
      dataString = dataString.split("* ").map((item) => item.trim());

      setResult([
        ...result,
        { type: "q", text: currentInput },
        { type: "a", text: dataString },
      ]);
      setQuestion("");
      setTimeout(() => {
        scrollToAns.current?.scrollTo({
          top: scrollToAns.current.scrollHeight,
          behavior: "smooth",
        });
      }, 500);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") askQuestion();
  };

  const handleNewChat = () => {
    setResult([]);
    setSelectedHistory("");
    setQuestion("");
  };

  useEffect(() => {
    if (selectedHistory) askQuestion();
  }, [selectedHistory]);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () =>
    setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <SignedIn>
        <div
          className={`h-screen flex flex-col md:flex-row overflow-hidden ${
            darkMode === "dark" ? "dark" : "light"
          }`}
        >
          {/* Toggle Sidebar (Mobile) */}
          <button
            onClick={toggleSidebar}
            className="md:hidden fixed top-4 right-4 z-10 bg-violet-500 dark:bg-violet-600 text-white p-2 rounded-4xl shadow-lg"
          >
            X
          </button>

          {/* Sidebar */}
          <div
            className={`${
              sidebarOpen ? "translate-x-0" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out fixed md:relative md:translate-x-0 z-40 w-52 md:w-1/4 h-full overflow-hidden dark:bg-zinc-900 bg-white shadow-md border-r dark:border-zinc-700 border-zinc-200`}
          >
            <div className="p-4 border-b dark:border-zinc-700 border-zinc-200 flex justify-between items-center">
              <span className="font-semibold dark:text-white text-zinc-900 text-sm">
                {user?.fullName || "User"}
              </span>
              <UserButton afterSignOutUrl="/sign-in" />
            </div>

            <button
              onClick={handleNewChat}
              className="text-sm bg-violet-500 text-white px-3 py-1 rounded-md hover:bg-violet-600 transition m-4"
            >
              New Chat
            </button>

            <RecentSearch
              recentHistory={recentHistory}
              setRecentHistory={setRecentHistory}
              setSelectedHistory={setSelectedHistory}
              setQuestion={setQuestion} // ✅ Add this
            />
          </div>

          {/* Main */}
          <div
            className={`flex-1 flex flex-col transition-all duration-300 ${
              sidebarOpen ? "md:ml-0" : "md:ml-0"
            } h-full dark:bg-zinc-800 bg-zinc-50`}
          >
            {/* <header className="flex justify-between items-center p-4 border-b dark:border-zinc-700 border-zinc-200">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600">
                Gemini Chat
              </h1>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            </header> */}

            {/* <header className="flex justify-between items-center p-4 border-b dark:border-zinc-700 border-zinc-200">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600">
                Gemini Chat
              </h1>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode === "dark" ? <SunIcon /> : <MoonIcon />}
                </button>

                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>

                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="px-4 py-2 text-sm font-medium bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-all">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>
            </header> */}

            <div className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">
              {result.length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full flex items-center justify-center"></div>
                  <h2 className="text-2xl font-semibold dark:text-zinc-100 text-zinc-800 mb-2">
                    Hello, how can I help you today?
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                    Ask me anything and I'll do my best to help. Try asking
                    about coding, general knowledge, or creative ideas.
                  </p>
                </div>
              )}

              <div
                ref={scrollToAns}
                className={`flex-1 overflow-y-auto ${
                  result.length > 0 ? "block" : "hidden"
                } pr-1 space-y-6 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700`}
              >
                {result.map((item, index) => (
                  <QuestionAnswer key={index} item={item} index={index} />
                ))}
                {loader && (
                  <div className="flex justify-center py-4">
                    <div className="w-8 h-8 border-4 border-t-violet-500 border-zinc-300 dark:border-zinc-700 rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <div className="relative">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={handleEnter}
                    className="w-full p-4 pr-14 rounded-xl border dark:border-zinc-700 border-zinc-300 bg-white dark:bg-zinc-900 dark:text-white text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                    placeholder="Ask me anything..."
                  />
                  <button
                    onClick={askQuestion}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-violet-500 hover:bg-violet-600 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!question && !selectedHistory}
                  >
                    <SendIcon/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default App;

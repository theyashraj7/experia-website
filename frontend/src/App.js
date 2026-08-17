import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";

import Home from "@/pages/Home";
import LivePage from "@/pages/LivePage";
import ExpertsPage from "@/pages/ExpertsPage";
import TopicsPage from "@/pages/TopicsPage";
import QuestionsPage from "@/pages/QuestionsPage";
import TopicDetail from "@/pages/TopicDetail";
import ExpertDetail from "@/pages/ExpertDetail";
import ConversationDetail from "@/pages/ConversationDetail";
import LearningPage from "@/pages/LearningPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <SmoothScroll>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/live" element={<LivePage />} />
              <Route path="/experts" element={<ExpertsPage />} />
              <Route path="/experts/:slug" element={<ExpertDetail />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/topic/:slug" element={<TopicDetail />} />
              <Route path="/questions" element={<QuestionsPage />} />
              <Route path="/conversations/:slug" element={<ConversationDetail />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </SmoothScroll>
          <Toaster position="bottom-right" />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

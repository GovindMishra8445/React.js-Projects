import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import App from "./App";

<ClerkProvider frontendApi={clerkFrontendApi}>
  <BrowserRouter>
    <Routes>
      <Route path="/sign-in" element={<SignInPage/>} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
</ClerkProvider>

import { Header } from "../widgets/layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />k
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
     
    </>
  );
}

export default App;

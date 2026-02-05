import { Routes, Route } from "react-router-dom";
import WelcomePage from "../pages/Welcomepage";
import CalculatorPage from "../pages/CalculatorPage";
import PageContainer from "../components/layout/PageContainer";

const App = () => {
  return (
    <Routes>
      <Route element={<PageContainer />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
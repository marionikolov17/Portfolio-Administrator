import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Notifications from "./pages/Notifications/Notifications";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index Component={Home}/>
          <Route index Component={Notifications}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

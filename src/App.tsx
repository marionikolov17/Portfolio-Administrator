import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Notifications from "./pages/Notifications/Notifications";
import Inbox from "./pages/Inbox/Inbox";
import InboxMessage from "./pages/InboxMessage/InboxMessage";
import Login from "./pages/Login/Login";
import { UserProvider } from "./lib/context/user.context";
import ErrorAlert from "./shared/components/ErrorAlert/ErrorAlert";

function App() {
  return (
    <UserProvider>
      <>
        <ErrorAlert />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index Component={Home}/>
            <Route path="notifications" Component={Notifications}/>
            <Route path="inbox" Component={Inbox}/>
            <Route path="inbox/:messageId" Component={InboxMessage}/>
          </Route>
          <Route path="/login" Component={Login}/>
        </Routes>
      </>
    </UserProvider>
  );
}

export default App;

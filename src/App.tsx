import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Notifications from "./pages/Notifications/Notifications";
import Inbox from "./pages/Inbox/Inbox";
import InboxMessage from "./pages/InboxMessage/InboxMessage";
import Login from "./pages/Login/Login";
import Certificates from "./pages/Certificates/Certificates";
import CreateCertificate from "./pages/CreateCertificate/CreateCertificate";
import { UserProvider } from "./lib/context/user.context";
import { ErrorProvider } from "./shared/context/error.context";
import EditCertificate from "./pages/EditCertificate/EditCertificate";

function App() {
  return (
    <UserProvider>
      <ErrorProvider>
        <>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index Component={Home} />
              <Route path="notifications" Component={Notifications} />
              <Route path="inbox" Component={Inbox} />
              <Route path="inbox/:messageId" Component={InboxMessage} />
              <Route path="certificates" Component={Certificates} />
              <Route path="certificates/create" Component={CreateCertificate} />
              <Route
                path="certificates/edit/:certificateId"
                Component={EditCertificate}
              />
            </Route>
            <Route path="/login" Component={Login} />
          </Routes>
        </>
      </ErrorProvider>
    </UserProvider>
  );
}

export default App;

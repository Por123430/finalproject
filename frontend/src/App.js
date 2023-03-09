import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UserList from "./features/users/UserList";
import Notification from "./features/auth/Notification";
import LogMonitor from "./features/auth/LogMonitor";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import MonitorList from "./features/monitors/MonitorList";
import Prefetch from "./features/auth/Prefetch";
import PersistLogin from "./features/auth/PersistLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
            <Route path="dash" element={<DashLayout />}>
              <Route path="monitors">
                <Route index element={<MonitorList />} />
              </Route>

              <Route path="notification" element={<Notification />} />
              <Route path="logmonitor" element={<LogMonitor />} />
              <Route index element={<Welcome />} />

              <Route path="notes">
                <Route index element={<NotesList />} />
              </Route>

              <Route path="users">
                <Route index element={<UserList />} />
                <Route path=":id" element={<EditUser />} />
                <Route path="new" element={<NewUserForm />} />
              </Route>
            </Route>
            {/* end dash */}
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

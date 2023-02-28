import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import NotesList from './features/notes/NotesList';
import UserList from './features/users/UserList';
import Notification from './features/auth/Notification';
import LogMonitor from './features/auth/LogMonitor';
import EditUser from './features/users/EditUser';
import NewUserForm from './features/users/NewUserForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
            
            <Route path="notification" element={<Notification />}/>
            <Route path="logmonitor" element={<LogMonitor />}/>
            <Route index element={<Welcome />}/>

            <Route path="notes">
              <Route index element={<NotesList />} />
              
            </Route>

            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="new" element={<NewUserForm />} />
            </Route>

        </Route>{/* end dash */}

      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import UserList from "./pages/UserList";
import "./App.css";
import UserCard from "./components/UserCard";
import SpecficUser from "./pages/SpecficUser";
import NotifyAll from "./pages/NotifyAll";
import NotifyAllUsers from "./pages/NotifyAllUsers";
import NotifyAllCollectors from "./pages/NotifyAllCollectors";
import CollectorList from "./pages/CollectorList";
import SpecficCollector from "./pages/SpecficCollector";
import PendingCollectors from "./pages/PendingCollectors";
import RejectedCollectors from "./pages/RejectedCollectors";
import NotifySpecficPerson from "./pages/NotifySpecficPerson";
import RequestList from "./pages/RequestList";
import BarChart from "./components/BarChart";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar className="w-64 bg-gray-800" />
       
        <div className="flex-1 ml-4">
          <Routes>
          
          <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<SpecficUser />} />
            <Route path="/collectors" element={<CollectorList />} />
            <Route path="/collectors/:collectorId" element={<SpecficCollector />} />
            <Route path="/pendingCollectors" element={<PendingCollectors />} />
            <Route path="/rejectedCollectors" element={<RejectedCollectors />} />
            <Route path="/pendingCollectors/:collectorId" element={<SpecficCollector />} />
            <Route path="/rejectedCollectors/:collectorId" element={<SpecficCollector />} />

            <Route path="/nofify/nofityAll" element={<NotifyAll/> }/>
            <Route path="/nofify/notifiyAllUsers" element={<NotifyAllUsers/> }/>
            <Route path="/nofify/notifiyAllCollectors" element={<NotifyAllCollectors/> }/>
            <Route path="/notify/:id" element={<NotifySpecficPerson/> }/>
            <Route path="/requests" element={<RequestList />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

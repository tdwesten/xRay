import React from "react";
import StatusBar from "./components/StatusBar";
import Sidebar from "./components/Sidebar";
import LogList from "./components/LogList";
import FilterBar from "./components/FilterBar";
import { LogProvider } from "./context/LogContext";

function App() {
  return (
    <LogProvider>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <FilterBar />
          <div className="flex-1 overflow-auto">
            <LogList />
          </div>
          <StatusBar />
        </div>
      </div>
    </LogProvider>
  );
}

export default App;

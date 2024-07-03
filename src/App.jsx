import React from "react";
import Home from "./page/Home";
import { UsersProvider } from "./context/usersContext";
import Table from "./components/Table";

const App = () => {
  return (
    <UsersProvider>
      <Home />
      <Table/>
    </UsersProvider>
  );
};

export default App;

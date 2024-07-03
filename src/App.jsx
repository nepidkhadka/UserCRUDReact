import React from "react";
import Home from "./page/Home";
import { UsersProvider } from "./context/usersContext";
import Table from "./components/Table";
import Update from "./page/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <UsersProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Table />
              </>
            }
          />
          <Route path="/update/:id" element={<Update/>} />
          <Route path="/*" element={<h1 className="h-screen grid place-items-center text-3xl font-bold">Error!!! Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  );
};

export default App;

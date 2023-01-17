import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./component/global/MainLayout";
import HomePage from "./Page/HomePage";

function App() {
  return (
    <div className="App">
      <ToastContainer
        theme="colored"
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/players" element={<PlayersTable />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

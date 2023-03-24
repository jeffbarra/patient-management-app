import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewPatient from "./pages/NewPatient";
import InitialAppt from "./forms/InitialForm";
import FollowUp from "./forms/FollowUpForm";
import FindPatient from "./pages/FindPatient";
import TodaysPatients from "./pages/TodaysPatients";
import Support from "./forms/SupportForm";
import Signin from "./pages/Signin";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/signin" element={<Signin />}></Route>
            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            ></Route>
            <Route
              path="/today"
              element={
                <Protected>
                  <TodaysPatients />
                </Protected>
              }
            ></Route>
            <Route
              path="/new"
              element={
                <Protected>
                  <NewPatient />
                </Protected>
              }
            ></Route>
            <Route
              path="/initial"
              element={
                <Protected>
                  <InitialAppt />
                </Protected>
              }
            ></Route>
            <Route
              path="/followup"
              element={
                <Protected>
                  <FollowUp />
                </Protected>
              }
            ></Route>
            <Route
              path="/find"
              element={
                <Protected>
                  <FindPatient />
                </Protected>
              }
            ></Route>
            <Route
              path="/support"
              element={
                <Protected>
                  <Support />
                </Protected>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;

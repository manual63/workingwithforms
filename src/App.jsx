import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Layout from "./common/Layout";
import UserContext from "./contexts/UserContext";
import Form from "./pages/Form";
import NoPage from "./pages/NoPage";
import Landing from "./pages/landing";

function App() {
  const [currentUser, setCurrentUser] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Layout />}
            >
              <Route index element={<Landing />} />
              <Route path="/form" element={<Form />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App

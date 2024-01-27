import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from "react-router-dom";
import Layout from "./common/Layout";
import Landing from "./pages/landing";
import Form from "./pages/Form";
import NoPage from "./pages/NoPage";


function App() {

  return (
    <>
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
    </>
  )
}

export default App

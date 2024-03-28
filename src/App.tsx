import { Provider } from "react-redux"
import Home from "./pages/Home"
import { store } from "./state/store"
import "./assets/styles/general.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container-fluid" style={{ width: 800 }}>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux"
import Home from "./pages/Home"
import { store } from "./state/store"
import "./assets/styles/mainStyle.css"

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;

import Home from "./Core/Home/Home";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
};

export default App;

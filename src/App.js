import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import CounterComponent from "./components/CounterComponent";

export default function App() {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
}

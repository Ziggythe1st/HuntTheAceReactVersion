import { Provider } from "react-redux";
import { store } from "./store";
import Cards from "../components/Cards";
import Header from "../components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Cards />
      </main>
    </Provider>
  );
}

export default App;

import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
    return(
      <div className="App flex flex-col justify-center items-center">
        <Header />
        <Main />
        <Footer />
      </div>
    )
}

export default App;

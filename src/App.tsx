import "./App.css";
import { cn } from "@/lib/utils";
import { Article } from "./Article";
import { Header } from "./components/Header";

function App() {
  return (
    <div className={cn("w-screen h-screen")}>
      <div className={cn("pt-14", "max-w-5xl mx-auto p-8")}>
        <Header />
        <Article />
      </div>
    </div>
  );
}

export default App;

import { Header } from "./components/Header";
import { Page } from "./components/Page";
import "./global.css";

export function App() {


  return (
    <div className="w-screen h-full bg-gray600">
      <header><Header /></header>

      <main className="w-screen h-screen flex flex-col items-center relative top-[-27px]">
      <Page />
      </main>
    </div>
  )
}



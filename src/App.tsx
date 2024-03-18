import { Header } from './components/Header';
import { Page } from './components/Page';
import './global.css';


export function App() {
  return (
    <div className="w-full h-full bg-[#191919]">
      <header>
        <Header />
      </header>
      
      <main className="w-screen h-[calc(100vh-200px)] flex flex-col items-center relative top-[-27px]">
        <Page />
      </main>
    </div>
  );
}

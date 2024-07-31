import { CurrentTrack } from "./components/CurrentTrack";
import { Feed } from "./components/Feed";
import { Header } from "./components/Header";
import "./App.css"

export function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Feed />
        <CurrentTrack />
      </div>
    </>
  );
}

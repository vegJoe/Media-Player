import { ReactElement } from "react";
import "./Header.css";
import { currentTrack } from "../data"


export function Header(): ReactElement {
    return <header className="header">
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <p className="songName">{currentTrack.songName}</p>
        <span className="material-symbols-outlined">menu</span>
    </header>
}
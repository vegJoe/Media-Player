import { ReactElement } from "react";
import "./CurrentTrack.css";
import { currentTrack } from "../data"
import { Controls } from "./Controls";

export function CurrentTrack(): ReactElement {
    return <main className="currenTrack">
        <img className="cover" src={currentTrack.image} alt="" />
        <p className="songName">{currentTrack.songName}</p>
        <div className="controlsComponent">
            <Controls />
        </div>
    </main>
}
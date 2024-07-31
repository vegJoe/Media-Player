import { ReactElement } from "react";
import { SongList } from "./SongList";
import { tracks } from "../data";
import "./Feed.css";

export function Feed(): ReactElement {
    return (
        <main className="feed">
            {tracks.map((song) => (
                <li key={song.id}><SongList song={song} /></li>
            ))}
        </main>
    )
}
import { ReactElement } from "react";
import "./SongList.css";
import { IMusicTracks } from "../interfaces";

interface Isongs {
    song: IMusicTracks;
}

export function SongList({ song }: Isongs): ReactElement  {
    return (
        <main className="songListMain">
            <img className="cover" src={song.image} alt="" />
            <p className="songName">{song.songName}</p>
            <span className="material-symbols-outlined">play_arrow</span>
        </main>
    )
}
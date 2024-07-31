import { IMusicTracks } from "./interfaces";
import { images } from "./images"

export const currentTrack: IMusicTracks = {
    id: "1",
    songName: "C.R.E.A.M",
    image: images.wutang,
}


export const tracks: IMusicTracks[] = [
    {
        id: "1",
        songName: "C.R.E.A.M",
        image: images.wutang,
    },
    {
        id: "2",
        songName: "Still D.R.E",
        image: images.dre,
    },
    {
        id: "3",
        songName: "93 til infinity",
        image: images.souls,
    },
    {
        id: "4",
        songName: "Hip Hop",
        image: images.dp,
    },
]
import { ReactElement } from "react";
import "./Controls.css";

export function Controls(): ReactElement {
    return <div className="controls">
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <span className="material-symbols-outlined">play_circle</span>
        <span className="material-symbols-outlined">arrow_forward_ios</span>
    </div>
}
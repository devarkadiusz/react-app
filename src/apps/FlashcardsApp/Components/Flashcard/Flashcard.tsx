import React, { FunctionComponent, useState } from "react";
import './Flashcard.sass';

interface FlashcardProps {
    front: String,
    back: String
};

export const Flashcard: FunctionComponent<FlashcardProps> = props => {
    const [active, setActive] = useState(false);
    return(
        <div className="Flashcard" onClick={() => setActive(!active)}>
            {active ? <span>{props.back}</span> : <span>{props.front}</span>}
        </div>
    );
};
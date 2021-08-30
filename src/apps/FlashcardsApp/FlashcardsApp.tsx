import React, { FunctionComponent, useState } from "react";
import { Flashcard } from "./Components/Flashcard/Flashcard";

import './FlashcardsApp.sass';

export const FlashcardsApp: FunctionComponent = () => {
    interface FlashcardProps {
        front: String;
        back: String;
    }
    
    interface ListProps extends Array<any> {
        [index: number]: FlashcardProps;
    }

    const [list, setList] = useState<ListProps>([]);
    const [inputText] = useState<FlashcardProps>({front: "", back: ""});

    return (
        <main>
            <div>
                <input type="text" placeholder="front" onChange={e => inputText.front = e.target.value} />
                <input type="text" placeholder="back" onChange={e => inputText.back = e.target.value} />
                <input type="button" value="Add" onClick={() => {
                    setList([{ "front": inputText.front, "back": inputText.back }, ...list])
                }} />
            </div>
            <div className="FlashcardsList">
                {
                    list.map((_, index) => {
                        return <Flashcard key={index} front={_.front} back={_.back}></Flashcard>
                    })
                }
            </div>
        </main>
    );
}
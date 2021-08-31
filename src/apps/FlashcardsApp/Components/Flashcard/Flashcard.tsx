import React, { FunctionComponent, useState } from "react";
import { Button } from "../Button/Button";
import './Flashcard.sass';

interface FlashcardProps {
    index: number;
    front: string;
    back: string;
    del: JSX.Element;
    edit: any;
    setList: any;
};

export const Flashcard: FunctionComponent<FlashcardProps> = props => {
    interface EditProps {
        front: string;
        back: string;
    }

    const [active, setActive] = useState(false);
    const [edit, setEdit] = useState(false);
    const [inputText] = useState<EditProps>({ front: "", back: "" });

    return (
        <div className="Flashcard">
            <div className="menu">
                {props.del}
                <Button value="edit" onClick={() => setEdit(!edit)} />
            </div>
            <div className="content" onClick={() => setActive(!active)}>
                {!edit ? active ? <span>{props.back}</span> : <span>{props.front}</span> : null}
                {edit ? <span>
                    <input type="text" placeholder={props.front} onChange={e => inputText.front = e.target.value} />
                    <input type="text" placeholder={props.back} onChange={e => inputText.back = e.target.value} />
                    <Button value="save" onClick={() => {
                        props.edit[props.index].front = inputText.front;
                        props.edit[props.index].back = inputText.back;
                        props.setList([...props.edit])
                        setEdit(false)
                    }} />
                </span> : null}
            </div>
        </div>
    );
};
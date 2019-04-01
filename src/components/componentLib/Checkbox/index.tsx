import * as React from 'react';

interface IQuestionProps {
    id: number;
    name: string;
    labelText: string;
    dispatchSetQuestionAnswer: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement>
}

export default ({id, name, dispatchSetQuestionAnswer, inputRef, labelText}: IQuestionProps) =>
    <div>
        <input
            type="checkbox"
            data-id={`checkbox.${name}.${id.toString()}`}
            id={name}
            name={name}
            onChange={dispatchSetQuestionAnswer}
            ref={inputRef}
        />
        <label
            htmlFor={name}
            data-id={`label.${name}.${id.toString()}`}
        >
            {labelText}
        </label>
    </div>

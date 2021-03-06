import * as React from 'react';

import { translate } from '../../../helpers/translations';
import { IQuestionProps } from '../../../shared/types';



 const TextField = ({question, onChangeHandler, inputRef}: IQuestionProps) => {
    const {name, id, translations} = question;

    return (
        <div>
            <label
                htmlFor={name}
                data-id={`label.${name}.${id.toString()}`}
            >
                {translate(translations.text)}
            </label>
            <input
                type="text"
                name={name}
                onChange={onChangeHandler}
                ref={inputRef}
                value={question.answer}
            />
        </div>
    )
}



export default TextField;

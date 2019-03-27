import * as React from 'react';

import {translate} from '../../../helpers/translations';

// Move to shared to be imported and extended later
interface IQuestionTranslations {
    text: string;
    hint: string;
}

interface IQuestion {
    id: number;
    name: string;
    translations: IQuestionTranslations
}

interface ICheckboxQuestion {
    question: IQuestion;
}

export default ({question}: ICheckboxQuestion) => {
    const {id, name, translations} = question
    
    return <div>
        <input
            type="checkbox"
            data-id={`checkbox.${name}.${id.toString()}`}
            id={name}
            name={name}
        />
        <label
            htmlFor={name}
            data-id={`label.${name}.${id.toString()}`}
        >
            {translate(translations.text)}
        </label>
    </div>
}

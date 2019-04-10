import * as React from 'react';

import { translate } from '../../../helpers/translations';
import { IQuestionProps } from '../../../shared/types';


 const Checkbox = ({question, onChangeHandler, inputRef}: IQuestionProps): React.ReactNode => {
    const {name, id ,translations} = question;

    return (
        <div>
            <input
                type="checkbox"
                data-id={`checkbox.${name}.${id.toString()}`}
                id={name}
                name={name}
                onChange={onChangeHandler}
                ref={inputRef}
            />
            <label
                htmlFor={name}
                data-id={`label.${name}.${id.toString()}`}
            >
                {translate(translations.text)}
            </label>
        </div>
    )
};

export default Checkbox;

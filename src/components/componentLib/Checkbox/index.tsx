import * as React from 'react';

import { translate } from '../../../helpers/translations';
import { IQuestion } from '../../../shared/types';


interface IPropsWithDispatch {
    dispatchSetQuestionAnswer: Function;
}

interface IQuestionProps extends IPropsWithDispatch {
    question: IQuestion;
}

export default class Checkbox extends React.PureComponent<IQuestionProps> {
    
    inputRef = React.createRef<HTMLInputElement>();

    dispatchSetQuestion = () => this.props.dispatchSetQuestionAnswer({
        id: this.props.question.id,
        answer: this.inputRef.current.checked
    });
    
    render (): React.ReactNode {
        const {id, name, translations} = this.props.question;

        return (
            <div>
                <input
                    type="checkbox"
                    data-id={`checkbox.${name}.${id.toString()}`}
                    id={name}
                    name={name}
                    onChange={this.dispatchSetQuestion}
                    ref={this.inputRef}
                />
                <label
                    htmlFor={name}
                    data-id={`label.${name}.${id.toString()}`}
                >
                    {translate(translations.text)}
                </label>
            </div>
        )
    }
    
}

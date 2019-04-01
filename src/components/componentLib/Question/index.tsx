import * as React from 'react';
import { connect } from 'react-redux';

import { setQuestionAnswer } from '../../../store/actions';
import { IQuestion, IQuestionAnswer } from  '../../../shared/types';

import { translate } from '../../../helpers/translations';

import Checkbox from '../Checkbox';


export enum QuestionTypes {
    Checkbox
}

interface IPropsWithDispatch {
    dispatchSetQuestionAnswer: Function;
}

interface IQuestionProps extends IPropsWithDispatch {
    question: IQuestion;
    questionType: QuestionTypes;
}

const questions = {
    [QuestionTypes.Checkbox]: Checkbox
}


class UnconnectedQuestion extends React.PureComponent<IQuestionProps, {}> {
    inputRef = React.createRef<HTMLInputElement>();

    dispatchSetQuestionAnswer = (e: React.ChangeEvent<HTMLInputElement>): void => this.props.dispatchSetQuestionAnswer({
        id: this.props.question.id,
        answer: this.inputRef.current.checked
    });

    questionComponent = React.createElement(questions[this.props.questionType], {
        id: this.props.question.id,
        name: this.props.question.name,
        labelText: translate(this.props.question.translations.text),
        inputRef: this.inputRef,
        dispatchSetQuestionAnswer: this.dispatchSetQuestionAnswer
    });

    render (): React.ReactNode {
        return this.questionComponent;
    }
}


const mapDispatchToProps = (dispatch: Function) => ({
    dispatchSetQuestionAnswer: (questionAnswer: IQuestionAnswer) => dispatch(setQuestionAnswer(questionAnswer))
});

export default connect(
    null,
    mapDispatchToProps
)(UnconnectedQuestion);

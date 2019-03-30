import * as React from 'react';
import { connect } from 'react-redux';

import { setQuestionAnswer } from '../../../store/actions';
import { IQuestion, IQuestionAnswer } from '../../../shared/types';

import Checkbox from '../Checkbox';

export enum QuestionTypes {
    Checkbox
}

interface IQuestionProps {
    question: IQuestion;
    questionType: QuestionTypes;
    dispatchSetQuestionAnswer: Function;
}

const questions = {
    [QuestionTypes.Checkbox]: Checkbox
}

class UnconnectedQuestion extends React.PureComponent<IQuestionProps, {}> {
    render (): React.ReactNode {
        const {question, questionType, dispatchSetQuestionAnswer} = this.props;

        return React.createElement(questions[questionType], {
            question: question, 
            dispatchSetQuestionAnswer: dispatchSetQuestionAnswer
        })
    }

}

const matchDispatchToProps = (dispatch: Function) => ({
    dispatchSetQuestionAnswer: (questionAnswer: IQuestionAnswer) => dispatch(setQuestionAnswer(questionAnswer))
})

export default connect(null, matchDispatchToProps)(UnconnectedQuestion)
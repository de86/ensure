import * as React from 'react';
import { connect } from 'react-redux';

import { IQuestion, IAppState } from  '../../../shared/types';
import { QuestionTypes } from '../../../shared/enums';
import { QuestionIds } from '../../../../data/questionSets/car';

import { setQuestionAnswer } from '../../../store/actions';

import Checkbox from '../Checkbox';
import TextField from '../TextField';



interface IPropsFromState {
    question: IQuestion;
}

interface IPropsWithDispatch {
    dispatchSetQuestionAnswer: Function;
}

interface IOwnProps {
    questionId: QuestionIds;
}

type IQuestionProps = IPropsFromState & IPropsWithDispatch & IOwnProps

// Typed as any a TSLint unable to correctly infer type (??)
const questions: any = {
    [QuestionTypes.CHECKBOX]: Checkbox,
    [QuestionTypes.TEXT_FIELD]: TextField
}



class UnconnectedQuestion extends React.PureComponent<IQuestionProps, {}> {
    inputRef = React.createRef<HTMLInputElement>();

    dispatchSetQuestionAnswer = (e: React.ChangeEvent<HTMLInputElement>): void => this.props.dispatchSetQuestionAnswer({
        id: this.props.question.id,
        answer: this.inputRef.current.value
    });

    render (): React.ReactNode {
        const {question} = this.props;

        return React.createElement(questions[question.type], {
            question,
            inputRef: this.inputRef,
            dispatchSetQuestionAnswer: this.dispatchSetQuestionAnswer
        });
    }
}



const mapStateToProps = (state: IAppState, ownProps: IOwnProps) => ({
    question: state.questions[ownProps.questionId]
})

const mapDispatchToProps = (dispatch: Function) => ({
    dispatchSetQuestionAnswer: (questionAnswer: string) => dispatch(setQuestionAnswer(questionAnswer))
});

export default connect<IPropsFromState, IPropsWithDispatch, IOwnProps, IAppState>(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedQuestion);


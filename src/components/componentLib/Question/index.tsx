import * as React from 'react';
import { connect } from 'react-redux';

import { IQuestion, IAppState } from  '../../../shared/types';
import { QuestionTypes } from '../../../shared/enums';
import { QuestionIds } from '../../../../data/questionSets/car';

import { setQuestionAnswer } from '../../../store/actions';

import Checkbox from '../Checkbox';
import TextField from '../TextField';



// Typed as any a TSLint unable to correctly infer type (??)
const questions: any = {
    [QuestionTypes.CHECKBOX]: Checkbox,
    [QuestionTypes.TEXT_FIELD]: TextField
}



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

interface IQuestionState {
    value: string
}


class UnconnectedQuestion extends React.PureComponent<IQuestionProps, IQuestionState> {
    state: IQuestionState = {
        value: ''
    }

    inputRef = React.createRef<HTMLInputElement>();

    dispatchSetQuestionAnswer = (value: string): void => this.props.dispatchSetQuestionAnswer({
        id: this.props.question.id,
        answer: value
    });

    onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;

        this.setState({value})
        this.dispatchSetQuestionAnswer(value)
    }

    render (): React.ReactNode {
        const {question} = this.props;

        return React.createElement(questions[question.type], {
            question,
            inputRef: this.inputRef,
            onChangeHandler: this.onChangeHandler
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


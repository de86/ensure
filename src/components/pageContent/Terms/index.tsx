import * as React from 'react';
import { connect } from 'react-redux';

import questions from '../../../../data/questionSets/car';
import { IAppState, IPage } from '../../../shared/types';

import { translate } from '../../../helpers/translations';
import { setCurrentPage } from '../../../store/actions';


import Question, { QuestionTypes } from '../../componentLib/Question';

interface IPropsWithDispatch {
    dispatchSetCurrentPage: Function
}

interface IPropsFromState {
    currentPage: IPage,
    pageData: Record<string, IPage>
}

interface IOwnProps {
    setNavigationUrls: Function
};

interface ITermsProps extends IPropsFromState, IPropsWithDispatch, IOwnProps {}

class Terms extends React.PureComponent<ITermsProps, {}> {

    componentDidMount (): void {
        this.props.dispatchSetCurrentPage(this.props.pageData.terms)
    }

    render (): React.ReactNode {
        return (
            <React.Fragment>
                <h2>{translate('terms_conditions.page_header')}</h2>
                <div dangerouslySetInnerHTML={{__html: translate('terms_conditions.intro_text')}} />
                <Question
                    questionType={QuestionTypes.Checkbox}
                    question={questions[0]}
                />
            </React.Fragment>
        );
    }
}


const mapDispatchToProps = (dispatch: Function) => ({
    dispatchSetCurrentPage: (currentPageData: IPage) => dispatch(setCurrentPage(currentPageData))
});

const mapStateToProps = (state: IAppState) => ({
    pageData: state.pageData,
    currentPage: state.currentPage
});

export default connect<IPropsFromState, IPropsWithDispatch, IOwnProps, IAppState>(
    mapStateToProps,
    mapDispatchToProps
)(Terms);

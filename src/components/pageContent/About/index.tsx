import * as React from 'react';
import { connect } from 'react-redux';

import { QuestionIds } from '../../../../data/questionSets/car';
import { IAppState, IPage } from '../../../shared/types';

import { translate } from '../../../helpers/translations';
import { setCurrentPage } from '../../../store/actions';

import Question from '../../componentLib/Question';



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
        this.props.dispatchSetCurrentPage(this.props.pageData.about)
    }

    render (): React.ReactNode {
        return (
            <React.Fragment>
                <h2>{translate('about_you.page_header')}</h2>
                <Question questionId={QuestionIds.FirstName}/>
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

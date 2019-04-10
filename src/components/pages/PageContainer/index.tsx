import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState, IPage } from '../../../shared/types';
import { setCurrentPage } from '../../../store/actions';



interface IPropsWithDispatch {
    dispatchSetCurrentPage: Function
}

interface IPropsFromState {
    currentPage: IPage,
    pageData: Record<string, IPage>
}

interface IOwnProps {
    children: any;
}

type ITermsProps = IPropsFromState & IPropsWithDispatch & IOwnProps;



class PageContainer extends React.PureComponent<ITermsProps, {}> {

    render (): React.ReactNode {
        const {children, currentPage, pageData, dispatchSetCurrentPage} = this.props;

        return  React.createElement(children, {
            currentPage,
            pageData,
            dispatchSetCurrentPage
        });
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
)(PageContainer);

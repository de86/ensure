import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import pageData from '../../../data/pages/car';
import questions from '../../../data/questionSets/car';

import { IAppState, ILang, IPage } from '../../shared/types';

import { setLang, setPageData, getAllQuestions } from '../../store/actions';

import Terms from '../pages/Terms';
import About from '../pages/About';
import YourVehicle from '../pages/YourVehicle';

interface IPropsFromState {
    currentPage: IPage
}

interface IPropsWithDispatch {
    dispatchSetLang: Function
    dispatchSetPageData: Function
    dispatchGetAllQuestions: Function
}

interface IMainLayoutProps extends IPropsFromState, IPropsWithDispatch {}

interface IMainLayoutState {
    isLoading: boolean
}


class MainLayout extends React.PureComponent<IMainLayoutProps, IMainLayoutState> {

    state: IMainLayoutState = {
        isLoading: true
    }

    fetchInitialAppData = () => {
        return Promise.all([
            this.props.dispatchSetLang('en'),
            this.props.dispatchSetPageData(pageData),
            this.props.dispatchGetAllQuestions(questions)
        ]);
    }

    componentDidMount (): void {
        this.setState({isLoading: true});

        this.fetchInitialAppData()
            .then(() => this.setState({isLoading: false}));
    }

    render (): React.ReactNode {
        const {currentPage} = this.props;
        const {isLoading} = this.state;

        if (isLoading) {
            return <h2>Loading ...</h2>
        } else {
            return (
                <div>
                    <h1>Ensuro</h1>
                    <h2>{currentPage.name}</h2>
    
                    <div>
                        <Link to="/">Terms</Link>
                        <Link to="/about-you">About You</Link>
                        <Link to="/your-vehicle">YourVehicle</Link>
                    </div>
    
                    <Route path="/" exact component={Terms} />
                    <Route path="/about-you" exact component={About} />
                    <Route path="/your-vehicle" exact component={YourVehicle} />
    
                    <div>
                        {currentPage.prevPageSlug && <Link to={currentPage.prevPageSlug}>prev</Link>}
                        {currentPage.nextPageSlug && <Link to={currentPage.nextPageSlug}>next</Link>}
                    </div>
    
                    <footer>
                        <h3>Copyright Ensuro</h3>
                    </footer>
                </div>
            )
        }
    }
}


const mapStateToProps = (state: IAppState) => ({
    currentPage: state.currentPage
})

// Todo: Type things properly here
const mapDispatchToProps = (dispatch: Function) => ({
    dispatchSetLang: (locale: string) => dispatch(setLang(locale)),
    dispatchSetPageData: (pageData: any) => dispatch(setPageData(pageData)),
    dispatchGetAllQuestions: (questions: any) => dispatch(getAllQuestions(questions))
})

export default connect<IPropsFromState, IPropsWithDispatch, {}, IAppState>(
    mapStateToProps,
    mapDispatchToProps
)(MainLayout);

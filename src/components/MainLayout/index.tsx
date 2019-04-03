import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import pageData from '../../../data/pages/car';

import { IAppState, IPage } from '../../shared/types';

import api from '../../services/api';
import { setLang, setPageData } from '../../store/actions';

import Terms from '../pageContent/Terms';
import AboutYou from '../pageContent/AboutYou';
import YourVehicle from '../pageContent/YourVehicle';

interface IPropsFromState {
    currentPage: IPage
}

interface IPropsWithDispatch {
    dispatchSetLang: Function
    dispatchSetPageData: Function
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
        this.setState({isLoading: true});

        this.props.dispatchSetPageData(pageData);

        api.getLang('en')
           .then(lang => {
               this.props.dispatchSetLang(lang);
               this.setState({isLoading: false});
           });
    }

    componentDidMount (): void {
        this.fetchInitialAppData();
    }

    render (): React.ReactNode {
        console.log('MainLayout: Render');
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
                    <Route path="/about-you" exact component={AboutYou} />
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

// Todo: Type setLand and setPageData properly
const mapDispatchToProps = (dispatch: Function) => ({
    dispatchSetLang: (lang: any) => dispatch(setLang(lang)),
    dispatchSetPageData: (pageData: any) => dispatch(setPageData(pageData))
})

export default connect<IPropsFromState, IPropsWithDispatch, {}, IAppState>(
    mapStateToProps,
    mapDispatchToProps
)(MainLayout);

import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import pageData from '../../../data/pages/car';

import { IAppState } from '../../shared/types';

import api from '../../services/api';
import { setCurrentPage, setLang, setPageData } from '../../store/actions';

import Terms from '../pageContent/Terms';
import AboutYou from '../pageContent/AboutYou';
import YourVehicle from '../pageContent/YourVehicle';

interface IPropsFromState {
    currentPage: string
}

interface IPropsWithDispatch {
    dispatchSetCurentPage: Function
    dispatchSetLang: Function
    dispatchSetPageData: Function
}

interface IMainLayoutProps extends IPropsFromState, IPropsWithDispatch {}

interface IMainLayoutState {
    isLoading: boolean
}


class UnconnectedMainLayout extends React.PureComponent<IMainLayoutProps, IMainLayoutState> {

    state: IMainLayoutState = {
        isLoading: true
    }

    onClickNext = (e: React.MouseEvent): void => {
        this.props.dispatchSetCurentPage('test');
    }

    // Should probably move this to App.tsx
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
                    <h2>{currentPage}</h2>
    
                    <div>
                        <Link to="/">Terms</Link>
                        <Link to="/about-you">About You</Link>
                        <Link to="/your-vehicle">YourVehicle</Link>
                    </div>
    
                    <Route path="/" exact component={Terms} />
                    <Route path="/about-you" exact component={AboutYou} />
                    <Route path="/your-vehicle" exact component={YourVehicle} />
    
                    <div>
                        <div>prev</div>
                        <div onClick={this.onClickNext}>next</div>
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
    dispatchSetCurentPage: (pageName:string) => dispatch(setCurrentPage(pageName)),
    dispatchSetLang: (lang: any) => dispatch(setLang(lang)),
    dispatchSetPageData: (pageData: any) => dispatch(setPageData(pageData))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedMainLayout);

import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { IAppState } from '../../shared/types';

import api from '../../services/api';
import { setCurrentPage, getLang } from '../../store/actions';

import Terms from '../pageContent/Terms';
import AboutYou from '../pageContent/AboutYou';
import YourVehicle from '../pageContent/YourVehicle';

interface IPropsFromState {
    currentPage: string
}

interface IPropsWithDispatch {
    dispatchSetCurentPage: Function
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

    componentDidMount (): void {
        api.getLang('en')
            .then(lang => console.log(lang));
    }

    render (): React.ReactNode {
        const {currentPage} = this.props;

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


const mapStateToProps = (state: IAppState) => ({
    currentPage: state.currentPage
})

const mapDispatchToProps = (dispatch: Function) => ({
    dispatchSetCurentPage: (pageName:string) => dispatch(setCurrentPage(pageName))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedMainLayout);

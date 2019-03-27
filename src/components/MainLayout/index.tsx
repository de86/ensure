import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { IAppState } from '../../store/reducers';
import { setCurrentPage } from '../../store/actions';

import Terms from '../pageContent/Terms';
import AboutYou from '../pageContent/AboutYou';
import YourVehicle from '../pageContent/YourVehicle';

interface IPropsFromState {
    currentPage: string
}

interface IPropsWithDispatch {
    setCurentPage: Function
}

interface IMainLayoutProps extends IPropsFromState, IPropsWithDispatch {}

class UnconnectedMainLayout extends React.PureComponent<IMainLayoutProps, {}> {
    
    // Check how to bind automatically
    onClickNext = (e: React.MouseEvent): void => {
        this.props.setCurentPage('test');
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
    setCurentPage: (pageName:string) => dispatch(setCurrentPage(pageName))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedMainLayout);

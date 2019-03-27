import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import MainLayout from './MainLayout';

export default class App extends React.PureComponent<{}, {}> {
    render(): React.ReactNode {
        return (
            <Provider store={store}>
                <Router>
                    <MainLayout />
                </Router>
            </Provider>
        )
    }
}

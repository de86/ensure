import * as React from 'react';

import { IPage } from '../../../shared/types';

import PageContainer from '../PageContainer';
import AboutView from './AboutView';



interface ITermsProps {
    currentPage: IPage;
    pageData: Record<string, IPage>;
    dispatchSetCurrentPage: Function;
};



export default class About extends React.PureComponent<ITermsProps, {}> {

    render(): React.ReactNode {
        return (
            <PageContainer children={AboutView}/>
        )
    }
}

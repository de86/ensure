import * as React from 'react';

import { IPage } from '../../../shared/types';

import PageContainer from '../PageContainer';
import TermsView from './TermsView';



interface ITermsProps {
    currentPage: IPage;
    pageData: Record<string, IPage>;
    dispatchSetCurrentPage: Function;
};



export default class Terms extends React.PureComponent<ITermsProps, {}> {

    render(): React.ReactNode {
        return (
            <PageContainer children={TermsView}/>
        )
    }
}

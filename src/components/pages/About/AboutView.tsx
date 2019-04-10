import * as React from 'react';

import { IPage } from '../../../shared/types';

import { QuestionIds } from '../../../../data/questionSets/car';

import { translate } from '../../../helpers/translations';

import Question from '../../componentLib/Question';



interface ITermsProps {
    currentPage: IPage;
    pageData: Record<string, IPage>;
    dispatchSetCurrentPage: Function
};



export default class AboutView extends React.PureComponent<ITermsProps, {}> {

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
};

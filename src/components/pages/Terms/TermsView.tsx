import * as React from 'react';

import { IPage } from '../../../shared/types';

import { QuestionIds } from '../../../../data/questionSets/car';

import { translate } from '../../../helpers/translations';

import Question from '../../componentLib/Question';



interface ITermsViewProps {
    currentPage: IPage;
    pageData: Record<string, IPage>;
    dispatchSetCurrentPage: Function;
};



export default class TermsView extends React.PureComponent<ITermsViewProps>  {
    componentDidMount (): void {
        this.props.dispatchSetCurrentPage(this.props.pageData.terms)
    }
    
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <h2>{translate('terms_conditions.page_header')}</h2>
                <div dangerouslySetInnerHTML={{__html: translate('terms_conditions.intro_text')}} />
                <Question questionId={QuestionIds.Confirm} />
            </React.Fragment>
        )
    }
};

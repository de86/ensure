import * as React from 'react';

import {translate} from '../../../helpers/translations';
import questions from '../../../../data/questionSets/car';

import Question, { QuestionTypes } from '../../componentLib/Question';

export default class Terms extends React.PureComponent<{}, {}> {
    render (): React.ReactNode {
        return (
            <React.Fragment>
                <h2>{translate('terms_conditions.page_header')}</h2>
                <div dangerouslySetInnerHTML={{__html: translate('terms_conditions.intro_text')}} />
                <Question
                    questionType={QuestionTypes.Checkbox}
                    question={questions[0]}
                />
            </React.Fragment>
        );
    }
}

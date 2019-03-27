import * as React from 'react';

// Refactor translations and questions
// translations should come from server
// questions can be loaded with app on initial request
import {translate} from '../../../helpers/translations';
import questions from '../../../questionSets/car/questions';

import Checkbox from '../../componentLib/Checkbox.tsx';

export default class UnconnectedTerms extends React.PureComponent<{}, {}> {
    render (): React.ReactNode {
        return (
            <React.Fragment>
                <h2>{translate('terms_conditions.page_header')}</h2>
                <div dangerouslySetInnerHTML={{__html: translate('terms_conditions.intro_text')}} />
                <Checkbox question={questions[0]} />
            </React.Fragment>
        );
    }
}

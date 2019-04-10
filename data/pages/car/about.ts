import { QuestionIds } from '../../questionSets/car';
import { IPage } from '../../../src/shared/types';

const aboutPage: IPage = {
    name: 'about',
    questionIds: [
        QuestionIds.FirstName,
        QuestionIds.LastName,
        QuestionIds.Dob
    ],
    nextPageSlug: 'your-vehicle',
    prevPageSlug: '/'
};

export default aboutPage;

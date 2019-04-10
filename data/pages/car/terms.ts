import { QuestionIds } from '../../questionSets/car';
import { IPage } from '../../../src/shared/types';

const termsPage: IPage = {
    name: 'terms',
    questionIds: [QuestionIds.Confirm],
    nextPageSlug: 'about-you',
    prevPageSlug: null
};

export default termsPage;

import { translate } from '../translations';


describe('src/helpers/translations', () => {
    it('translate() should return the correct transltion string given a translation key', () => {
        let translationKey = 'base.navigation_prev';
        let expectedTranslation = 'back';
    
        expect(translate(translationKey)).toBe(expectedTranslation);

        translationKey = 'questions.first_name.text';
        expectedTranslation = 'What is your first name?';

        expect(translate(translationKey)).toBe(expectedTranslation);
    });

    it('translate() should return the missing translation string when the given key does not exist', () => {
        let translationKey = 'test.nonexistent.key';
        let expectedTranslation = `__TRANSLATION_KEY_${translationKey}_NOT_FOUND__`;
    
        expect(translate(translationKey)).toBe(expectedTranslation);
    })
})

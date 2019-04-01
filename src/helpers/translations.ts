// const translations = require('../../data/translations/en.json');
import store from '../store';

/** @function getTranslation
 * 
 * Retrieve the translation string of the given translation key
 * 
 * @param {string} key The translation key of the text to retrieve
 */
export function translate(key: string): string {
    const translations = store.getState().lang.translations;
    const keys = key.split('.');
    
    let translation = `__TRANSLATION_KEY_${key}_NOT_FOUND__`;
    const stack: Record<string, object>[] = [translations];

    for (let i = 0; i < keys.length; i++) {
        try {
            const result = stack[i][keys[i]];

            if (typeof result === 'string') {
                translation = result;
            } else (
                stack.push(result as Record<string, object>)
            );
        } catch (e) {
            console.log(e);

            return translation;
        }
    }

    return translation
}

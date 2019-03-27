const translations = require('../../data/translations/en.json');

/** @function getTranslation
 * 
 * Retrieve the translation string of the given translation key
 * 
 * @param {string} key The translation key of the text to retrieve
 */
export function translate(key: string): string {
    const keys = key.split('.');
    
    let translation = `__TRANSLATION_KEY_${key}_NOT_FOUND__`
    const stack: Record<string, object>[] = [translations];

    for (let i = 0; i < keys.length; i++) {
        // undefined after first fo round
        const result = stack[i][keys[i]];

        if (!result) {
            return translation;
        } else if (typeof result === 'string') {
            translation = result;
        } else (
            stack.push(result as Record<string, object>)
        );
    }

    return translation
}

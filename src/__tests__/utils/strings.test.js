import * as string from 'utils/string';

describe('string - utils', () => {
    it('capitalizeFirstLetter', () => {
        expect(string.capitalizeFirstLetter('test')).toBe('Test');
    });
});

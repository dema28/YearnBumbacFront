import { expect, test, describe } from 'vitest';
import {useInputUserName} from '../useInputUserName';

describe('useInputUserName', () => {
    test('default name', () => {
        expect(useInputUserName()).toBe('John');
    });

    test('name from argument', () => {
        const name = 'Mirinda';

        expect(useInputUserName(name)).toBe(name);
    });
});

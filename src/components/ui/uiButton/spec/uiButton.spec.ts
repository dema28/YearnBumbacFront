import {describe, test, expect} from 'vitest';
import {mount} from '@vue/test-utils';
import UiButton from '../UiButton.vue';

describe('UIButton', () => {
    test('mount', () => {
        const element = mount(UiButton, {
            slots: {
                default: 'Click me!',
            },
        });

        expect(element.html()).toBe('<button class="ui-button">Click me!</button>');
    });

    test('props disabled', () => {
        const element = mount(UiButton, {
            props: {
                disabled: true,
            }
        });

        expect(element.classes()).contain('ui-button--disabled');
        expect(element.attributes()).toHaveProperty('disabled');
    });
});

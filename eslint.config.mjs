// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    {
        files: ['*.ts', './src/**/*.ts', './src/**/*.tsx', './src/**/*.vue', '*.mjs'],
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            indent: [
                'error', 4, {
                    SwitchCase: 1,
                },
            ],
        }
    },
    {
        files: ['./src/**/*.vue'],
        rules: {
            'vue/max-attributes-per-line': [
                'error', {
                    singleline: 1,
                    multiline: 1,
                },
            ],
            'vue/html-indent': ['error', 4],
            'vue/html-self-closing': [
                'error', {
                    html: {
                        component: 'always',
                        normal: 'never',
                        void: 'never',
                    },
                    math: 'always',
                    svg: 'always',
                },
            ],
            'vue/first-attribute-linebreak': [
                'error', {
                    singleline: 'beside',
                    multiline: 'below',
                },
            ],
            indent: 'off',
            'vue/script-indent': [
                'error', 4, {
                    baseIndent: 1,
                    switchCase: 1,
                },
            ],
            'vue/multi-word-component-names': 'off',
            'vue/no-multiple-template-root': 'off',
            'vue/no-reserved-component-names': [
                'error', {
                    disallowVueBuiltInComponents: true,
                    disallowVue3BuiltInComponents: true,
                },
            ],
            'vue/require-name-property': 'error',
            'vue/match-component-file-name': [
                'error', {
                    extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
                    shouldMatchCase: true,
                },
            ],
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    'singleline': 'never',
                    'multiline': 'always',
                    'selfClosingTag': {
                        'singleline': 'never',
                        'multiline': 'always'
                    }
                }
            ]
        }
    },
);
// .override('nuxt/typescript', {
//     rules: {
//         'indent': 'off',
//     }
// })

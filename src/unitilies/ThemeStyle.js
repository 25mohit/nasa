import { Theme } from './Theme';

export const ThemeStyles = {
    mainBD:{
        background: Theme() === 'dark' ? 'var(--primary-color-dark)' : 'var(--primary-color-light)',
    },
    text: {
          color: Theme() === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
        },
    resultCard:{
        color: Theme() === 'dark' ? 'var(--text-color-dark)' : 'var(--text-color-light)',
        boxShadow: Theme() === 'dark' ? '' : 'var(--box-shadow-light)',
    }
}
import { CURRENCY } from './config.mjs';

export const formatPrice = (amount) => {
    return `${CURRENCY} ${amount.toFixed(2)}`;
};
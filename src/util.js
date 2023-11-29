export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
};

export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
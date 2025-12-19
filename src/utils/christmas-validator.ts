export default function isBetweenNovAndDec(date: Date = new Date()): boolean {
    const month = date.getMonth();
    const day = date.getDate();

    if (month === 10) {
        return day >= 1;
    }

    if (month === 11) {
        return day <= 31;
    }

    return false;
}
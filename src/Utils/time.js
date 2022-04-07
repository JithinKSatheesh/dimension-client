export const formatDate = (date) => {

    const _date = new Date(date)

    return `${('0' + _date.getDate()).slice(-2)}.${('0' + (_date.getMonth() + 1)).slice(-2)}.${_date.getFullYear()}`
}

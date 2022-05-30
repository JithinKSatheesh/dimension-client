export const formatDate = (date, time = true) => {

    const _date = new Date(date)

    return `${('0' + _date.getDate()).slice(-2)}.${('0' + (_date.getMonth() + 1)).slice(-2)}.${_date.getFullYear()}${time ? `, ${_date.getHours()}:${_date.getMinutes()}` : ''}`
}

export const getMonth = (date) => {
    const _months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const _date = new Date(date)
    return _months[_date.getMonth()]
}
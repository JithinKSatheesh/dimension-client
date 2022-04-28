export const formatDate = (date) => {

    const _date = new Date(date)

    return `${('0' + _date.getDate()).slice(-2)}.${('0' + (_date.getMonth() + 1)).slice(-2)}.${_date.getFullYear()}, ${_date.getHours()}:${_date.getMinutes()}`
}

export const getMonth = (date) => {
    const _months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const _date = new Date(date)
    return _months[_date.getMonth()]
}
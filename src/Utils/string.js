export const truncate = (text, n = 100) => {

    const _txt = `${text}`
    const _txt_len = _txt.length

    let new_txt = _txt

    if (_txt_len > n) {
        new_txt = `${_txt.substring(0, n)}...`
    }

    return new_txt
}

export const isEmpty = (obj) => {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
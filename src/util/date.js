function DateParse (date) {
    const theDate = date.split('-')
    const newMonth = function(date) {
        switch(date) {
            case '01':
                return 'Jan'
            case '02':
                return 'Feb'
            case '03':
                return 'Mar'
            case '04':
                return 'Apr'
            case '05':
                return 'May'
            case '06':
                return 'Jun'
            case '07':
                return 'Jul'
            case '08':
                return 'Aug'
            case '09':
                return 'Sep'
            case '10':
                return 'Oct'
            case '11':
                return 'Nov'
            case '12':
                return 'Dec'
            default:
                return ''
        }
    }

    let month = newMonth(theDate[1])
    let newDate = month + ' ' +theDate[0]
    return newDate.trim()
}

export default DateParse
class DateConverter {
    
    constructor(dateObj) {
        return new Date(
            `${dateObj.getYear()}-${dateObj.getMonth()+1}-${dateObj.getDate()}   
             ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
        )
    }
}

module.exports = DateConverter;
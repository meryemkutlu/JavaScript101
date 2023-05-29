const date = new Date();

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDay(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()


let days = [
    'pazar',
    'pazarteşi',
    'salı',
    'çarşamba',
    'perşembe',
    'cuma',
    'cumartesi'
]

let months = [
    'ocak',
    'şubat',
    'mart',
    'nisan',
    'mayıs',
    'haziran',
    'temmuz',
    'agustos',
    'eylül',
    ' ekim',
    'kasım',
    'aralık'
]
let humunReasableDate = `${day} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second} `
console.log(humunReasableDate);
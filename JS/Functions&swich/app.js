

function sum(a = 0, b = 0) {
    var total = a + b
    return total
}
var total = sum(30, 20)

function showStatusMsg(status) {
    var msgToShow = ''
    switch (status) {
        case 'pending':
            msgToShow = "Your App will be reviewed soon."
            break;
        case 'approve':
            msgToShow = "Congrats!. Your app is approved."
            break;
        case 'review':
            msgToShow = "Your App is in review."
            break;
        case 'reject':
            msgToShow = "Your App is  rejected.Plz fix the issues and submit again."
            break;
        default:
            msgToShow = "Your App will be reviewed soon."
            break;
    }

    return msgToShow
}

console.log(showStatusMsg('reject'))

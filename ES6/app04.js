//Named Parameter Function
function logActivity(fname = "Ajay", activity = "ice creams") {
    console.log(`${fname} loves ${activity}`)
}
var chk
logActivity()
logActivity( "Vijay")
logActivity(chk, "Coffee")
//logActivity(undefined, "Coffee")
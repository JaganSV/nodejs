//Anonymous Function
const logActivity = function(fname = "Ajay", activity = "ice creams") {
    console.log(`${fname} loves ${activity}`)
}

logActivity()
logActivity( "Vijay")

logActivity( undefined, "coffee")


//Anonymous Function with Lambda
const logActivity = (fname = "Ajay", activity = "ice creams") => {
    console.log(`${fname} loves ${activity}`)
}

logActivity()
logActivity( "Vijay")

logActivity( undefined, "coffee")
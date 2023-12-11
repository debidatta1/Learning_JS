const accountId = 144553

//can't be re-assigned a value and can't be declared again  (block scope)


let accountEmail = "hitesh@google.com"

//can be re-assigned a value but can't be declared again (block scope)


var accountPassword = "12345"

/*
it can be re-assigned a value and it can also be declared again  (Global scope)
(Prefer not to use var because of issue in block scope and functional scope)
*/

accountCity = "Jaipur"

//in javascript we can declare variables directly without any syntax but this is wrong)


let accountState;

//(here in the let variable the value is not assigned)





console.log(accountId);

//(console.log used to run the code and print the output)


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
(console.table used to print multiple output in a table structure)
# console.table([group of variables you want to show in tabular form])
*/
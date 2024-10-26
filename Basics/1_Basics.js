const accountId = 123456
let accountEmail = "KingTchalla@gmail.com"
var accountPassword = "1232121"
accountCity = "Ajmer";
let accounState; // This Variable is undefined, Because Declared but not used;

// {This Two Curly Braces Defines Scope}


// accountId = 2 // Not allowed Because of Constant;
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accounState]);

/*
Prefer not to use Var
because of issue in block scope and functional scope

*/
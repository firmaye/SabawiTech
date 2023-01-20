const emailValidator = require('deep-email-validator');


exports.isEmailValid=(email)=>{
	return emailValidator.validate(email)	
}


// async function isEmailValid(email) {
//   return emailValidator.validate(email)
// }
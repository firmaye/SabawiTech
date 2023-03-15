const AdminBro = require('admin-bro');
const { CoverLetter } = require('./coverLetter.model');


const options = {
	listProperties: ['sender', 'intPostName','receiverCompany','createdAt'],
	properties:{
		intPostId:{
			isVisible:false
		},
		isDeleted:{
			isVisible:false
		},
		createdAt:{
			isVisible:false
		},
		updatedAt:{
			isVisible:false
		},
		deletedAt:{
			isVisible:false
		}
	}
};

module.exports = {
  options,
  resource: CoverLetter,
};

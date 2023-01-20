const AdminBro = require('admin-bro');
const { CoverLetter } = require('./coverLetter.model');


const options = {
	properties:{
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

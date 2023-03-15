const AdminBro = require('admin-bro');
const { User } = require('./user.model');


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
		},
    password:{
      isVisible:false
    },
    profilePhoto:{
      isVisible:false
    },
		titleOverview:{
            type: 'richtext'
		}
	}, 
	locale: {
    translations: {
      labels: {
        User: 'User Management'
      }
    }
  },
};

module.exports = {
  options,
  resource: User,
};

const AdminBro = require('admin-bro');
const { User } = require('./user.model');


const options = {
	properties:{
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

const AdminBro = require('admin-bro');
const { Company } = require('./company.entity');


const options = {
  parent:{
    name:"Admin Content",
    icon:'fas fa-cogs'
  },
  properties: {
    encryptedPassword: {
      isVisible: false,
    },
    password: {
      type: 'password',
    },
  },
};

module.exports = {
  options,
  resource: Company,
};

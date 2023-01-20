const AdminBro = require('admin-bro');
const { AdminUsers } = require('./company.entity');

const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require('./actions/password.hook');


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
  actions: {
    new: {
      after: passwordAfterHook,
      before: passwordBeforeHook,
    },
    edit: {
      after: passwordAfterHook,
      before: passwordBeforeHook,
    },
  },
};

module.exports = {
  options,
  resource: AdminUsers,
};

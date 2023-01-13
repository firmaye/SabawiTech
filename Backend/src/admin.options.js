const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companies/company.admin');
const Blog = require('./blogs/blog.options')
const User = require('./user/user.options')

const Internship  = require('./internship/internship.options')
const CoverLetter  = require('./coverLetter/coverLetter.options')

const options = {
    resources: [AdminCompany, User, Blog,Internship, CoverLetter ],
    branding: {
        companyName:"ProTalent",
        logo: "https://sabawitech.com/assets/img/sabawi.png",
        softwareBrothers: false,
        },
        
        dashboard: {
            handler: async () => {
            },
            component: AdminBro.bundle('./components/dashboard'),
        },
};

module.exports = options;
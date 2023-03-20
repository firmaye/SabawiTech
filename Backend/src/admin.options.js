const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companies/company.admin');
const Blog = require('./blogs/blog.options')
const User = require('./user/user.options')
const Report=require('./report/report.options')

const Internship  = require('./internship/internship.options')
const CoverLetter  = require('./coverLetter/coverLetter.options')
const options = { 
    resources: [AdminCompany, User, Blog,Internship,Report, CoverLetter ],
    branding: {
        companyName:"Intrant",
        logo: "https://sabawitech.com/assets/img/sabawi.png",
        softwareBrothers: false,
        colors: {
            primary: '#6B338B',
        },
        },
        
        dashboard: {
            handler: async () => {
            },
            component: AdminBro.bundle('./components/dashboard'),
        },
    locale: {
        translations: {
            messages: {
                loginWelcome: 'Please Login to access the admin site' // the smaller text
            },
        labels: {
            loginWelcome: 'INTRANT', // this could be your project name
        },
    }
},
};

module.exports = options;
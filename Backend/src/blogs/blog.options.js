const AdminBro = require('admin-bro');
const { Blog } = require('./blog.model')


const {
    after: uploadAfterHook,
    before: uploadBeforeHook,
} = require('./actions/upload-image.hook');


const options = {
    listProperties: ['blogTitle','blogTag','createdAt'],
    properties: {
        blogImage: {
            isVisible: false,
        },
        isDeleted: {
            isVisible: false,
        },
        deletedAt: {
            isVisible: false,
        },
        updatedAt: {
            isVisible: false,
        },
        createdAt: {
            isVisible: false,
        },
        blogDescription: {
            type: 'richtext'
        },
        uploadImage: {
            components: {
                edit: AdminBro.bundle('./components/upload-image.edit.tsx'),
                list: AdminBro.bundle('./components/upload-image.list.tsx'),
            },
        },
    },
    actions: {
        new: {
            after: async(response, request, context) => {
                return uploadAfterHook(response, request, context);
            },
            before: async(request, context) => {
                return uploadBeforeHook(request, context);
            },
        },
        edit: {
            after: async(response, request, context) => {
                return uploadAfterHook(response, request, context);
            },
            before: async(request, context) => {
                return uploadBeforeHook(request, context);
            },
        },
        show: {
            isVisible: false,
        },
    },
};

module.exports = {
    options,
    resource: Blog,
};
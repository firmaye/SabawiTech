const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');
const mv = require('mv');


const after = async (response, request, context) => {
  const { record, uploadImage } = context;

  if (record.isValid() && uploadImage) {
    const filePath = path.join('uploads', record.id().toString(), uploadImage.name);
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

    mv(uploadImage.path, filePath, function (err) {
        if (err) {
            console.log('> FileServer.jsx | route: "/files/upload" | err:', err);
            throw err;
        }
    });
    await record.update({ blogImage: `/${filePath}` });
  }
  return response;
};



const before = async (request, context) => {
  if (request.method === 'post') {
    const { uploadImage, ...otherParams } = request.payload;
    context.uploadImage = uploadImage;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };

const { default: AdminBro } = require('admin-bro');
const { buildAuthenticatedRouter } = require('admin-bro-expressjs');
const express = require('express');
const argon2 = require('argon2');
const mongoose = require('mongoose');
const session = require('express-session');
const { AdminUsers } = require('./companies/company.entity');


const buildAdminRouter = (admin) => {
  const router = buildAuthenticatedRouter(admin, {
    cookieName: 'intrant-sabawi',
    cookiePassword: 'superlongandcomplicatedname',
    authenticate: async (email, password) => {
      const adminUsers = await AdminUsers.findOne({ email });

      if (adminUsers && await argon2.verify(adminUsers.encryptedPassword, password)) {
        return adminUsers.toJSON();
      }
      return null;
    },
  }, null, {
    resave: false,
    saveUninitialized: true,
  });
  return router;
};

module.exports = buildAdminRouter;

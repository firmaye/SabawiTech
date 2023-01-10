const { default: AdminBro } = require('admin-bro');
const { buildRouter } = require('admin-bro-expressjs');
const express = require('express');
const argon2 = require('argon2');
const mongoose = require('mongoose');
const session = require('express-session');
const { Company } = require('./companies/company.entity');


const buildAdminRouter = (admin) => {
  const router = buildRouter(admin);
  return router;
};

module.exports = buildAdminRouter;

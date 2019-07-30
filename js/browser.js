'use strict';

const contexts = exports.contexts = new Map();
const constants = exports.constants = require('./constants.js');

contexts.set(
  constants.CREDENTIALS_CONTEXT_V1_URL,
  require('../contexts/credentials-v1.jsonld'));

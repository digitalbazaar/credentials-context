/*!
 * Copyright (c) 2021-2023 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const contextV1 = require('./context-v1');
const contextV2 = require('./context-v2');
const constants = require('./constants');
const {documentLoader} = require('./documentLoader');
const {
  CREDENTIALS_CONTEXT_V1_URL,
  CREDENTIALS_CONTEXT_V2_URL,
  CONTEXT_URL
} = constants;

const contexts = new Map();
contexts.set(constants.CREDENTIALS_CONTEXT_V1_URL, contextV1);
contexts.set(constants.CREDENTIALS_CONTEXT_V1_URL, contextV2);

module.exports = {
  constants,
  contexts,
  documentLoader,
  CREDENTIALS_CONTEXT_V1_URL,
  CREDENTIALS_CONTEXT_V2_URL,
  CONTEXT_URL_V1: CREDENTIALS_CONTEXT_V1_URL,
  CONTEXT_URL_V2: CREDENTIALS_CONTEXT_V2_URL,
  CONTEXT_URL,
  CONTEXT_V1: contextV1,
  CONTEXT_V2: contextV2,
  CONTEXT: contextV1
};

/*!
 * Copyright (c) 2021-2023 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {
  CREDENTIALS_CONTEXT_V1_URL,
  CREDENTIALS_CONTEXT_V2_URL
} = require('./constants');
const contextV1 = require('./context-v1');
const contextV2 = require('./context-v2');

module.exports = {
  documentLoader(url) {
    let context;
    if(url === CREDENTIALS_CONTEXT_V1_URL) {
      context = contextV1;
    } else if(url === CREDENTIALS_CONTEXT_V2_URL) {
      context = contextV2;
    } else {
      throw new Error(`Loading document "${url}" is not allowed.`);
    }

    return {
      contextUrl: null,
      document: context,
      documentUrl: url
    };
  }
};

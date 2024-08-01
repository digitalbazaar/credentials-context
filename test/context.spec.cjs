/*!
 * Copyright (c) 2021-2024 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts,
  metadata,
  named
} = require('../dist/main.cjs');
const {
  tests
} = require('./context.common.cjs');

describe('Context (require)', () => {
  tests({contexts, metadata, named, expect});
});

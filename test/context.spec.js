/*!
 * Copyright (c) 2021-2024 Digital Bazaar, Inc. All rights reserved.
 */
import chai from 'chai';
chai.should();
const {expect} = chai;

import {
  contexts,
  metadata,
  named
} from '../lib/index.js';
import {
  tests
} from './context.common.cjs';

describe('Context (import)', () => {
  tests({contexts, metadata, named, expect});
});

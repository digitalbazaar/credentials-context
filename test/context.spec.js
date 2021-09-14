/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const {
  contexts, constants, CONTEXT_URL_V1, CONTEXT
} = require('..');

describe('Example Context', () => {
  it('constants', async () => {
    expect(constants).to.exist;
    expect(CONTEXT_URL_V1).to.exist;
    expect(CONTEXT).to.exist;
  });

  it('contexts', async () => {
    expect(contexts.get(CONTEXT_URL_V1)).to.have.property('@context');
  });
});

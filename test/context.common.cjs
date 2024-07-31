/*!
 * Copyright (c) 2021-2024 Digital Bazaar, Inc. All rights reserved.
 */
module.exports.tests = function({contexts, contextsMetadata, expect}) {
  it('contexts', async () => {
    expect(contextsMetadata).to.exist;
    expect(contextsMetadata.size).to.equal(3);
  });

  it('contextsMetadata', async () => {
    expect(contextsMetadata).to.exist;
    expect(contextsMetadata.size).to.equal(3);
  });

  it('contents', async () => {
    const ids = [
      'https://www.w3.org/ns/credentials/undefined-terms/v2',
      'https://www.w3.org/2018/credentials/v1',
      'https://www.w3.org/ns/credentials/v2'
    ];

    for(const id of ids) {
      expect(contexts.has(id)).to.be.true;
      expect(contextsMetadata.has(id)).to.be.true;
      const cctx = contexts.get(id);
      const mctx = contextsMetadata.get(id);
      expect(cctx).to.have.property('@context');
      expect(mctx.id).to.equal(id);
      expect(cctx).to.deep.equal(mctx.context);
    }
  });
};

/*!
 * Copyright (c) 2021-2024 Digital Bazaar, Inc. All rights reserved.
 */
import undefinedTermsV2Context from './undefined-terms-v2.js';
import v1Context from './v1.js';
import v2Context from './v2.js';

// map of context id to context
export const contexts = new Map();
// map of context id to context metadata
export const contextsMetadata = new Map();

function setExportsFromMetadata({contexts, contextsMetadata, metadata}) {
  contexts.set(metadata.id, metadata.context);
  contextsMetadata.set(metadata.id, metadata);
}

setExportsFromMetadata({contexts, contextsMetadata, metadata: {
  //'@ontext': 'https://w3id.org/json-ld/contexts/v1',
  id: 'https://www.w3.org/ns/credentials/undefined-terms/v2',
  type: 'ContextMetadata',
  url: new URL('../contexts/undefined-terms-v2.jsonld', import.meta.url),
  context: undefinedTermsV2Context
}});
setExportsFromMetadata({contexts, contextsMetadata, metadata: {
  //'@ontext': 'https://w3id.org/json-ld/contexts/v1',
  id: 'https://www.w3.org/2018/credentials/v1',
  type: 'ContextMetadata',
  url: new URL('../contexts/v1.jsonld', import.meta.url),
  context: v1Context
}});
setExportsFromMetadata({contexts, contextsMetadata, metadata: {
  //'@ontext': 'https://w3id.org/json-ld/contexts/v1',
  id: 'https://www.w3.org/ns/credentials/v2',
  type: 'ContextMetadata',
  url: new URL('../contexts/v2.jsonld', import.meta.url),
  context: v2Context
}});

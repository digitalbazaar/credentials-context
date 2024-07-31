#!/usr/bin/env node
/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import {contextsMetadata} from '../lib/index.js';
import fs from 'node:fs';

// Serialize the contexts as JSON-LD
for(const metadata of contextsMetadata.values()) {
  fs.writeFileSync(
    metadata.url,
    JSON.stringify(metadata.context, null, 2) + '\n'
  );
}

#!/usr/bin/env node
/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import fs from 'node:fs';
import {metadata} from '../lib/index.js';

// Serialize the contexts as JSON-LD
for(const {url, context} of metadata.values()) {
  fs.writeFileSync(url, JSON.stringify(context, null, 2) + '\n');
}

# @digitalbazaar/credentials-context ChangeLog

## 3.0.0 - 2024-07-31

### Added
- Add draft VC Data Model 2.0 contexts.
  - https://www.w3.org/ns/credentials/undefined-terms/v2',
  - https://www.w3.org/ns/credentials/v2'
- Package serialized context files.
- Export experimental `contextsMetadata` Map with extra info about contexts.
  - Current use is a `url` property for local context file.

### Changed
- **BREAKING**: Rename with scope to `@digitalbazaar/credentials-context`.
- **BREAKING**: Only support Node.js >= 18.
- **BREAKING**: Convert to ESM. A built CJS file is distributed.
- Move code from `js/` to `lib/`.
- Update dependencies and tooling.

### Removed
- **BREAKING**: Remove `documentLoader` export.
- **BREAKING**: Remove `constants` and direct URL and context exports.
  - Expectation is the `contexts` Map will be used directly with known context
    URLs or as a source of contexts to use with a JSON-LD context loader.

## 2.0.0 - 2019-09-20

### Changed
- Refactor to use current context repo template.

## 1.0.0 - 2019-07-30

See git history for changes previous to this release.

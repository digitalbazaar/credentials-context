# @digitalbazaar/credentials-context ChangeLog

## 3.1.0 - 2024-08-01

### Added
- Export experimental `named` Map to associate "short names" to metadata. Can
  be used to get context URLs from easier to remember names with code like
  `vcNamed.get('v2').id`.

### Changed
- Rename experimental export `contextsMetadata` to `metadata`.

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

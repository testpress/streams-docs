export const SDK_REPOSITORIES = {
  android: {
    owner: 'testpress',
    repo: 'TPStreamsAndroidPlayer',
    branch: 'main',
    docs: {
      changelog: 'CHANGELOG.md',
      troubleshooting: 'docs/trouble-shooting.md',
    },
  },
  ios: {
    owner: 'testpress',
    repo: 'iOSPlayerSDK',
    branch: 'main',
    docs: {
      changelog: 'CHANGELOG.md',
    },
  },
  flutter: {
    owner: 'testpress',
    repo: 'flutter-player-sdk',
    branch: 'main',
    docs: {
      changelog: 'CHANGELOG.md',
    },
  },
  reactNative: {
    owner: 'testpress',
    repo: 'react-native-tpstreams',
    branch: 'main',
    docs: {
      changelog: 'CHANGELOG.md',
    },
  },
};

/**
 * Generates raw and repo URLs for a file hosted in a GitHub repository.
 *
 * @param {keyof typeof SDK_REPOSITORIES} sdkKey
 * @param {string} [docType='changelog'] - Document key defined in sdk.docs (e.g. 'changelog', 'troubleshooting')
 * @param {string} [contentType] - Custom human-readable label e.g. "troubleshooting guide"
 */
export const getGitHubDoc = (sdkKey, docType = 'changelog', contentType) => {
  const sdk = SDK_REPOSITORIES[sdkKey];
  if (!sdk) {
    throw new Error(
      `Unknown SDK: "${sdkKey}". Available SDKs: ${Object.keys(SDK_REPOSITORIES).join(', ')}`
    );
  }

  const resolvedPath = sdk.docs?.[docType];
  if (!resolvedPath) {
    throw new Error(
      `Unknown docType: "${docType}" for SDK "${sdkKey}". Available types: ${Object.keys(sdk.docs || {}).join(', ')}`
    );
  }
  const resolvedContentType = contentType || docType;
  const branch = sdk.branch || 'main';

  return {
    rawUrl: `https://raw.githubusercontent.com/${sdk.owner}/${sdk.repo}/${branch}/${resolvedPath}`,
    repoUrl: `https://github.com/${sdk.owner}/${sdk.repo}/blob/${branch}/${resolvedPath}`,
    contentType: resolvedContentType,
  };
};

export const SDK_REPOSITORIES = {
  android: {
    owner: 'testpress',
    repo: 'TPStreamsAndroidPlayer',
    branch: 'main',
  },
  ios: {
    owner: 'testpress',
    repo: 'iOSPlayerSDK',
    branch: 'main',
  },
  flutter: {
    owner: 'testpress',
    repo: 'flutter-player-sdk',
    branch: 'main',
  },
  reactNative: {
    owner: 'testpress',
    repo: 'react-native-tpstreams',
    branch: 'main',
  },
};

/**
 * Generates raw and repo URLs for a file hosted in a GitHub repository.
 * 
 * @param {keyof typeof SDK_REPOSITORIES} sdkKey 
 * @param {string} filePath - e.g. "docs/trouble-shooting.md" or "CHANGELOG.md"
 * @param {string} [contentType='document'] - e.g. "troubleshooting guide", "changelog"
 */
export const getGitHubDoc = (sdkKey, filePath, contentType = 'document') => {
  const sdk = SDK_REPOSITORIES[sdkKey];
  if (!sdk) {
    throw new Error(
      `Unknown SDK: "${sdkKey}". Available SDKs: ${Object.keys(SDK_REPOSITORIES).join(', ')}`
    );
  }
  const branch = sdk.branch || 'main';
  return {
    rawUrl: `https://raw.githubusercontent.com/${sdk.owner}/${sdk.repo}/${branch}/${filePath}`,
    repoUrl: `https://github.com/${sdk.owner}/${sdk.repo}/blob/${branch}/${filePath}`,
    contentType,
  };
};

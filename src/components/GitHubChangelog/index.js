import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { getGitHubDoc } from '@site/src/constants/githubDocs';
import styles from './styles.module.css';

// Configure marked options to be safe
marked.setOptions({
  gfm: true,
  breaks: true,
});

export default function GitHubChangelog({ sdk, file = 'CHANGELOG.md', rawUrl: directRawUrl, repoUrl: directRepoUrl }) {
  const docConfig = sdk ? getGitHubDoc(sdk, file, 'changelog') : null;
  const rawUrl = directRawUrl || docConfig?.rawUrl;
  const repoUrl = directRepoUrl || docConfig?.repoUrl;

  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    if (!rawUrl) {
      setError('No source URL or SDK specified for Changelog.');
      setLoading(false);
      return;
    }
    
    setLoading(true);
    fetch(rawUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch changelog (Status: ${res.status})`);
        }
        return res.text();
      })
      .then((text) => {
        if (isMounted) {
          // Parse markdown to HTML
          const parsedHtml = marked.parse(text);
          setHtml(parsedHtml);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error(err);
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [rawUrl]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <p>Fetching latest changelog from GitHub...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>⚠️ {error}</p>
        {repoUrl && (
          <p>
            You can view the changelog directly on GitHub:{' '}
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              {repoUrl}
            </a>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.changelogWrapper}>
      <div 
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }} 
      />
    </div>
  );
}

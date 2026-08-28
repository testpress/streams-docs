import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { getGitHubDoc } from '@site/src/constants/githubDocs';
import styles from './styles.module.css';

// Configure marked options to be safe
marked.setOptions({
  gfm: true,
  breaks: true,
});

export default function GitHubDoc({
  sdk,
  docType,
  contentType: directContentType,
  rawUrl: directRawUrl,
  repoUrl: directRepoUrl,
}) {
  const targetDoc = docType || 'changelog';
  const docConfig = sdk ? getGitHubDoc(sdk, targetDoc, directContentType) : null;
  const rawUrl = directRawUrl || docConfig?.rawUrl;
  const repoUrl = directRepoUrl || docConfig?.repoUrl;
  const contentType = directContentType || docConfig?.contentType || 'document';

  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    if (!rawUrl) {
      setError(`No source URL or SDK specified for ${contentType}.`);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(rawUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${contentType} (Status: ${res.status})`);
        }
        return res.text();
      })
      .then((text) => {
        if (isMounted) {
          // Strip the leading h1 heading to avoid duplicating the Docusaurus page title
          // Use [ \t]+ (horizontal whitespace only) and [^\n]* to ensure exactly one line is removed
          const strippedText = text.replace(/^#[ \t]+[^\n]*\n?/, '');
          const parsedHtml = marked.parse(strippedText);
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
  }, [rawUrl, contentType]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
        <p>Fetching latest {contentType} from GitHub...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>⚠️ {error}</p>
        {repoUrl && (
          <p>
            You can view the {contentType} directly on GitHub:{' '}
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              {repoUrl}
            </a>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.docWrapper}>
      <div 
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }} 
      />
    </div>
  );
}

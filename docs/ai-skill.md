---
id: ai-skill
title: TPStreams AI Skill
sidebar_label: AI Skill
slug: /ai-skill
---

Equip your AI coding assistants (Codex, Cursor, Claude Code, etc.) with TPStreams domain knowledge and integration guides.

## Install Skill
<div className="ai-install-card">
  <div className="ai-install-card__subtitle">Run the following command in your terminal:</div>
  <div className="ai-code-box">
    <code>npx skills@latest add https://github.com/testpress/streams-docs.git</code>
    <button className="ai-code-box__btn" onClick={() => navigator.clipboard.writeText('npx skills@latest add https://github.com/testpress/streams-docs.git')}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      <span>Copy</span>
    </button>
  </div>
</div>

## Works with

Compatible with popular AI coding agents and tools.

<div className="ai-tools-grid">
  <div className="ai-tool-card">
    <div className="ai-tool-icon">
      <img src="/img/ai-tools/claude.svg" alt="Claude Code" />
    </div>
    <span className="ai-tool-name">Claude Code</span>
  </div>
  <div className="ai-tool-card">
    <div className="ai-tool-icon">
      <img src="/img/ai-tools/cursor.svg" alt="Cursor" className="ai-tool-icon--adaptive" />
    </div>
    <span className="ai-tool-name">Cursor</span>
  </div>
  <div className="ai-tool-card">
    <div className="ai-tool-icon">
      <img src="/img/ai-tools/openai.svg" alt="Codex / ChatGPT" className="ai-tool-icon--adaptive" />
    </div>
    <span className="ai-tool-name">Codex</span>
  </div>
  <div className="ai-tool-card">
    <div className="ai-tool-icon">
      <img src="/img/ai-tools/copilot.svg" alt="GitHub Copilot" className="ai-tool-icon--adaptive" />
    </div>
    <span className="ai-tool-name">GitHub Copilot</span>
  </div>
  <div className="ai-tool-card">
    <div className="ai-tool-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="5" cy="12" r="2.5"/>
        <circle cx="12" cy="12" r="2.5"/>
        <circle cx="19" cy="12" r="2.5"/>
      </svg>
    </div>
    <span className="ai-tool-name">and more</span>
  </div>
</div>

## How to use

Mention `/tpstreams-integration` in your prompts:

<div className="ai-prompt-box">
  <div className="ai-prompt-line">
    <span className="ai-prompt-num">1</span>
    <span className="ai-prompt-text">"Use /tpstreams-integration integrate to play videos in Flutter with offline downloads."</span>
  </div>
  <div className="ai-prompt-line">
    <span className="ai-prompt-num">2</span>
    <span className="ai-prompt-text">"Use /tpstreams-integration add webhook to handle video transcoding webhook events."</span>
  </div>
  <div className="ai-prompt-line">
    <span className="ai-prompt-num">3</span>
    <span className="ai-prompt-text">"Use /tpstreams-integration add logic for generating access tokens for video playback."</span>
  </div>
</div>

## LLM Endpoints

Direct access to TPStreams documentation for LLMs.

<table className="ai-endpoints-table">
  <thead>
    <tr>
      <th style={{width: '32%'}}>Resource</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="ai-resource-cell">
          <strong>Index</strong>
          <code>llms.txt</code>
        </div>
      </td>
      <td>
        <div className="ai-endpoint-url-cell">
          <a href="pathname:///llms.txt" target="_blank" rel="noopener noreferrer">https://developer.tpstreams.com/llms.txt</a>
          <button className="ai-copy-btn-sm" title="Copy URL" onClick={() => navigator.clipboard.writeText('https://developer.tpstreams.com/llms.txt')}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy</span>
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="ai-resource-cell">
          <strong>Full Documentation</strong>
          <code>llms-full.txt</code>
        </div>
      </td>
      <td>
        <div className="ai-endpoint-url-cell">
          <a href="pathname:///llms-full.txt" target="_blank" rel="noopener noreferrer">https://developer.tpstreams.com/llms-full.txt</a>
          <button className="ai-copy-btn-sm" title="Copy URL" onClick={() => navigator.clipboard.writeText('https://developer.tpstreams.com/llms-full.txt')}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy</span>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<div className="ai-callout-card">
  <div className="ai-callout-icon">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  </div>
  <div>
    <h4 className="ai-callout-title">The skill is automatically kept up to date with our latest documentation.</h4>
    <p className="ai-callout-desc">No manual updates required — your agent always has the latest information.</p>
  </div>
</div>

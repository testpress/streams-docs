// src/components/ApiDocs/index.js
import React from 'react';
import styles from './styles.module.css';
import "./newStyle.css"

// ---------------------------
// ApiSection
// ---------------------------
const genericErrors = [
  { code: 400, description: "Invalid data or timestamp format" },
  { code: 401, description: "Missing or invalid authentication" },
  { code: 404, description: "Resource not found" },
  { code: 500, description: "Unexpected server issue" },
  { code: 501, description: "Not implemented" },
  { code: 502, description: "Bad gateway" },
];

// Map endpoint type to success code and valid errors
const endpointConfig = {
  create: {
    success: { code: 201, description: "Chapters created successfully" },
    errors: genericErrors.filter(e => e.code !== 404), // POST usually won't return 404
  },
  list: {
    success: { code: 200, description: "Chapters retrieved successfully" },
    errors: genericErrors, // GET can return 404
  },
  delete: {
    success: { code: 204, description: "Chapter deleted successfully" },
    errors: genericErrors, // DELETE can return 404
  },
};


export const ChapterStatusTable = ({ type }) => {
  const config = endpointConfig[type];
  if (!config) return null;

  const codes = [config.success, ...config.errors].map(({ code, description }) => ({
    code,
    description,
  }));

  const columns = [
    { key: 'code', header: 'Code' },
    { key: 'description', header: 'Description' },
  ];

  return <Table columns={columns} data={codes} />;
};


export const Table = ({ columns, data }) => {
  if (!columns || !data) return null;

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key || col} className={styles.th}>
                {col.header || col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map(col => (
                <td key={col.key || col} className={styles.td}>
                  {row[col.key || col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


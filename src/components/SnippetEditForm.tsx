'use client';
import { Editor } from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { useState } from 'react';
interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };
  return (
    <div>
      <Editor
        height="50vh"
        defaultValue={snippet.code}
        theme="vs-dark"
        language="javascript"
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default SnippetEditForm;

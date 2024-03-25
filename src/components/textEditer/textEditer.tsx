'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { Descendant, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

export const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: 'Enter your text here' }]
    }
  ]);

  const handleChange = useCallback((newValue: Descendant[]) => {
    setValue(newValue);
  }, []);

  const handleFormat = (format: string) => {
    // editor.exec({ type: format });
    editor.apply({ type: format });
  };
  console.log(value);
  return (
    <div>
      <div className="toolbar">
        <button onClick={() => handleFormat('bold')}>Bold</button>
        <button onClick={() => handleFormat('italic')}>Italic</button>
        <button onClick={() => handleFormat('underline')}>Underline</button>
      </div>
      <Slate editor={editor} initialValue={value} onChange={handleChange}>
        <Editable />
      </Slate>
      <style jsx>{`
        .toolbar {
          margin-bottom: 10px;
        }
        button {
          margin-right: 8px;
          padding: 5px 10px;
          font-size: 14px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default TextEditor;

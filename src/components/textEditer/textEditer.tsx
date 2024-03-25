'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { Descendant, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

export const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>([
    {
      children: [{ text: 'Enter your text here' }],
    },
  ]);

  const handleChange = useCallback((newValue: Descendant[]) => {
    setValue(newValue);
  }, []);

  return (
    <div>
      <Slate editor={editor} initialValue={value} onChange={handleChange}>
        <Editable />
      </Slate>
    </div>
  );
};

export default TextEditor;

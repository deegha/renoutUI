import { EditorState } from 'draft-js';
import { useState } from 'react';

export function useEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  //handling editor state changes
  function onEditorStateChange(editorState) {
    setEditorState(editorState);
  }

  return {
    editorState,
    onEditorStateChange,
  };
}

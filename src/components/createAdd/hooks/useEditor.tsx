import { EditorState } from 'draft-js';
import { SetStateAction, useState } from 'react';

export function useEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  //handling editor state changes
  function onEditorStateChange(editorState: SetStateAction<EditorState>) {
    setEditorState(editorState);
  }

  return {
    editorState,
    onEditorStateChange,
  };
}

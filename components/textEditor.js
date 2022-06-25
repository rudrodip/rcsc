import dynamic from "next/dynamic"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { EditorState, convertToRaw } from "draft-js"
import { useState, useEffect } from "react"

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(module => module.Editor),
  {
    ssr: false
  }
)

const TextEditor = () => {
  let emptyState = EditorState.createEmpty()
  const [editorState, setEditorState] = useState(emptyState)

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  return (
    <div className="min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName='flex sticky top-0 z-40 !justify-center !bg-transparent !border-none !text-black'
        editorClassName='mt-6 p-10 bg-gray-700 shadow-lg max-w-5xl mx-auto mb-12'
      />
    </div>
  )
}

export default TextEditor
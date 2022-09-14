import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { EditorType } from "@toast-ui/editor";
import { LegacyRef } from "react";
import "@toast-ui/editor/dist/i18n/ko-kr";

export default function ToastEditor(props: {
  defaultValue: string;
  onChangeDescription: (editorType: EditorType) => void;
  editorRef: LegacyRef<Editor>;
}) {
  return (
    <Editor
      placeholder="아메리카노 5000원"
      onChange={props.onChangeDescription}
      initialValue={props.defaultValue}
      previewStyle="tab"
      height="200px"
      initialEditType="markdown" // or wysiwyg
      language="ko-KR"
      useCommandShortcut={false}
      hideModeSwitch={true}
      ref={props.editorRef}
    />
  );
}

/* 
import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { EditorView, keymap } from "@codemirror/view";
import { json } from "@codemirror/lang-json";
import { defaultTabBinding } from "@codemirror/commands";

export default function setEditor() {
    const jsonReqBody = document.querySelector('[data-json-field]');
    //const jsonResBody = document.querySelector('[data-res-body-field]');

    const extensions = [
        basicSetup,
        keymap.of([defaultTabBinding]),
        json(),
        EditorState.tabSize.of(2)
    ];

    const reqJSON = new EditorView({
        state: EditorState.create({
            doc: "{\n\t\n}",
            extensions: extensions
        }),
        parent: jsonReqBody
    });
    
        const resJSON = new EditorView({
            state: EditorState.create({
                doc: "{}",
                extensions: [...extensions, EditorView.editable.of(false)]
            }),
            parent: jsonResBody
        });
    
        function updateResponseJSONField(val) {
            resJSON.dispatch({
                changes: {
                    from: 0,
                    to: resJSON.state.doc.length,
                    insert: JSON.stringify(val, null, 2)
                }
            });
        }
    
    return { reqJSON };
} */
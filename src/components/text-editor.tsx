import './text-editor.css';
import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";

const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState('# Header');

    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const listner = (event: MouseEvent) => {
            if (ref.current && event.target && ref.current.contains(event.target as Node)) {
                
                return;
            }
            
            setEditing(false);
        };
        document.addEventListener('click', listner, {capture: true});

        return () => {
            document.removeEventListener('click', listner, {capture: true});
        }
    }, []);
    if (editing) {
        return (
            <div className='text-editor' ref={ref}>
                <MDEditor value={value} onChange={(v) => setValue(v || '')} />
            </div>
        );
    }
    return (
        <div className='text-editor card' onClick={() => setEditing(true)}>
            <div className="card-content">
                <MDEditor.Markdown source={value} />
            </div>
        </div>
    );
}

export default TextEditor;
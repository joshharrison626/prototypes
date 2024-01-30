import {useEffect, useState, useRef} from 'react';


export default function EditableCell({id, time, editMode, onTextClick, hasFocus, onFocusChange}) {
    const [selected, setSelected] = useState(false);
    const [inputValue, setInputValue] = useState(time);
    const inputRef = useRef(null);
    const spanRef = useRef(null);

    const handleTextClick = (e) => {
        onTextClick();
        onFocusChange(e);
        setSelected(true);
    };

    const handleKeydown = (e) => {
        if (e.key === "Enter" || e.key === "Space") {
            handleTextClick(e);
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        console.log(hasFocus, editMode);
        if (hasFocus) {
            if (editMode) {
                inputRef?.current?.focus();
                setSelected(true);
            } else {
                spanRef?.current?.focus();
            }
        } else {
            setSelected(false);
        }
    }, [editMode, hasFocus, inputRef, spanRef]);

    useEffect(() => {
        console.log(selected);
        if (selected) {
            inputRef?.current?.select();
        }
    }, [selected, inputRef]);

    return (
        <td align='center' key={time}>
            {editMode ? (
                <input
                    id={id}
                    ref={inputRef}
                    className="edit-text"
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={onFocusChange}
                />
            ) : (
                <span
                    id={id}
                    ref={spanRef}
                    role='button'
                    tabIndex={0}
                    onClick={handleTextClick}
                    onKeyDown={handleKeydown}
                    aria-label={`${time}, click to edit`}
                    onFocus={onFocusChange}
                >
                    {time}
                </span>
            )}
        </td>
    );
}
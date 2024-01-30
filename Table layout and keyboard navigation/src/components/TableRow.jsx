import {useState} from 'react';

import ExpandCollapseCustomer from "./ExpandCollapseCustomer";
import EditableCell from './EditableCell';

export default function TableRow({timesheet, onKeyDown, currFocusId, onFocusChange}) {
    const [editMode, setEditMode] = useState(false);

    const handleTextClick = () => {
        setEditMode(true);
    };

    const handleEnterKey = () => {
        setEditMode(false);
    };
debugger;
    return (
        <tr onKeyDown={onKeyDown}>
            <ExpandCollapseCustomer
                timesheet={timesheet}
                rowExpanded={false}
                currFocusId={currFocusId}
                onFocusChange={onFocusChange}
            />
            {timesheet.days.map((time, index) => (
                <EditableCell
                    id={timesheet.idList[index]}
                    time={time}
                    editMode={editMode}
                    onTextClick={handleTextClick}
                    onEnterKey={handleEnterKey}
                    hasFocus={currFocusId === timesheet.idList[index]}
                    onFocusChange={onFocusChange}
                />
            ))}
        </tr>
    );
}
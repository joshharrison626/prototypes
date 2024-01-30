import {useState} from 'react';

const addIdsToTimesheets = (timesheetList) => {
    const ids = [
        [
            'row0-col0',
            'row0-col1',
            'row0-col2',
            'row0-col3',
            'row0-col4',
            'row0-col5',
            'row0-col6',
            'row0-col7',
            'row0-col8',
        ]
    ];
    
    const timesheetsWithIds = timesheetList.map((timesheet, rowIndex) => {
        ids.push([`row${rowIndex + 1}-col0`, `row${rowIndex + 1}-col1`]);
        const idList = timesheet.days.map((_day, colIndex) => {
            return `row${rowIndex + 1}-col${colIndex + 2}`;
        });
        ids[rowIndex + 1] = ids[rowIndex + 1].concat(idList);
        return {...timesheet, idList};
    })
    return [ids, timesheetsWithIds];
};

export default function useKeyboardNavigationmanager(timesheets) {
    const [ids, timesheetsWithIds] = addIdsToTimesheets(timesheets);
    const [currFocusId, setCurrFocusId] = useState(null);

    const moveFocus = (direction) => {
        const currRow = parseInt(currFocusId.split('-')[0].replace('row', ''));
        const currCol = parseInt(currFocusId.split('-')[1].replace('col', ''));
        const nextRef = ids[currRow]?.[currCol + 1];
        const prevRef = ids[currRow]?.[currCol - 1];
        const aboveRef = ids[currRow - 1]?.[currCol];
        const belowRef = ids[currRow + 1]?.[currCol];

        if (direction === 'right' && nextRef) {
            setCurrFocusId(nextRef);
        }
        if (direction === 'left' && prevRef) {
            setCurrFocusId(prevRef);
        }
        if (direction === 'up' && aboveRef) {
            setCurrFocusId(aboveRef);
        }
        if (direction === 'down' && belowRef) {
            setCurrFocusId(belowRef);
        }
    };

    return [timesheetsWithIds, moveFocus, currFocusId, setCurrFocusId];
}
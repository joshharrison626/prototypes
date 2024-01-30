import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import TableRow from './TableRow';
import useKeyboardNavigationManager from '../hooks/useKeyboardNavigationManager';

const timesheets = [
    {
        customerName: 'Customer One',
        days: ['1:30','2:15','1:45','4:10','5:50', '0','0'],
        serviceName: 'Service One',
        billable: true,
        billableRate: "$24/hr"
    },
    {
        customerName: 'Customer Two',
        days: ['1:30','2:15','1:45','4:10','5:50', '0','0'],
        serviceName: 'Service Two',
        billable: true,
        billableRate: "$24/hr"
    },
    {
        customerName: 'Customer Three',
        days: ['1:30','2:15','1:45','4:10','5:50', '0','0'],
        serviceName: 'Service Three',
        billable: true,
        billableRate: "$24/hr"
    }
];

export default function TableClickableEditFields() {
    const [expandedAll, setExpandedAll] = useState(false);
    const [timesheetsWithIds, moveFocus, currFocusId, setCurrFocusId] = useKeyboardNavigationManager(timesheets);
    const row0col0 = useRef(null);
    const row0col1 = useRef(null);
    const row0col2 = useRef(null);
    const row0col3 = useRef(null);
    const row0col4 = useRef(null);
    const row0col5 = useRef(null);
    const row0col6 = useRef(null);
    const row0col7 = useRef(null);
    const row0col8 = useRef(null);

    const refMap = useMemo(() => ({
        'row0-col0': row0col0,
        'row0-col1': row0col1,
        'row0-col2': row0col2,
        'row0-col3': row0col3,
        'row0-col4': row0col4,
        'row0-col5': row0col5,
        'row0-col6': row0col6,
        'row0-col7': row0col7,
        'row0-col8': row0col8,
    }), []);

    const handleNavKeydown = useCallback((e) => {
        const keyMap = {
            ArrowRight: "right",
            ArrowLeft: "left",
            ArrowUp: "up",
            ArrowDown: "down",
        };
        const direction = keyMap[e.key];
        if (direction) {
            moveFocus(direction);
        }
    }, [moveFocus]);

    const handleFocusChange = (e) => {
        setCurrFocusId(e.currentTarget.id)
    };

    useEffect(() => {
        refMap?.[currFocusId]?.current?.focus();
    }, [refMap, currFocusId]);

    return (
        <>
            <h2>Table with clickable edit fields and focus manager</h2>
            <table role="grid">
            <thead>
                <tr onKeyDown={handleNavKeydown}>
                    <th align='center'>
                        <button
                            ref={refMap['row0-col0']}
                            id='row0-col0'
                            onClick={() => setExpandedAll((prev) => !prev)}
                            aria-label="Expand / Collapse All"
                            aria-expanded={expandedAll}
                            onFocus={(e) => setCurrFocusId(e.currentTarget.id)}
                        >
                            <i
                                aria-hidden="true"
                                class={`fas fa-solid fa-chevron-right ${expandedAll ? 'expanded' : 'collapsed'}`}
                            />
                        </button>
                    </th>
                    <th ref={refMap['row0-col1']} align='left' id='row0-col1' tabIndex={-1}>Customer</th>
                    <th ref={refMap['row0-col2']} align='center' id='row0-col2' tabIndex={-1}>Sun 20</th>
                    <th ref={refMap['row0-col3']} align='center' id='row0-col3' tabIndex={-1}>Mon 21</th>
                    <th ref={refMap['row0-col4']} align='center' id='row0-col4' tabIndex={-1}>Tues 22</th>
                    <th ref={refMap['row0-col5']} align='center' id='row0-col5' tabIndex={-1}>Wed 23</th>
                    <th ref={refMap['row0-col6']} align='center' id='row0-col6' tabIndex={-1}>Thurs 24</th>
                    <th ref={refMap['row0-col7']} align='center' id='row0-col7' tabIndex={-1}>Fri 25</th>
                    <th ref={refMap['row0-col8']} align='center' id='row0-col8' tabIndex={-1}>Sat 26</th>
                </tr>
            </thead>
            <tbody>
                {timesheetsWithIds.map((timesheet) => (
                    <TableRow
                        key={timesheet.customerName}
                        timesheet={timesheet}
                        onKeyDown={handleNavKeydown}
                        currFocusId={currFocusId}
                        onFocusChange={handleFocusChange}
                    />
                ))}
            </tbody>
            </table>
        </>
    );
}
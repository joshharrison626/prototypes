import { useEffect, useMemo, useRef, useState } from 'react';

export default function ExpandCollapseCustomer({timesheet, rowExpanded, currFocusId, onFocusChange}) {
    const [expanded, setExpanded] = useState(false);
    const [customerName, setCustomerName] = useState(timesheet.customerName);
    const [billable, setBillable] = useState(timesheet.billable);
    const [billableRate, setBillableRate] = useState(timesheet.billableRate);
    const [serviceName, setServiceName] = useState(timesheet.serviceName);
    const rowNum = timesheet?.idList?.[0].split('-')[0];

    const col0 = useRef(null);
    const col1 = useRef(null);

    const refMap = useMemo(() => ({
        [`${rowNum}-col0`]: col0,
        [`${rowNum}-col1`]: col1,
    }), [rowNum]);

    useEffect(() => {
        refMap?.[currFocusId]?.current?.focus();
    }, [refMap, currFocusId]);

    useEffect(() => {
        setExpanded(rowExpanded);
    }, [rowExpanded]);

    return (
        <>
            <td align='center'>
                <button
                    ref={col0}
                    id={`${rowNum}-col0`}
                    onClick={() => setExpanded((prev) => !prev)}
                    aria-label="Expand / Collapse Row"
                    aria-expanded={expanded}
                    onFocus={onFocusChange}
                >
                    <i
                        aria-hidden="true"
                        class={`fas fa-solid fa-chevron-right ${expanded ? 'expanded' : 'collapsed'}`}>
                    </i>
                </button>
            </td>
            <td align='left' width='24' className={expanded ? 'expanded' : ''}>
                <input
                    ref={col1}
                    id={`${rowNum}-col1`}
                    aria-labelledby='customer-label'
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    onFocus={onFocusChange}
                />
                {expanded && (
                    <>
                        <div>
                            <label>
                                Service
                                <input
                                    id={`${rowNum}-col1-field2`}
                                    value={serviceName}
                                    onChange={(e) => setServiceName(e.target.value)}
                                    onFocus={onFocusChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Billable
                                <input
                                    id={`${rowNum}-col1-field3`}
                                    type="checkbox"
                                    checked={billable}
                                    onChange={(e) => setBillable(e.target.checked)}
                                    onFocus={onFocusChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Billable rate
                                <input
                                    id={`${rowNum}-col1-field4`}
                                    value={billableRate}
                                    onChange={(e) => setBillableRate(e.target.value)}
                                    onFocus={onFocusChange}
                                />
                            </label>
                        </div>
                    </>
                )}
            </td>
        </>
    );
}
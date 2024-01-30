import { useEffect, useState } from 'react';

export default function ExpandCollapseDetails({timesheet, rowExpanded, onRowExpanded, showDetails}) {
    const {billable, billableRate, serviceName} = timesheet;
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setExpanded(rowExpanded);
        if (rowExpanded) {
            onRowExpanded();
        }
    }, [rowExpanded, onRowExpanded]);

    const handleExpandRow = () => {
        setExpanded((prev) => !prev);
        onRowExpanded();
    };

    return (
        <>
            <td data-area='expand' align='center'><button onClick={handleExpandRow} aria-label="Expand / Collapse Row" aria-expanded={expanded}><i aria-hidden="true" class={`fas fa-solid fa-chevron-right ${expanded ? 'expanded' : 'collapsed'}`}></i></button></td>
            <td data-area='customer'><input aria-labelledby='customer-label' value={timesheet.customerName} /></td>
            {showDetails && (
                <>
                    <td data-area='details' align='left' width='24' className={expanded ? 'expanded' : ''}>
                        {expanded && (
                            <input value={serviceName} />
                        )}
                    </td>
                    <td>
                        {expanded && (
                            <input type="checkbox" checked={billable} />
                        )}
                    </td>
                    <td>
                        {expanded && (
                            <input value={billableRate} />
                        )}
                    </td>
                </>
            )}
        </>
    );
}
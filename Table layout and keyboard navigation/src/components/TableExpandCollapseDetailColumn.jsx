import { useState } from 'react';

import ExpandCollapseDetails from './ExpandCollapseDetails';

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

export default function TableExpandCollapseDetailColumn() {
    const [expandedAll, setExpandedAll] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const handleExpandAll = () => {
        setExpandedAll((prev) => !prev);
        setShowDetails((prev) => !prev);
    };

    const handleRowExpanded = () => {
        setShowDetails(true);
    };

    return (
        <>
            <h2>Table with expand/collapse fields in own columns</h2>
            <table className='grid-container'>
                <thead>
                    <tr>
                    <th align='center'><button onClick={handleExpandAll} aria-label="Expand / Collapse All" aria-expanded={expandedAll}><i aria-hidden="true" class={`fas fa-solid fa-chevron-right ${expandedAll ? 'expanded' : 'collapsed'}`}></i></button></th>
                    <th align='left' id="customer-label">Customer</th>
                    {showDetails && (
                        <>
                            <th>Service</th>
                            <th>Billable</th>
                            <th>Billable Rate</th>
                        </>
                    )}
                    <th align='center'>Sun 20</th>
                    <th align='center'>Mon 21</th>
                    <th align='center'>Tues 22</th>
                    <th align='center'>Wed 23</th>
                    <th align='center'>Thurs 24</th>
                    <th align='center'>Fri 25</th>
                    <th align='center'>Sat 26</th>
                    </tr>
                </thead>
                <tbody>
                    {timesheets.map((timesheet) => (
                    <tr key={timesheet.customerName}>
                        <ExpandCollapseDetails timesheet={timesheet} rowExpanded={expandedAll} onRowExpanded={handleRowExpanded} showDetails={showDetails} />
                        {timesheet.days.map((time) => (
                        <td data-area='day' align='center' key={time}>{time}</td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
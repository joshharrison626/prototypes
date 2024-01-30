import TableExpandCollapseInColumn from './components/TableExpandCollapseInColumn';
import TableExpandCollapseDetailColumn from './components/TableExpandCollapseDetailColumn';
import TableClickableEditFields from './components/TableClickableEditFields';
import './App.css';

function App() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous" />
      </head>
      <div className="App">
        <h1>Weekly Timesheet POC</h1>
        <TableExpandCollapseInColumn />
        <TableExpandCollapseDetailColumn />
        <TableClickableEditFields />
      </div>
    </>
  );
}

export default App;

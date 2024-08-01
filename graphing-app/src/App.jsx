// import React, { useState } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import DataPointList from './components/DataPointList';
// import GraphCanvas from './components/GraphCanvas';
// import './App.css';

// const App = () => {
//   const [dataPoints, setDataPoints] = useState([]);
//   const [graphType, setGraphType] = useState('scatter');

//   const points = [
//     { x: 1, y: 2 },
//     { x: 2, y: 4 },
//     { x: 3, y: 6 },
//     { x: 4, y: 8 },
//     { x: 5, y: 10 },
//     { x: 6, y: 12 },
//     { x: 7, y: 14 },
//     { x: 8, y: 16 },
//     { x: 9, y: 18 },
//     { x: 10, y: 20 },
//     { x: 11, y: 22 },
//     { x: 12, y: 24 },
//     { x: 13, y: 26 },
//     { x: 14, y: 28 },
//     { x: 15, y: 30 },
//   ];

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="min-h-screen bg-gray-100 p-4">
//         <h1 className="text-3xl font-bold text-center mb-4">Graphing App</h1>
//         <div className="text-center mb-4">
//           <label className="mr-2">Graph Type:</label>
//           <select
//             value={graphType}
//             onChange={(e) => setGraphType(e.target.value)}
//             className="p-2 border rounded"
//           >
//             <option value="scatter">Scatter</option>
//             <option value="line">Line</option>
//             <option value="bar">Bar</option>
//           </select>
//         </div>
//         <div className="flex justify-center">
//           <DataPointList points={points} />
//           <GraphCanvas dataPoints={dataPoints} setDataPoints={setDataPoints} graphType={graphType} />
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DataPointList from './components/DataPointList';
import GraphCanvas from './components/GraphCanvas';
import './App.css';

const App = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [graphType, setGraphType] = useState('scatter');
  const [selectedPoint, setSelectedPoint] = useState(null);

  const points = [
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 6 },
    { x: 4, y: 8 },
    { x: 5, y: 10 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 16 },
    { x: 9, y: 18 },
    { x: 10, y: 20 },
    { x: 11, y: 22 },
    { x: 12, y: 24 },
    { x: 13, y: 26 },
    { x: 14, y: 28 },
    { x: 15, y: 30 },
  ];

  const handleEditPoint = (newPoint) => {
    setDataPoints((prevPoints) =>
      prevPoints.map((point) =>
        point === selectedPoint ? newPoint : point
      )
    );
    setSelectedPoint(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Graphing App</h1>
        <div className="select-container">
          <label className="mr-2">Graph Type:</label>
          <select
            value={graphType}
            onChange={(e) => setGraphType(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="scatter">Scatter</option>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
          </select>
        </div>
        <div className="flex justify-center">
          <DataPointList points={points} />
          <GraphCanvas
            dataPoints={dataPoints}
            setDataPoints={setDataPoints}
            graphType={graphType}
            selectedPoint={selectedPoint}
            setSelectedPoint={setSelectedPoint}
          />
        </div>
        {selectedPoint && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Edit Point</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const x = parseFloat(e.target.x.value);
                  const y = parseFloat(e.target.y.value);
                  handleEditPoint({ x, y });
                }}
              >
                <label className="block mb-2">
                  X:
                  <input
                    type="number"
                    name="x"
                    defaultValue={selectedPoint.x}
                    className="p-2 border rounded w-full"
                  />
                </label>
                <label className="block mb-4">
                  Y:
                  <input
                    type="number"
                    name="y"
                    defaultValue={selectedPoint.y}
                    className="p-2 border rounded w-full"
                  />
                </label>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">
                  Save
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default App;
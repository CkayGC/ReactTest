import react from 'react';
import './App.css';
import Bostadsratt from './Components/Bostadsrätt';
import Villa from './Components/Villa';


function App() {

  const [Type, setType] = react.useState("Bostadsrätt");

  function showThing() {
    if (Type == "Bostadsrätt") {
      return <Bostadsratt />
    } else {
    return <Villa />
    }
  }

  function showBostadsrätt() { setType("Bostadsrätt")};
  function showVilla() { setType("Villa")};


  return (
    <div className="App">

      <div>
        <h1 className="text-slate-100 text-4xl font-bold ">Chinese Housing Calculator</h1>
      </div>

      <div className="flex flex-row space-x-7 mb-6">
        <button onClick={showVilla} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">Villa</button>
        <button onClick={showBostadsrätt} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-32">Bostadsrätt</button>
      </div>

      <div className="flex items-start justify-center h-1/3 flex-grow">
        {showThing(Type)}
      </div>

    </div>
  );
}

export default App;

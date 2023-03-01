import { useState } from 'react';
import FormNewWatch from './components/FormNewWatch';
import Watch from './components/Watch';
import './App.css';

function App() {

  const [watches, updateWatches] = useState([
    {
      cityName: 'Moscow',
      timezone: '+3'
    }
  ])

  let AddWatch = (cityName, timezone) => {
    let newWatches = Array.from(watches);
    newWatches.push({
      cityName: cityName,
      timezone: timezone
    })

    updateWatches(newWatches);
  }

  let deleteWatch = (id) => {
    let newWatches = Array.from(watches);

    newWatches.splice(id, 1);

    updateWatches(newWatches);
  }
  
  return (
    <div className="App">
      <FormNewWatch onSubmit={AddWatch}/>

      <div className="watches-grid">
        {watches.map((item, index) => (
          <Watch 
            key={index} 
            cityName={item.cityName} 
            timezone={item.timezone}
            onDelete={() => deleteWatch(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default App

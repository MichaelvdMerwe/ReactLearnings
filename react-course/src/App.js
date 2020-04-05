import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

    constructor(){
        super();

        this.state = {
            monsters: [
                {
                    id: 'mon1',
                    name: 'Frankenstein',
                },
                {
                    id: 'mon2',
                    name: 'Dracula',
                },
                {
                    id: 'mon3',
                    name: 'Zombie',
                },
            ]
        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map((monster) => <h1 key={monster.id}>{ monster.name }</h1>)
                }
            </div>
        )
    }
}

export default App;

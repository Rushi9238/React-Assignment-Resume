import './App.css';
import Experience from './Experience';
import Heading from './Heading';
import Hobbies from './Hobbies';
import Skill from './Skill';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Experience />
      <Skill />
      <Hobbies/>
    </div>
  );
}

export default App;

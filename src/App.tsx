import './App.css';

import { Checkbox } from './components/Checkbox/Checkbox';

function App() {

  return (
    <div className='container'>
      <form>
        <fieldset className='checkbox-group'>
          <legend>Checkbox Group</legend>
          <Checkbox
            id={"checked"}
            label={"Checked"}
            checked
          />
          <Checkbox
            id={"checked-disabled"}
            label={"Checked disabled"}
            checked
            disabled
          />
          <Checkbox
            id={"disabled"}
            label={"Disabled"}
            disabled
          />
          <Checkbox
            id={"indeterminate"}
            label={"Indeterminate"}
            indeterminate
          />
          <Checkbox
            id={"indeterminate-disabled"}
            label={"Indeterminate disabled"}
            indeterminate
            disabled
          />
        </fieldset>
      </form>
    </div>
  );
}

export default App;

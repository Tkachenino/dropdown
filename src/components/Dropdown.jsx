import {useState} from 'react';
import DropdownList from './DropdownList';

const Dropdown = () => {

  const [showList, setShowList] = useState(true)
  
  return (
    <div className="container">
    <div data-id="wrapper" className={`dropdown-wrapper ${showList ? "open" : ''}`}>
      <button data-id="toggle" className="btn" onClick={() => setShowList((prevState) =>   !prevState )}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList />
    </div>
  </div>
  )
};

export default Dropdown;
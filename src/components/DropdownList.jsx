import { useState } from 'react';
import DropdownItem from './DropdownItem';

const DropdownList = () => {
  const [list, setList] = useState([
    {title: 'Profile Information', active: true },
    {title: 'Change Password', active: false },
    {title: 'Become PRO', active: false },
    {title: 'Help', active: false },
    {title: 'Log Out', active: false }
  ])

  const changeStatus = (title) => {
      setList(list.map(i => {
        if (i.title === title) {
          return {...i, active: true }
        }
        return {...i, active: false }
      }))
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {list.map(item => <DropdownItem key={item.title} {...item} changeStatus={changeStatus}/>)}
  </ul> 
  )
};

export default DropdownList;
import PropTypes from 'prop-types';

const DropdownItem = ({title, active, changeStatus}) => {
  return (
    <li className={active ? "active" : ''}  onClick={() => changeStatus(title)}><a href="!#">{title}</a></li>
  )
};

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  changeStatus: PropTypes.func.isRequired
};

export default DropdownItem;
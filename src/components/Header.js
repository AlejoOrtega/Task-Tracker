import PropTypes from 'prop-types'
import Button from "./Button"
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {

const localtion = useLocation()

    return (
        <header class='header'>
           <h1>{title}</h1>
           {
               localtion.pathname === '/' &&
               (<Button color={showAdd ? 'Red' : 'Green' } text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
           
        </header>
    )
}

Header.defaultProps= {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const Style={
    headingStyle:{
        color: 'red',
        backgroundColor: 'black'
    }
}
export default    Header

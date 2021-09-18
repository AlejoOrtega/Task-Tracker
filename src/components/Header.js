import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header class='header'>
           <h1>{title}</h1>
           <button className='btn'>Add</button>
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

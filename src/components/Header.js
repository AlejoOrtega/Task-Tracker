import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title}) => {

    const onClick = ()=>{
        console.log("click")
    }

    return (
        <header class='header'>
           <h1>{title}</h1>
           <Button color='green' onClick={onClick}/>
           
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

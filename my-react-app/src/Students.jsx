//props = read-only properties that are shared between components
//        A Parent conponent can send data to a child component
//        <Component key=value/>
//        props.isStudent ? used to pass a Boolean expression

//proptypes = a mechanism tha ensures that the passed value is of the correct datatype
//            age = Proptypes.number

// defaultProps = default values for props in case they are not passed from the parent component
//                name: "Guest"

// import PropTypes from 'prop-types'

function Student ({age=0, name="Guest", isStudent=false}){
    // let defaultProps = {
    //     name: "Guest",
    //     age: 0,
    //     isStudent: false,
    // }
    return (
        <div className="student" >
            <p>Name: {name} </p>
            <p>Age: {age}</p> 
            <p>Student: {isStudent ? "Yes" : "No"}</p> 
        </div>
    );
}

// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool,

// }


export default Student
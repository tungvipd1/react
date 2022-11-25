import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''

    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert('click')
    }
    render() {

        return (
            <>
                <div>child component name: {this.props.name} - {this.props.age}</div>
            </>
        )
    }
}
export default ChildComponent;
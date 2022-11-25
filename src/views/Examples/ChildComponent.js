import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJob: [
            { id: 'arrJob1', title: 'develope', salary: '500' },
            { id: 'arrJob2', title: 'ba', salary: '1500' },
            { id: 'arrJob3', title: 'pm', salary: '500' }
        ]

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
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, address } = this.props;
        return (
            <>
                <div>child component name: {name} - {age} - {address}</div>
            </>
        )
    }
}
export default ChildComponent;
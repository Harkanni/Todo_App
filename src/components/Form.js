import {Component} from "react"

class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
    }
    handleChange(event){
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastNameChange(event){
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname
        })
    }
    render() {
        return (
            <div> 
                <h2>Form</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input onChange={(event) => this.handleChange(event)} value={this.state.firstname} type="text"></input>
                    <input onChange={(event) => this.handleLastNameChange(event)} type="text" value={this.state.lastname}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
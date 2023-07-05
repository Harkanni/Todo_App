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
    render() {
        return (
            <div> 
                <h2>Form</h2>
                <form>
                    <input onChange={(event) => this.handleChange(event)} value={this.state.firstname} type="text"></input>
                    <input onChange={(event) => this.handleLastNameChange(event)} type="text" value={this.state.lastname}></input>
                </form>
            </div>
        )
    }
}

export default Form
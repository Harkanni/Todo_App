import {Component} from "react"

class Form extends Component {
    state = {
        firstname: "",
    }
    handleChange(event){
        this.setState({
            firstname: event.target.value
        })
    }
    render() {
        return (
            <div> 
                <h2>Form</h2>
                <form>
                    <input onChange={(event) => this.handleChange(event)} value={this.state.firstname} type="text"></input>
                </form>
            </div>
        )
    }
}

export default Form
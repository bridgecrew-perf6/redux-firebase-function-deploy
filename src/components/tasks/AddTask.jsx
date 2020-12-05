import React, { Component } from 'react';
import {addTask} from '../../actions/taskActions'; 
import {connect} from 'react-redux';

class AddTask extends Component {
    state = {
        task : "",
        checked : "false"
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        document.getElementById('add_task_form').reset();
        console.log(this.state);
    }

    render() {
        return (
            <>
               <form
               id = "add_task_form"
                className="container"
                autoComplete="off" 
                onSubmit={this.handleSubmit}
                style={{marginTop : "38px"}}>
                    <div className="form-group"> 
                        <label htmlFor="task">Add Task</label>
                        <input type="text" className="form-control" 
                        id="task" placeholder="Enter email" 
                        onChange={this.handleChange} />
                    </div>
                    <button type="submit"
                     className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        addTask : (task) => {
            dispatch(addTask(task)) 
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTask);

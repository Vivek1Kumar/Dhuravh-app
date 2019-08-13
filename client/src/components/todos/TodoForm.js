import React, {Component } from "react"
import TextFieldGroup from '../common/TextFieldGroup';

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: ''
        }
        
        this.doSubmit = this.doSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    doSubmit(e) {
        e.preventDefault();
        if(this.state.task !== ''){
            const task =  this.state.task       
            this.props.onTaskSubmit(task);
            this.setState({task: ''})
        } else {
            alert("Please enter text")
        }
    }
    render(){
        return (
            <div className="commentForm vert-offset-top-2">
                <hr />
                <div className="clearfix">
                    <form onSubmit={this.doSubmit}>
                        <div className="form-group">
                            <label htmlFor="task" className="col-md-2 control-label">Task</label>
                            <div className="col-md-10">
                                <TextFieldGroup
                                    type="text" 
                                    className="form-control" 
                                    placeholder="What do you need to do?" 
                                    name="task"
                                    value={this.state.task}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-2 text-right">
                                <input type="submit" value="Save Item" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default TodoForm
import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class TodoBox extends Component {
    constructor(props){
        super(props)
        this.state  = {
            data: [
                {"id":"0000001","task":"Wake up","complete":"false"},
                {"id":"0000002","task":"Eat breakfast","complete":"false"},
                {"id":"0000003","task":"Go to work","complete":"false"}
            ]
        }
        this.handleNodeRemoval = this.handleNodeRemoval.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleToggleComplete = this.handleToggleComplete.bind(this)
    }

    generateId() {
        return Math.floor(Math.random()*900000) + 10000;
    }
    handleNodeRemoval(nodeId) {
        var data = this.state.data;
        data = data.filter(function (el) {
            return el.id !== nodeId;
        });
        this.setState({data});
    }
    handleSubmit(task) {
        var data = this.state.data;
        var id = this.generateId().toString();
        var complete = 'false';
        data = data.concat([{id, task, complete}]);
        this.setState({data});
    }
    handleToggleComplete(nodeId) {
        var data = this.state.data;
        for (var i in data) {
            if (data[i].id === nodeId) {
                data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
                break;
            }
        }
        this.setState({data});
    }
    render() {
        return (
            <section className="container vert-offset-top-2">
		  	    <div  className="col-md-6 m-auto">
                    <div className="well">
                        <h1>To do:</h1>
                        <TodoList   
                            data={this.state.data} 
                            removeNode={this.handleNodeRemoval} 
                            toggleComplete={this.handleToggleComplete} 
                        />
                        <TodoForm onTaskSubmit={this.handleSubmit} />
                    </div>
                </div>
		    </section>
            
        );
    }
}
export default TodoBox
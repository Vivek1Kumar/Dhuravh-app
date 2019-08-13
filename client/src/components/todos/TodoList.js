import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.removeNode = this.removeNode.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
    }
   
    removeNode(nodeId) {
		this.props.removeNode(nodeId);
	}
	toggleComplete(nodeId) {
		this.props.toggleComplete(nodeId);
	}
	render() {
		var listNodes = this.props.data.map((listItem) => {
                            return(
                                <TodoItem 
                                    key={listItem.id} 
                                    nodeId={listItem.id} 
                                    task={listItem.task} 
                                    complete={listItem.complete} 
                                    removeNode={this.removeNode} 
                                    toggleComplete={this.toggleComplete} 
                                />
                            );
                        })
		return (
			<ul className="list-group">
				{listNodes}
			</ul>
		);
    }
}
export default TodoList
import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

/**
 * Defines top level React component App
 * Has two states (variables): 
 * task: object with two fields, text and id. Text is an empty string for storing 
 * user input. 
 * tasks: array for storing task objects and later displaying 
 */
class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  /**
   * Function to set the state of current task with user input as its entered 
   * into form
   * @param {*} e User input in input section of form
   */
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  /**
   * Function to add current task to tasks array on click of submit button, and 
   * resets current task to a blank state for taking in next task from user
   * @param {*} e On click of submit button in form 
   */
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid()
      },
    });
  };

  /**
   * Renders HTML to App component
   * @returns div container with a form for taking user input and adding to task list,
   * with Overview component appended to bottom of form.
   */
  render() {
    const {task, tasks } = this.state;
    
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor = "taskInput"> Enter task </label>
          <input 
            onChange={this.handleChange}
            value={task.text}
            type = "text" 
            id = "taskInput"
          />
          <button type="submit"> Add Task </button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}

export default App;

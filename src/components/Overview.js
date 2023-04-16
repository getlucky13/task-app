import React from "react";
/**
 * Component to display unordered list of task objects to user
 * @param {*} props Array of task objects to be displayed to user
 * @returns HTML unordered list displaying all task objs in tasks array
 */
const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.index}. {task.text}</li>;
            })}
        </ul>
    );
};

export default Overview;
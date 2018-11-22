import { connect } from 'react-redux';
import React from 'react';
import '../../styles/modal.css';
import { toggleAddTask } from '../../actions/toggles';
import AddTaskForm from './AddTaskForm';

const mapStateToProps = state => ({
    adding: state.toggles.addTask.view
})
export const AddTaskModal = props => (
    <div className={`modal ${props.adding ? 'visible' : ''}`}>
        <AddTaskForm />
    </div>
);

export default connect(mapStateToProps)(AddTaskModal);
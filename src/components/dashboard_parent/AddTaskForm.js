import React from 'react';
import {
    Field,
    focus,
    reduxForm,
    reset
} from 'redux-form';
import { Input } from '../Input';
import { connect } from 'react-redux';
import { 
    nonEmpty, required, isTrimmed
} from '../../validators';
import { toggleAddTask } from '../../actions/toggles';
import '../../styles/add-task.css'
import { postTask } from '../../actions/tasks';

const mapStateToProps = state => ({
    error: state.tasks.error,
    adding: state.toggles.addTask.view,
    childId: state.toggles.addTask.childId
})
export const AddTaskForm = props => {
    let error;
    if(props.error) error = <div className='form-error'>{Object.values(props.error).join('\n')}</div>;
    return(
        <form className='add-task-form'
            onSubmit={props.handleSubmit(inp => {
                props.dispatch(toggleAddTask(null))
                props.dispatch(postTask(inp.taskName, inp.pointValue, props.childId))
                })
            }>
            <h3 className='add-task-heading'>add a task</h3>
            <div className='add-task-body'>
                    {error}
                    <label htmlFor='taskName'>Task:</label>
                    <Field component={Input}
                        name='taskName'
                        placeholder='ex. Clean your room.'
                        type='text'
                        id='taskName'
                        validate={[required, nonEmpty, isTrimmed]} 
                        />
                    <label htmlFor='pointValue'>Point Value:</label>
                    <Field component={Input}
                        name='pointValue'
                        placeholder='ex. 40'
                        type='number'
                        id='pointValue'
                        validate={[required, nonEmpty, isTrimmed]} 
                        />
                    <button className='add-task-btn'
                        type='submit'
                        disabled={props.pristine || props.submitting}>
                        add a task
                    </button>
                    <button className='cancel-add-task'
                        type='button'
                        onClick={() => {
                            props.reset()
                            props.dispatch(toggleAddTask());
                            }
                        }>
                        cancel
                    </button>
                </div>
        </form>
    );
}

export default reduxForm({
    form: 'add-task-form',
    onSubmitFail: (errors, dispatch) => dispatch(focus('add-task-form', 'taskName')),
    onSubmitSuccess: (error, dispatch) => dispatch(reset('add-task-form'))
})(connect(mapStateToProps)(AddTaskForm));
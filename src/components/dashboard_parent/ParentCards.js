import { Avatar } from '../Avatar';
import { connect } from 'react-redux';
import React from 'react';
import { fetchTasks } from '../../actions/tasks';
import '../../styles/childcards.css'
import { toggleAddTask } from '../../actions/toggles';
import { TaskList } from './TaskList';
import { PointsDisplay } from './PointsDisplay';
import AddTaskModal from './AddTaskModal';

const coin = require('../../images/coin_icon.png');
const trophy = require('../../images/trophy_icon.png');
const mapStateToProps = state => ({
    user: state.auth.user,
    childInfo: state.auth.user.childId
});
export class ParentCards extends React.Component {
    render(){
        const childCards = this.props.childInfo.map((child, i) => (
            <div className='child-card' key={i}>
                <p className='child-name'>{child.name}</p>
                <PointsDisplay 
                    currentPoints={child.currentPoints}
                    totalPoints={child.totalPoints} />
                <div className='avatar-task'>
                    <Avatar />
                    <TaskList child={child} />
                </div>
                <button type='button'
                    className='add-btn'
                    onClick={() => this.props.dispatch(toggleAddTask(child._id))}>
                    add a task
                </button>
            </div>
        ));
        return(
            <main className='parent-cards'>
                <h2>Welcome back <span>{this.props.user.name}!</span></h2>
                {childCards}
                <AddTaskModal />
            </main>
        )
    }
}

export default connect(mapStateToProps)(ParentCards)
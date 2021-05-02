import React from 'react';
import './AddItem.css';
import '../../'

class AddItem extends React.Component {

    minDate = new Date().toLocaleDateString('en-CA');

    state = {
        priority: '',
        content: '',
        date: this.minDate,
        isVerified: false,
        errorList: []
    }

    handleSubmitClick = () => {
        const { date, content, priority } = this.state;
        let errors = [];

        if(priority === '' && content < 10) {
            errors.push('The content of task cant be empty!');
            errors.push('You must choose a priority of task!');
            this.setState({
                errorList: [...errors]
            })
        }
        else if(priority === '') {
            errors.push('You must choose a priority of task!');
            this.setState({
                errorList: [...errors]
            })
        }
        else if(content < 10) {
            errors.push('The content of task cant be empty!');
            this.setState({
                errorList: [...errors]
            })
        } else {
            const add = this.props.addItem(content, date, priority);
            if(add) {
                this.setState({
                    priority: '',
                    content: '',
                    date: this.minDate,
                    isVerified: false,
                    errorList: []
                });
            }
            this.priorityColor = "black";
        }
    }

    handleClick = (priority) => {
        this.setState({
            priority
        });
        if(priority === 'low') {
            this.priorityColor = 'green';
        }
        if(priority === 'medium') {
            this.priorityColor = 'blue';
        }
        if(priority === 'high') {
            this.priorityColor = 'red';
        }
    }
    
    handleTextareaChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    render() {
        const { content, date, priority, errorList } = this.state;
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-" + this.minDate.slice(5);
        const errors = errorList.map(error => {
            return (
                <p className="error" key={error}>{error}</p>
            )
        });

        return (
            <div className="additem">
                <div className="header">
                    <h2>Add new task</h2>
                </div>
                    <textarea name="content" placeholder="Type your task content" value={content} onChange={this.handleTextareaChange} cols="30" rows="10"></textarea>
                    <input type="date" value={date} min={this.minDate} max={maxDate} onChange={this.handleDateChange}/>

                    <p>Choose task priority</p>
                    <button className="lowBtn" onClick={() => this.handleClick('low')}>Low</button>
                    <button className="mediumBtn" onClick={() => this.handleClick('medium')}>Medium</button>
                    <button className="highBtn" onClick={() => this.handleClick('high')}>High</button>

                    <p className="selected">Priority selected: <strong style={{'color': this.priorityColor}}>{priority !== '' ? priority : 'none'}</strong></p>

                    <button className="submit" onClick={this.handleSubmitClick}>ADD TASK</button>

                    {errors}
                    <br />
                <hr />
            </div>
            

        )
    }
}
export default AddItem;
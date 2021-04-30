import './Item.css';

const Item = (props) => {

    const { content, date, priority, id, deleteItem, updateItemStatus, finishDate, isFinished } = props;
    let priorityClass;

    if(props.priority === "normal") {
        priorityClass = "normal";
    } else if(props.priority === "low") {
        priorityClass = "low";
    } else if(props.priority === "high") {
        priorityClass = "high";
    }

    if(isFinished) {
        const finish = new Date(finishDate).toLocaleString();
        return (
            <li>
            <div className="item_header">
                <p>Has been finished: {finish}</p>
            </div>
            <div className="item_content">
                <p>{content}</p>
            </div>
            <button className="remove" onClick={() => deleteItem(id)}>Remove</button>
        </li>
        )

    } else {
        return (
            <li>
                <div className="item_header">
                    <p>{date}</p>
                    <span>Priority:<strong className={priorityClass}>{priority}</strong></span>
                </div>
                <div className="item_content">
                    <p>{content}</p>
                </div>
                <button className="remove" onClick={() => deleteItem(id)}>Remove</button>
                <button className="done" onClick={() => updateItemStatus(id)}>Done</button>
            </li>
        )
    }

}

export default Item;
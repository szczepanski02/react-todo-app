import React from 'react';
import Item from '../Item/Item';

const ItemList = (props) => {

    const { deleteItem, updateItemStatus } = props;

    const active = props.items.filter(item => item.isFinished === false).reverse();
    const done = props.items.filter(item => item.isFinished);

    const activeList = active.map(item => {
        return (
            <Item key={item.id} id={item.id} date={item.date} priority={item.priority} content={item.content} deleteItem={deleteItem} updateItemStatus={updateItemStatus} finishDate={item.finishDate} isFinished={item.isFinished}/>
        )
    });
    
    const doneList = done.map(item => {
        return (
            <Item key={item.id} id={item.id} date={item.date} priority={item.priority} content={item.content} deleteItem={deleteItem}  updateItemStatus={updateItemStatus} finishDate={item.finishDate} isFinished={item.isFinished}/>
        )
    });

    return (
        <React.Fragment>
            <div className="activeList">
                <h2>To do task list</h2>
                {activeList.length > 0 ? activeList : 'You dont have any tasks'}
            </div>

            <div className="doneList">
                <hr/>
                <h2>Last 5 done tasks:</h2>
                {doneList.length > 0 ? doneList : 'You dont have any done tasks'}
            </div>
        </React.Fragment>
    )

}

export default ItemList;
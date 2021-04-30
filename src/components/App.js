import React from 'react';
import './App.css';
import ItemList from './ItemList/ItemList';
import AddItem from './AddItem/AddItem';

class App extends React.Component {

  counter = 2;

  state = {
    items: []
  }

  componentDidMount() {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        items: data.items
      });
    })
    .catch((error) => console.log(error));
  }

  deleteItem = (id) => {
    const itemsList = [...this.state.items];
    const index = itemsList.findIndex(item => item.id === id);
    itemsList.splice(index, 1);
    this.setState({
      items: [...itemsList]
    })
    this.counter--;
  }

  updateItemStatus = (id) => {
    const itemsList = [...this.state.items];
    itemsList.forEach(item => {
      if(item.id === id) {
        item.isFinished = true;
        item.finishDate = new Date().getTime();
      }
      this.setState({
        items: [...itemsList]
      });
    });
  }

  addItem = (content, date, priority) => {
    const item = {
      id: this.counter,
      content,
      date,
      priority,
      isFinished: false,
      finishDate: null
    }
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
    this.counter++
    return true;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <AddItem addItem={this.addItem}/>
          <ItemList items={this.state.items} deleteItem={this.deleteItem} updateItemStatus={this.updateItemStatus}/>
        </div>
      </div>
    );
  }
}
export default App;

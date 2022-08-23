import { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import AddItem from './components/Content/AddItem';
import SearchItem from './components/Content/SearchItem';

function App() {
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     item: 'Item 1',
  //     checked: true
  //   },
  //   {
  //     id: 2,
  //     item: 'Item 2',
  //     checked: false
  //   },
  //   {
  //     id: 3,
  //     item: 'Item 3',
  //     checked: false
  //   },
  // ]);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('SHOPPING_LIST')) || []);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    localStorage.setItem('SHOPPING_LIST', JSON.stringify(items))
  }, [items]);
  // const saveAndSetItem = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem('SHOPPING_LIST', JSON.stringify(newItems))
  // }


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }


  const handelClick = (id) => {
    const listItems = items?.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }
  const handelDelete = (id) => {
    const listItems = items?.filter((item) => item.id !== id);
    setItems(listItems);
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    // add item
    addItem(newItem);
    setNewItem('');
    // console.log('item', newItem);
  }
  return (
    <div className="App">
      <Header title="List Items" />
      <AddItem
        handelSubmit={handelSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handelClick={handelClick}
        handelDelete={handelDelete}
      />
      <Footer />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import AddItem from './components/Content/AddItem';
import SearchItem from './components/Content/SearchItem';
import apiRequest from './components/apiRequest';

function App() {
  const API_URL = "http://localhost:3500/items"

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Can not find Data.");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        // console.log('error', error.message);
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)

  }, []);

  // const saveAndSetItem = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem('SHOPPING_LIST', JSON.stringify(newItems))
  // }


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(myNewItem)
    }
    const result = (async () => await apiRequest(API_URL, postOptions))();

    if (result) setFetchError(result.message);
    console.log(result);
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
      <main>
        {isLoading && <p>Loading........</p>}
        {fetchError && <p style={{ color: "red", padding: "10px" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&
          <Content
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
            handelClick={handelClick}
            handelDelete={handelDelete}
          />
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;

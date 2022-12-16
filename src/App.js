import { useState, useEffect } from 'react';
import { AnimeCards } from './components/AnimeCards';
import { Info } from './components/Info';
import { AddToList } from './components/AddToList';
import './components/style.css';

function App() {
  const [search, setSearch] = useState('hyouka');
  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setInfo(!info);
  };

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json();
    console.log(resData)
    setData(resData.data);
  }

  useEffect(() => {
    getData()
  }, [search]);

  if(info) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Naruto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='container'>
        <div className='animeInfo'>
          {/* Creating popup from scratch. Will render when the info gets updated, then closes when you click anywhere out of it */}
          {info && (
            <Info info={info} toggle={toggleModal} />
          )}
        </div>
        <div className='animeRow'>
          <h2 className="animeTitle">
          </h2>
          <div className='row'>
            <AnimeCards
              animeData={data}
              setAnimeInfo={setInfo}
              animeComponent={AddToList}
              toggle={toggleModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

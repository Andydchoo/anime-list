import { useState, useEffect } from 'react';
import { AnimeCards } from './components/AnimeCards';
import { Info } from './components/Info';
import { AddToList } from './components/AddToList';
import { RemoveFromList } from './components/RemoveFromList';
import './components/style.css';

function App() {
  const [search, setSearch] = useState('hyouka');
  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const [modal, setModal] = useState(true);
  const [list, setList] = useState([]);

  const addTo = (anime) => {
    const index = list.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id
    })

    if (index < 0) {
      const listArray = [...list, anime]
      setList(listArray);
    }
  }

  const remove = (anime) => {
    const array = list.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id
    })
    setList(array)
  }

  const toggleModal = (e) => {
    setInfo(!info);
  };

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json();
    console.log(resData)
    setData(resData.data);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      enter();
    }
  };

  const enter = () => {
    getData()
  };

  useEffect(() => {
    getData()
  }, []);

  if (info) {
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
        onKeyDown={handleKeyDown}
      />
      <button onClick={enter}>Search</button>
      <div className='container'>
        <div className='animeInfo'>
          {/* Creating popup from scratch. Will render when the info gets updated, then closes when you click anywhere out of it */}
          {info && (
            <Info info={info} toggle={toggleModal} />
          )}
        </div>
        <div className='animeRow'>
          <h2 className="animeTitle">
            Anime:
          </h2>
          <div className='row'>
            <AnimeCards
              animeData={data}
              setAnimeInfo={setInfo}
              animeComponent={AddToList}
              toggle={toggleModal}
              handleList={(anime) => addTo(anime)}
            />
          </div>
          <h2 className="animeTitle">
            My List:
          </h2>
          <div className='row'>
            <AnimeCards
              animeData={list}
              setAnimeInfo={setInfo}
              animeComponent={RemoveFromList}
              toggle={toggleModal}
              handleList={(anime) => remove(anime)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react'

export const AnimeCards = ({ animeData, animeInfo, setAnimeInfo, animeComponent, handleList }) => {

  const AddToList = animeComponent;

  return (
    <div>
      {
        animeData ? (
          animeData.map((anime, index) => {
            return (
              <div className="card">
                <img src={anime.images.jpg.large_image_url} alt="anime" key={index} onClick={() => setAnimeInfo(anime)} />
                <div className="animeInfo">
                </div>
                <div className="cardOverlay" onClick={() => handleList(anime)}>
                  <h4>{anime.title}</h4>
                  <AddToList />
                </div>
              </div>
            )
          })
        ) : "Nothing here"
      }
    </div>
  )
}

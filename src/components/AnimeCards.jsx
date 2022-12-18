import React from 'react'

export const AnimeCards = ({ animeData, animeInfo, setAnimeInfo, animeComponent }) => {

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
                  <h4>{anime.title}</h4>
                </div>
                <div className="cardOverlay">
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

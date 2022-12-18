// Issues:
  // - Clicking anywhere will close modal
  // - Close button needs to go on top
  // - Modal appears to be too high up
import React from 'react'
import { AddToList } from './AddToList'

export const Info = (props) => {
  const { title, status, rank, score, episodes, synopsis } = props.info

  return (
    <>
      <div className="modal">
        <div className='modalOverlay' onClick={props.toggle}>
          <div className="modal-content">
            <button className='close-modal' onClick={props.toggle}>
              x
            </button>
            <h3>{title}</h3>
            <br />
            <img src={props.info.images.jpg.large_image_url} alt="Anime" />
            <div className="info">
              <h4>Synopsis:
                <br/>
                {synopsis}
              </h4>
              <h4>Mal Rank: {rank}</h4>
              <h4>Score: {score}/10</h4>
              <h4>Episodes: {episodes}</h4>
              <h4>Status: {status}</h4>
              <AddToList />
              
              <br />
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

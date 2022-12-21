// Issues:
  // - Clicking anywhere will close modal
  // - Style close button
  // - Resolved: Modal appears to be too high up
import React from 'react'
import { AddToList } from './AddToList'

export const Info = (props) => {
  const { title, status, rank, score, episodes, synopsis } = props.info

  return (
      <div className="modal">
        <div className='modalOverlay' onClick={props.toggle}>
          <div className="modal-content">
            <button className='close-modal' onClick={props.toggle}>
              x
            </button>
            <h3 className="modalTitle">{title}</h3>
            <br />
            <img className="largeImg" src={props.info.images.jpg.large_image_url} alt="Anime" />
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
  )
}

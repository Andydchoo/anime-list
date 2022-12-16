import React from 'react'
import { AddToList } from './AddToList'

export const Info = (props) => {
  const { title, status, rank, score, episodes, synopsis } = props.info

  return (
    <>
      <div className="modal">
        <div className='modalOverlay' onClick={props.toggle}>
          <div className="modal-content">
            <h3>{title}</h3>
            <br />
            <img src={props.info.images.jpg.large_image_url} alt="Anime" />
            <div className="info">
              <h4>Mal Rank: {rank}</h4>
              <h4>Score: {score}</h4>
              <h4>Episodes: {episodes}</h4>
              <h4>Status: {status}</h4>
              <AddToList />
              <button
                className='close-modal'
                onClick={props.toggle}
              >
                x
              </button>
              <br />
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

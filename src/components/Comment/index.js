import React, { useState } from 'react'
import axios from 'axios'

const Comment = ({ comments, setComments, diningHallsId }) => {

    const [comment, setComment] = useState('')

    const submitComment = () => {

        const newComment = {
            "text": comment,
            "diningHallsId": parseInt(diningHallsId)
        }

        axios.post(`http://localhost:8000/comments`, newComment)
        .then(setComments(comments => [...comments, newComment]))

        setComment('')
    }

    return (
        <div>
            <input value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit</button>
        </div>
    )
}

export default Comment
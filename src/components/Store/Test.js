import React, {useState, useEffect} from 'react';
import Comment from '../Comment';

function Test(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [comments, setComments] = useState([])

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        const id = props.match.params.id;
        fetch(`http://localhost:8000/diningHalls?id=${id}`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
        .then(
            fetch(`http://localhost:8000/comments?diningHallsId=${id}`)
            .then(res => res.json())
            .then(setComments)
        )
        .catch(console.error)

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
        <ul>
            <h1>mapping</h1>
            {items.map(item => (
            <li key={item.id}>
                <h1>{item.name}</h1>
                <h1>{item.address}</h1>
                <h1>{item.rating}</h1>
                
                <ul>
                    <h2>Comments</h2>
                    {comments.map((comment)=>
                        <li key={comment.id}>
                            <h1>{comment.text}</h1>
                        </li>
                    )}
                    <Comment comments={items.comments} setComments={setComments} diningHallsId={props.match.params.id} />
                </ul>
            </li>
            ))}
        </ul>
        );
    }
  }

  export default Test;
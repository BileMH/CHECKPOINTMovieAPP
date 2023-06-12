import React from 'react'
import Card from 'react-bootstrap/Card';
import MovieRating from '../Raiting/Raiting';
const mouvieCard = ({mouvie}) => {
  return (
    <div className='Cards' style={{marginRight:'20px'}}>
      <Card style={{ width: '18rem' , margin :'30px auto' }}>
      <Card.Img variant="top" src= {mouvie.posterUrl} />
      <Card.Body>
        <Card.Title>{mouvie.title}</Card.Title>
        <Card.Text> {mouvie.description} </Card.Text>
        <MovieRating movieRating={mouvie.rate} isMovieRating={true}/>
      </Card.Body>
    </Card>

    </div>
  )
}

export default mouvieCard
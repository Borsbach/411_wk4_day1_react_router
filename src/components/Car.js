import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from '@material-ui/core'

const Car = (props) => {
  const id = props.match.params.id;
  const car = cars.find((c) => c.id == id)
    return (
      <div>
        <Container maxWidth='sm' className="car-container">
          <Paper className="car-paper">
            <h2>{car.Name.toUpperCase()}</h2>
            {
              Object.keys(car).map((key, idx) => {
                return <Chip label={`${key}: ${car[key]}`}></Chip>
              })
            }
          </Paper>
        </Container>
      </div>
  )
}

export default Car
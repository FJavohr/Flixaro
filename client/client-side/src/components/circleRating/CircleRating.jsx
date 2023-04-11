import React from 'react'
import './CircleRating.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
//передаём рейтинг и отрисовываем в виде кружка. 
const CircleRating = ({rating}) => {
  return (
    <div className='circleRating'>
      <CircularProgressbar
        value={rating}
        //максимально возможная оценка 
        maxValue={10}
        //значение рейтинга
        text={rating}
        // цвет в зависимости от рейтинга
        styles={buildStyles({
          pathColor:
          rating < 5 ? "red": 
          rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  )
}

export default CircleRating
import React from 'react';
...
export default function AnimalDetails({ diet, scientificName }) {
  return(
    <div className="details">
      <h4>Details:</h4>
      <div>
        Scientific Name: {scientificName}.
      </div>
      <div>
        Diet: {diet.map(food => convertFood(food)).join(' ')}
      </div>
    </div>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired,
}
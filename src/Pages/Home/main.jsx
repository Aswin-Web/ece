import React from 'react'
import Carosouel from './Carosouel'
// import ActivityCard from './Cards' 
import PlacedStudents from './Placed'
import Naac_work from './naac_work'


const main = () => {
  return (
    <div>
      <div className="caroseuel-body">
        <Carosouel />
      </div>
      <div>
        <Naac_work />
        {/* <ActivityCard /> */}
        <PlacedStudents title="Placed Students" />
        <PlacedStudents title="Placed Companies" />
      </div>
    </div>
  );
}

export default main
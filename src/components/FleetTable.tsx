import React from 'react'
import {
  Aircraft as OnAirAircraft,
} from 'onair-api';

export interface FleetTableProps {
  fleet: OnAirAircraft[],
}

function FleetTable() {
  return (
    <div>FleetTable</div>
  )
}

export default FleetTable
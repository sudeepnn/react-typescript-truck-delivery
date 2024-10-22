import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);
  const [truckcount, setTruckcount] = useState<number>(0);
  const [isTruckLeft, setIsTruckLeft] = useState<boolean>(false);

  const handleTruckDeparture = () => {
    if(warehouseItems<=5){
      setIsTruckLeft(true);
    }
    const input = window.prompt('Enter the number of units:');


    if (input !== null) {
      const numberOfTrucks:number = parseInt(input, 10);

      if(warehouseItems-numberOfTrucks<0){
        alert('please entry the number with in range')
      }
      else if(numberOfTrucks<=5){
        alert('Truck can take min of 5 units')
      }
      else if(numberOfTrucks>20){
        alert('Truck can take max of 20 units')
      }


    else  {
      setWarehouseItems(warehouseItems-numberOfTrucks)
      setTruckcount(truckcount+1)
    }

    
  }
    
    
  };

  

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus  truckcnt={truckcount} isTruckLeft={isTruckLeft} onTruckDeparture={handleTruckDeparture} />
      </div>
    </div>
  );
};

export default LogisticsDashboard;

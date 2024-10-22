import React from 'react';

// Define props for DeliveryStatus
interface DeliveryStatusProps {
  truckcnt:number,
  isTruckLeft: boolean;
  onTruckDeparture: () => void; // Function to call when the truck leaves
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ isTruckLeft, onTruckDeparture,truckcnt }) => {
  return (
    <div className="delivery-status">
      <h2>Delivery Status</h2>
      <p>{ `The ${truckcnt} truck has left the warehouse.` }</p>
      {/* Button to dispatch the truck */}
      {!isTruckLeft && <button onClick={onTruckDeparture}>Dispatch Truck</button>}
    </div>
  );
};

export default DeliveryStatus;

import React from 'react';
import { InfiniteScrollTable } from '../components/InfiniteScrollTable';
import { Button } from '../components/ui/button';
import { Avatar } from '../components/ui/avatar';
import { TableCell, TableRow } from '../components/ui/table';

export const FlightList = ({
  onSelect,
  route = {
    origin: 'London',
    destination: 'New York',
    label: 'Outbound',
  },
}) => {
  // 表格列配置
  const columns = [
    { header: 'Airline', className: 'py-4' },
    { header: 'Departure' },
    { header: 'Arrival' },
    { header: 'Duration' },
    { header: 'Stops' },
    { header: 'Price' },
    { header: '' },
  ];

  const fetchFlights = async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    return generateFlightData(page, route);
  };

  const generateFlightData = (pageNum, route, perPage = 5) => {
    const baseTime = 8;
    const data = [];

    const priceBase = route.label === 'Return' ? 550 : 500;

    for (let i = 0; i < perPage; i++) {
      const departureHour = baseTime + (pageNum - 1) * perPage * 2 + i * 2;
      if (departureHour > 22) return data;

      const departureTime = `${departureHour}:00 ${departureHour < 12 ? 'AM' : 'PM'}`;
      const arrivalHour = departureHour + 3;
      const arrivalTime = `${arrivalHour > 12 ? arrivalHour - 12 : arrivalHour}:00 ${arrivalHour < 12 ? 'AM' : 'PM'}`;

      const price = priceBase + (departureHour - 8) * 25;

      data.push({
        id: (pageNum - 1) * perPage + i + 1,
        departure: departureTime,
        arrival: arrivalTime,
        duration: '3h',
        stops: 'Non-stop',
        price: `$${price}`,
        airlineIcon: `hsl(${(i * 40) % 360}, 70%, 50%)`,
        origin: route.origin,
        destination: route.destination,
      });
    }

    return data;
  };

  const renderFlightRow = (flight, index) => (
    <TableRow key={flight.id} className="border-t hover:bg-gray-50">
      <TableCell className="py-4">
        <Avatar className="h-10 w-10 rounded-full">
          <div
            className="h-full w-full rounded-full"
            style={{ backgroundColor: flight.airlineIcon }}
          ></div>
        </Avatar>
      </TableCell>
      <TableCell className="text-gray-900 font-medium">{flight.departure}</TableCell>
      <TableCell className="text-gray-900 font-medium">{flight.arrival}</TableCell>
      <TableCell className="text-gray-900 font-medium">{flight.duration}</TableCell>
      <TableCell className="text-gray-600">{flight.stops}</TableCell>
      <TableCell className="text-gray-900 font-medium">{flight.price}</TableCell>
      <TableCell className="text-right">
        <Button
          variant="ghost"
          className="text-gray-600 hover:text-indigo-600 font-medium"
          onClick={() => onSelect(flight)}
        >
          Select
        </Button>
      </TableCell>
    </TableRow>
  );

  return (
    <InfiniteScrollTable
      columns={columns}
      fetchData={fetchFlights}
      renderRow={renderFlightRow}
      loadingMessage={`Loading more ${route.label.toLowerCase()} flights...`}
      emptyMessage={`No more ${route.label.toLowerCase()} flights available`}
    />
  );
};

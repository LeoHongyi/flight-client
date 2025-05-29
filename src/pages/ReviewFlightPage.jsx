import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import { useNavigate } from 'react-router-dom';

function FlightReviewPage() {
  const navigate = useNavigate();

  const selectedFlights = {
    outbound: {
      type: 'Economy',
      origin: 'San Francisco',
      destination: 'Hong Kong',
      date: 'Mon, Jul 16',
      departureTime: '12:00 PM',
      arrivalTime: '5:00 PM',
      duration: '+1 day',
      image: '/assets/fly1.png',
    },
    return: {
      type: 'Economy',
      origin: 'Hong Kong',
      destination: 'San Francisco',
      date: 'Mon, Jul 22',
      departureTime: '10:00 AM',
      arrivalTime: '10:00 AM',
      duration: 'Same day',
      image: '/assets/fly2.png',
    },
  };

  const fareDetails = {
    baseFare: 1200,
    taxes: 200,
    total: 1400,
  };

  const handleContinueToPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-10">Review your flights</h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Outbound</h2>
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 flex-1">
              <div className="text-sm text-gray-500 mb-1">{selectedFlights.outbound.type}</div>
              <h3 className="text-lg font-semibold mb-1">
                {selectedFlights.outbound.origin} to {selectedFlights.outbound.destination}
              </h3>
              <p className="text-gray-700 mb-4">
                {selectedFlights.outbound.date} · {selectedFlights.outbound.departureTime} -{' '}
                {selectedFlights.outbound.arrivalTime} {selectedFlights.outbound.duration}
              </p>
            </div>
            <div className="md:w-64 h-40 md:h-auto overflow-hidden bg-blue-100">
              <div className="w-full h-full bg-gradient-to-b from-blue-300 to-blue-500 flex items-center justify-center">
                <img
                  src={`${selectedFlights.outbound.image}`}
                  alt="Outbound flight"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Return</h2>
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 flex-1">
              <div className="text-sm text-gray-500 mb-1">{selectedFlights.return.type}</div>
              <h3 className="text-lg font-semibold mb-1">
                {selectedFlights.return.origin} to {selectedFlights.return.destination}
              </h3>
              <p className="text-gray-700 mb-4">
                {selectedFlights.return.date} · {selectedFlights.return.departureTime} -{' '}
                {selectedFlights.return.arrivalTime}
              </p>
            </div>
            <div className="md:w-64 h-40 md:h-auto overflow-hidden bg-blue-100">
              <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                <img
                  src={`${selectedFlights.return.image}`}
                  alt="Outbound flight"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Fare summary</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Base fare</span>
                <span className="font-medium">${fareDetails.baseFare}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Taxes, fees, and carrier charges</span>
                <span className="font-medium">${fareDetails.taxes}</span>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${fareDetails.total}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 flex justify-end">
        <Button
          size={'lg'}
          variant={'primary'}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 h-12 rounded-md"
          onClick={handleContinueToPayment}
        >
          Continue to payment
        </Button>
      </div>
    </div>
  );
}

export { FlightReviewPage };

import React from 'react';

import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

function MyBookingsPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Upcoming</h2>

          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-64 h-64 mb-4">
                  <img
                    src="/assets/past_empty.png"
                    alt="Empty box illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">No upcoming bookings</h3>
                <p className="text-gray-600 mb-6">
                  You don't have any upcoming bookings. Start planning your next trip now.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Past</h2>

          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-64 h-64 mb-4">
                  <img
                    src="/assets/upcoming_empty.png"
                    alt="Box with plant illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">No past bookings</h3>
                <p className="text-gray-600">
                  You don't have any past bookings. Your booking history will appear here once
                  you've completed a flight.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default MyBookingsPage;

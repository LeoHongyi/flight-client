import { FlightList } from '../../components/FlightList';
function FlightSelectionPage() {
  const handleSelectFlight = (flight) => {
    console.log('Selected flight:', flight);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Select your outbound flight</h1>

        <FlightList onSelect={handleSelectFlight} />
      </main>
    </div>
  );
}

export { FlightSelectionPage };

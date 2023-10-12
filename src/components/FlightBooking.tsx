import { Button } from "./ui/button";
import { TbArrowsExchange } from "react-icons/tb";
import AirportsDropdown from "./AirportsDropdown";
import OneWayReturn from "./OneWayReturn";
import { useEffect, useState } from "react";
import { airports } from "../data/airports";
import SingleDatePicker from "./SingleDatePicker";
import ReturnDatePicker from "./ReturnDatePicker";
import PassengerSelection from "./PassengerSelection";
import { Input } from "./ui/input";

const FlightBooking = () => {
  const [isReturnFlight, setIsReturnFlight] = useState<boolean>(true);

  const [departureAirport, setDepartureAirport] = useState<string>("");
  const [arrivalAirport, setArrivalAirport] = useState<string>("");
  const [departureAirports, setDepartureAirports] = useState([...airports]);
  const [arrivalAirports, setArrivalAirports] = useState([...airports]);
  const [switched, setSwitched] = useState(false);
  const [hasPromoCode, setHasPromoCode] = useState(false);

  useEffect(() => {
    setDepartureAirports(() =>
      airports.filter((airport) => airport.AirportCode !== arrivalAirport)
    );

    setArrivalAirports(() =>
      airports.filter((airport) => airport.AirportCode !== departureAirport)
    );
  }, [departureAirport, arrivalAirport]);

  const handleSwitchAirports = () => {
    setDepartureAirport(arrivalAirport);
    setArrivalAirport(departureAirport);
    setSwitched(!switched);
  };

  return (
    <div className="flex flex-col h-full justify-around">
      <OneWayReturn setIsReturnFlight={setIsReturnFlight} />
      <div className={`flex  h-10 items-center border border-gray-500`}>
        <div
          className={`flex ${
            switched ? "flex-row-reverse" : ""
          } h-full w-full `}
        >
          <AirportsDropdown
            departing={switched}
            airports={departureAirports}
            setArrivalAirport={setArrivalAirport}
            setDepartureAirport={setDepartureAirport}
          />
          <TbArrowsExchange
            className="h-full w-1/12 stroke-1	 text-gray-500 cursor-pointer hover:text-gray-600 "
            onClick={handleSwitchAirports}
          />
          <AirportsDropdown
            departing={!switched}
            airports={arrivalAirports}
            setArrivalAirport={setArrivalAirport}
            setDepartureAirport={setDepartureAirport}
          />{" "}
        </div>
        {isReturnFlight ? <ReturnDatePicker /> : <SingleDatePicker />}
        <PassengerSelection />
      </div>

      <div className="flex gap-5 items-center self-end">
        {hasPromoCode ? (
          <Input placeholder="Promo Code" />
        ) : (
          <div onClick={() => setHasPromoCode(true)}>+ Add Promo Code</div>
        )}

        <Button className="bg-red-500 min-w-[150px]">Show Flights</Button>
      </div>
    </div>
  );
};

export default FlightBooking;

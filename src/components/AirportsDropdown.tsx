import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";
import { AirportsType } from "./types";

type Props = {
  departing: boolean;
  airports: AirportsType[];
  setDepartureAirport: React.Dispatch<React.SetStateAction<string>>;
  setArrivalAirport: React.Dispatch<React.SetStateAction<string>>;
};

const AirportsDropdown = ({
  departing,
  airports,
  setDepartureAirport,
  setArrivalAirport,
}: Props) => {
  const departureArrival = departing ? "Departure Airport" : "Arrival Airport";
  const [selectedAirport, setSelectedAirport] = useState<string>("");

  const handleSelectChange = (value: any) => {
    const airport = airports.find((airport) => airport.AirportCode === value);
    if (airport) {
      if (departing) {
        setDepartureAirport(airport?.AirportCode);
      } else {
        setArrivalAirport(airport?.AirportCode);
      }
    }

    airport
      ? setSelectedAirport(`${airport.City}, ${airport.AirportCode}`)
      : setSelectedAirport("");
  };

  //   useEffect(() => {
  //     // Check if airports have been switched
  //     if (switched) {
  //       if (departing) {
  //         setSelectedAirport(arrivalAirport);
  //       } else {
  //         setSelectedAirport(departureAirport);
  //       }
  //     }
  //     if (departing) {
  //       setSelectedAirport(arrivalAirport);
  //     } else {
  //       setSelectedAirport(departureAirport);
  //     }
  //   }, [switched]);

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger
        id="selectTrigger"
        className=" h-full border-none rounded-none focus:ring-red-500 focus:ring-offset-1 focus:ring-1"
      >
        <SelectValue placeholder={departureArrival}>
          {selectedAirport ? selectedAirport : departureArrival}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <ScrollArea className="h-[200px] pr-5 ">
          {airports.map((airport, i) => (
            <SelectItem
              value={airport.AirportCode}
              key={i}
              className="flex flex-row justify-between border-b border-b-slate-300 py-2 "
              id="selectItem"
            >
              <div className="flex flex-col w-full gap-2 ">
                <p className="font-bold">{airport.City}</p>
                <p>{airport.Country}</p>
              </div>
              <div className="flex flex-col text-end w-full">
                <p className="font-bold">{airport.AirportCode}</p>
                <p>{airport.AirportName}</p>
              </div>
            </SelectItem>
          ))}
        </ScrollArea>
      </SelectContent>
    </Select>
  );
};

export default AirportsDropdown;

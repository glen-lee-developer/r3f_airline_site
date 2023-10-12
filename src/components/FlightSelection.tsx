import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { GiCommercialAirplane, GiPassport } from "react-icons/gi";
import { MdOutlineManageHistory, MdOutlineAccessTime } from "react-icons/md";
import FlightBooking from "./FlightBooking";
import ManageBooking from "./ManageBooking";
import CheckIn from "./CheckIn";

type Props = {};

const FlightSelection = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-auto  ">
      <Tabs defaultValue="flight" className="w-[75vw] grid grid-rows-[1fr,5fr]">
        <TabsList className="justify-self-center  grid  grid-cols-4 bg-red-500  text-white rounded-b-none rounded-t-2xl">
          <TabsTrigger
            className="rounded-tl-xl  hover:bg-red-400"
            value="flight"
          >
            <GiCommercialAirplane className="mr-2" />
            Book a Flight
          </TabsTrigger>
          <TabsTrigger className=" hover:bg-red-400" value="manage">
            <MdOutlineManageHistory className="mr-2" />
            Manage Booking
          </TabsTrigger>
          <TabsTrigger className="  hover:bg-red-400" value="checkIn">
            <GiPassport className="mr-2" />
            Check In
          </TabsTrigger>
          <TabsTrigger
            className="rounded-tr-xl hover:bg-red-400"
            value="status"
          >
            <MdOutlineAccessTime className="mr-2" />
            Flght Status
          </TabsTrigger>
        </TabsList>

        <TabsContent
          className="m-0 px-5 py-2 bg-white rounded-2xl border"
          value="flight"
        >
          <FlightBooking />
        </TabsContent>
        <TabsContent
          className="m-0 px-5 py-2 bg-white rounded-2xl border"
          value="manage"
        >
          <ManageBooking />
        </TabsContent>
        <TabsContent
          className="m-0 px-5 py-2 bg-white rounded-2xl border"
          value="checkIn"
        >
          <CheckIn />
        </TabsContent>
        <TabsContent
          className="m-0 px-5 py-2 bg-white rounded-2x border"
          value="status"
        >
          Flights Status
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FlightSelection;

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

type Props = {};

const ManageBooking = (props: Props) => {
  return (
    <div className="flex flex-col h-full justify-around ">
      <Alert>
        <AlertTitle>Log in or manually find your trip</AlertTitle>
        <AlertDescription>
          You can find your booking reference on your ticket. It is the
          six-character code made up from letters and numbers.
        </AlertDescription>
      </Alert>
      <div className="flex gap-2">
        <Input placeholder="Last Name" />
        <Input placeholder="Booking Reference" />
        <Button className="bg-red-500 min-w-[150px]">Manage Booking</Button>
      </div>
    </div>
  );
};

export default ManageBooking;

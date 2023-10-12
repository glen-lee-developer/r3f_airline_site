type Props = {};

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const PassengerSelection = (props: Props) => {
  const [numberOfAdults, setNumberOfAdults] = useState<number>(0);
  const [numberOfChildren, setNumberOfChildren] = useState<number>(0);
  const [numberOfInfants, setNumberOfInfants] = useState<number>(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 px-2">
          <p>Passengers</p>
          <p>{numberOfAdults + numberOfChildren + numberOfInfants}</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Passengers</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={(event) => event.preventDefault()}>
          <PassengerButton
            passengerType="Adults"
            passengerNumber={numberOfAdults}
            setPassengerNumber={setNumberOfAdults}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(event) => event.preventDefault()}>
          <PassengerButton
            passengerType="Children"
            passengerNumber={numberOfChildren}
            setPassengerNumber={setNumberOfChildren}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={(event) => event.preventDefault()}>
          <PassengerButton
            passengerType="Infants"
            passengerNumber={numberOfInfants}
            setPassengerNumber={setNumberOfInfants}
          />
        </DropdownMenuItem>
        <DropdownMenuLabel>Class</DropdownMenuLabel>
        <DropdownMenuItem onClick={(event) => event.preventDefault()}>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Economy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Premium(Business/First)</Label>
            </div>
          </RadioGroup>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface PassengerButtonProps {
  passengerType: string;
  passengerNumber: number;
  setPassengerNumber: React.Dispatch<React.SetStateAction<number>>;
}
const PassengerButton = ({
  passengerType,
  passengerNumber,
  setPassengerNumber,
}: PassengerButtonProps) => {
  const handlePassengerDecrement = () => {
    if (passengerNumber > 0) {
      setPassengerNumber((prevPassengerNumber) => prevPassengerNumber - 1);
    }
  };

  const handlePassengerIncrement = () => {
    if (passengerNumber < 9) {
      setPassengerNumber((prevPassengerNumber) => prevPassengerNumber + 1);
    }
  };

  return (
    <div className="flex justify-between items-center gap-4 w-full">
      <p>{passengerType}</p>
      <div className="flex gap-2 items-center">
        <Button onClick={handlePassengerDecrement}>-</Button>
        <div className="w-5 text-center">{passengerNumber}</div>
        <Button onClick={handlePassengerIncrement}>+</Button>
      </div>
    </div>
  );
};

export default PassengerSelection;

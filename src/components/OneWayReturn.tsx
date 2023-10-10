import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

type Props = {
  setIsReturnFlight: React.Dispatch<React.SetStateAction<boolean>>;
};

const OneWayReturn = ({ setIsReturnFlight }: Props) => {
  const handleRadioButtonChange = (value: string) => {
    value === "option-two" ? setIsReturnFlight(false) : setIsReturnFlight(true);
  };

  return (
    <RadioGroup
      defaultValue="option-one"
      className="flex"
      onValueChange={handleRadioButtonChange}
    >
      <div className="flex items-center space-x-2 ">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Return</Label>
      </div>
      <div className="flex items-center space-x-2 ">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">One Way</Label>
      </div>
    </RadioGroup>
  );
};

export default OneWayReturn;

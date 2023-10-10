import { Button } from './ui/button';
import { Separator } from './ui/separator';
import LogoSVG from "../assets/img/airline_logo.svg";
import { HiOutlineGlobe, HiOutlineSearch, HiOutlineUserCircle } from 'react-icons/hi';


type Props = {}

const Header = (props: Props) => {
  return (
    <header className='  h-20 flex justify-between px-24 absolute z-10 top-0 left-0 right-0'>
        <img className="h-full"  src={LogoSVG} alt="Logo" />
        <nav className='flex justify-center items-center'>
            <Button  variant="link">Test 1</Button>
            <Separator className='w-5 bg-gray-500 rotate-90'/>
            <Button  variant="link">Test 2</Button>
            <Separator className='w-5 bg-gray-500 rotate-90'/>
            <Button  variant="link">Test 3</Button>
            <Separator className='w-5 bg-gray-500 rotate-90'/>
            <Button  variant="link">Test 4</Button>
            <Separator className='w-5 bg-gray-500 rotate-90'/>
            <Button  variant="link">Test 5</Button>
            <Separator className='w-5 bg-gray-500 rotate-90'/>
            <Button  variant="link">Test 6</Button>
        </nav>
        <div className="flex  items-center gap-5 ">
          <div className='flex gap-2 items-center'>
            <HiOutlineGlobe />GB
          </div>
          <HiOutlineSearch />
          <div className='flex gap-2 items-center'>
            <HiOutlineUserCircle /> Login | Sign Up
          </div>

        </div>
  
    </header>

  )
}

export default Header
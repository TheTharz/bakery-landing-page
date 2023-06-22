import {TbTruckDelivery} from 'react-icons/tb';
import {MdFavorite,MdHelp} from 'react-icons/md';
import {FaWallet,FaUserFriends} from 'react-icons/fa';
import { AiFillTag } from 'react-icons/ai';
import { BsFillSaveFill } from 'react-icons/bs';

const menuItems = [
    {name: 'Orders', icon:<TbTruckDelivery size={25} className='mr-4'/>},
    {name: 'Favourites', icon:<MdFavorite size={25} className='mr-4'/>},
    {name: 'Wallet', icon:<FaWallet size={25} className='mr-4'/>},
    {name: 'Help', icon:<MdHelp size={25} className='mr-4'/>},
    {name: 'Promotions', icon:<AiFillTag size={25} className='mr-4'/>},
    {name: 'Best Ones', icon:<BsFillSaveFill size={25} className='mr-4'/>},
    {name: 'Invite Friends', icon:<FaUserFriends size={25} className='mr-4'/>}
]

export default menuItems;
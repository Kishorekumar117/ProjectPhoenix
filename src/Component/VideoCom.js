import React, { Component } from 'react'
import golda from '../Shared/Images/goldchain.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Form, SplitButton } from 'react-bootstrap';

// =============================================================================
import OurCollectionComp from './OurCollectionComp';
//====================================

import logo from '../Shared/Images/Logo.png'
import line from '../Shared/Images/line.png';



import cymera from '../Shared/Images/CYMERA_20231111_161122.jpg';
import wall_a from '../Shared/Images/wallpaperflare-cropped.jpg';
import wall_b from '../Shared/Images/wallpaperflare-cropped (1).jpg';
import beads from '../Shared/Images/beads-beautiful-blurred-background-bridal-gown.jpg'
import wall_c from '../Shared/Images/wallpaperflare.com_wallpaper.jpg'
import wall_d from '../Shared/Images/wallpaperflare.com_wallpaper (2).jpg'
import wall_e from '../Shared/Images/wallpaperflare.com_wallpaper (1).jpg'
import HomeLandComp from './HomeLandComp';
import OurJewellerysComp from './OurJewellerysComp';
import NavComp from './NavComp';
import SaleComp from './SaleComp';
import FooterComp from './FooterComp';
import UserComp from './UserComp';




export class VideoCom extends Component {
    render() {
        const r="success"
        return (
            <div>
                
<NavComp></NavComp>

{/* <UserComp></UserComp> */}

{/*==========================================HomeLand===============================================================*/}

<HomeLandComp></HomeLandComp>





{/* ======================================our collections========================================================================*/}


<OurCollectionComp></OurCollectionComp>


{/* =================SaleComp======================================== */}

<SaleComp></SaleComp>


    {/* ====================jewellerys================================== */}

<OurJewellerysComp></OurJewellerysComp>
   

{/* =================================================================== */}

<FooterComp></FooterComp>





{/* =============================================================================================== */}


</div>
        )
    }
}

export default VideoCom

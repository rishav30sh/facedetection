import React from "react";
import "../tachyons.css";
import "../index.css";
import Tilt from 'react-tilt'

const Profile = () => {
  return (
    <div className="ml4 mt2 mw-2 h-15 ">
      <Tilt className="Tilt"
               options={{   reverse:        true,  
                            max:            45,    
                            perspective:    500,   
                            scale:          1,    
                            speed:          500,   
                            transition:     true, 
                            axis:           null, 
                            reset:          true, 
                        
                          }}>

            <div className="Tilt-inner centeralign">
                <img
                    src="https://vignette.wikia.nocookie.net/jaiden-animations/images/3/36/10FE5771-D0B5-4A76-8D27-7D1727713696.jpeg/revision/latest?cb=20180211204828"
                    className="fl ba  b--gray f3
                               pa1  br2 centeralign mw4"
                 />
            </div>

      </Tilt>
      <div className="centeralign pa1 mw4">
        <p className='f3  ma1'> Hey, Rishav</p>
        <button
          name="detect"
          className="f3 pa1 link ml1 shadow-5 br2 near-white bg-dark-red pv2 db bg-animate hover-near-black hover-bg-washed-red"
        >
          update
        </button>
      </div>
    </div>
  );
};

export default Profile;

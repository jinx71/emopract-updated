// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import membershipCardOne from '../../../../public/Images/membership/Card 1.png';
import membershipCardTwo from '../../../../public/Images/membership/Card 2.png';
import membershipCardThree from '../../../../public/Images/membership/Card 3.png';

const MembershipHome = () => {
  return (
    <div className="bg-[#EDEDED] sectionGap">
      <div className="py-[51px] px-[30px] 2xl-[100px] xl-[100px] md-[100px] ">
        <div>
          <p className="homeMemberShipSamll 2xl:text-center xl:text-center lg:text-center md:text-center">
            Our Membership
          </p>
          <h3 className="homeMemberShipTitle ">membership package</h3>
        </div>
        <div
          className="grid grid-cols-1 gap-y-[15px] cursor-pointer
        2xl:grid-cols-3 2xl:gap-x-[60px] 2xl:pt-[50px]  xl:pt-[40px] lg:pt-[40px]  md:pt-[40px] xl:grid-cols-3 xl:gap-x-[50px]
        lg:grid-cols-3 lg:gap-x-[50px] md:grid-cols-3 md:gap-x-[30px] "
        >
          <Link to="/membership">
            <div
              className="h-[450px] 
              2xl:h-[620px]
              xl:h-[620px]
              md:h-[480px]
              lg:h-[480px] w-full"
            >
              <img
                className="h-full w-full object-fill  rounded-[10px]"
                src={membershipCardOne}
                alt=""
              />
            </div>
          </Link>

          <Link to="/membership">
            <div
             className="h-[450px] 
              2xl:h-[620px]
              xl:h-[620px]
              md:h-[480px]
              lg:h-[480px] w-full"
            >
              <img
                className="h-full w-full object-fill  rounded-[10px]"
                src={membershipCardTwo}
                alt=""
              />
            </div>
          </Link>

          <Link to="/membership">
            <div
              className="h-[450px] 
              2xl:h-[620px]
              xl:h-[620px]
              md:h-[480px]
              lg:h-[480px] w-full"
            >
              <img
                className="h-full w-full object-fill  rounded-[10px]"
                src={membershipCardThree}
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipHome;

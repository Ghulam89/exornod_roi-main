import React, { useState } from "react";
import Slider from "react-slick";
import { FaLock } from "react-icons/fa";
import { FaDollarSign, FaUsers } from "react-icons/fa6";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMemberShipModal from "../TeamMemberShipModal/TeamMemberShipModal";

const ReferralRewards = ({Level_rew,refCount,levelEarning,levelBusiness,directs_members, Level_locking,exorUsdPrice}) => {

   const [isModalOpen, setIsModalOpen] = useState(false);

  const levels = [
    { level: "Level 01", percentage: "15%", earning: "$70", teamMember: 15,Icon:<img  className=" tw-cursor-pointer" onClick={()=>setIsModalOpen(true)} src={require('../../assets/images/Eye.png')} alt="" />},
    { level: "Level 02", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 03", percentage: "5%", earning: "$70", teamMember: 15 },
    { level: "Level 04", percentage: "4%", earning: "$70", teamMember: 15 },
    { level: "Level 05", percentage: "4%", earning: "$70", teamMember: 15 },
    { level: "Level 06", percentage: "3%", earning: "$70", teamMember: 15 },
    { level: "Level 07", percentage: "3%", earning: "$70", teamMember: 15 },
    { level: "Level 08", percentage: "3%", earning: "$70", teamMember: 15 },
    { level: "Level 09", percentage: "3%", earning: "$70", teamMember: 15 },
    { level: "Level 10", percentage: "3%", earning: "$70", teamMember: 15 },
    { level: "Level 11", percentage: "2%", earning: "$70", teamMember: 15 },
    { level: "Level 12", percentage: "2%", earning: "$70", teamMember: 15 },
    { level: "Level 13", percentage: "2%", earning: "$70", teamMember: 15,},
    { level: "Level 14", percentage: "2%", earning: "$70", teamMember: 15 },
    { level: "Level 15", percentage: "2%", earning: "$70", teamMember: 15 },
    { level: "Level 16", percentage: "1%", earning: "$70", teamMember: 15 },
    { level: "Level 17", percentage: "1%", earning: "$70", teamMember: 15 },
    { level: "Level 18", percentage: "1%", earning: "$70", teamMember: 15 },
    { level: "Level 19", percentage: "1%", earning: "$70", teamMember: 15 },
    { level: "Level 20", percentage: "1%", earning: "$70", teamMember: 15 },
  ];

  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
 

  return (
    <div className="tw-w-full tw-py-12 tw-px-4 sm:tw-px-6 tw-relative">
      <div className="tw-absolute tw-top-0 tw-right-0">
        <img src={require('../../assets/images/team_bg.png')} className=" tw-h-[500px]" alt="" />
      </div>
      
      <TeamMemberShipModal directs_members={directs_members} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="tw-relative tw-z-10 tw-max-w-7xl tw-mx-auto">
        <h2 className="tw-text-white tw-pt-4 tw-text-center tw-font-Dots tw-text-3xl tw-font-normal tw-mb-8">
          Team Performance <span className="hero-title-gradient tw-font-Dots">Bonus</span>
        </h2>

        <div className="tw-mx-auto">
          <Slider ref={sliderRef} {...settings}>
          {levels.map((item, index) => (
            <div key={index} className="tw-px-3">
              <div className=" tw-bg-[#20193A]  tw-border tw-border-[#413A5B] tw-rounded-xl tw-p-6 tw-relative tw-text-white tw-shadow-md">
             {/* { !Level_locking[index]?(
                <div className="tw-absolute tw-top-4 tw-right-4 tw-p-2 tw-rounded-full">
                <img src={require('../../assets/images/lock.png')} className=" tw-w-9" alt="" />
               </div>
             ):("")} */}

                <h3 className="tw-text-xl tw-font-medium tw-mb-4">{item.level}</h3>
                <div className="tw-text-sm tw-space-y-2">
                  <div className="tw-flex tw-py-1 tw-justify-between">
                    <span className="tw-flex tw-items-center">Percentage</span>
                    <span>{item.percentage}</span>
                  </div>
                  <div className="tw-flex tw-py-1 tw-justify-between">
                    <span className="tw-flex tw-items-center" >Business</span>
                    <span>{levelBusiness[index]?(Number(levelBusiness[index])/10**6):0} usdt</span>
                  </div>
                  <div className="tw-flex tw-py-1 tw-justify-between">
                    <span className="tw-flex tw-items-center">
                    Total Earning
                    </span>
                    <span className=" tw-flex tw-gap-1">  {levelEarning[index]?(Number(levelEarning[index])/10**6):0} usdt</span>
                  </div>
                  {/* <div className="tw-flex tw-py-1 tw-justify-between">
                    <span className="tw-flex tw-items-center">
                    Earned Reward
                    </span>
                    <span className=" tw-flex tw-gap-1">  {Level_rew[index]?(Number(Level_rew[index])/10**6):0} usdt</span>
                  </div> */}
                  <div className="tw-flex tw-justify-between">
                    <span className="tw-flex tw-items-center">
                      Team Member
                    </span>
                    <span className=" tw-flex tw-gap-1 tw-items-center">{refCount[index]?Number(refCount[index]):0}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Slider>

          {/* Navigation Arrows - gradient bg + border #413A5B */}
          <div className="tw-flex tw-justify-center tw-gap-4 tw-mt-8">
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              className="team-arrow-btn tw-w-10 tw-h-10 tw-shrink-0"
              aria-label="Previous"
            >
              <IoArrowBack size={20} className="tw-text-white" />
            </button>
            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              className="team-arrow-btn tw-w-10 tw-h-10 tw-shrink-0"
              aria-label="Next"
            >
              <IoArrowForward size={20} className="tw-text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralRewards;

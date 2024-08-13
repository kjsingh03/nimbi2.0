import React from 'react'
import { discordIcon, instagramIcon, telegramIcon, xIcon, youtubeIcon } from '../../assets'

function Footer({ path = "/" }) {
  return (
    <div className="capitalize text-xs flex flex-col gap-4 bg-[#1c2327] px-4 xs:px-[2rem] lg:px-[4rem] xl:px-[8rem] py-8 border-t border-[#767f84]">
      {
        path === "/" &&
        <div className="flex xl:flex-row flex-col-reverse xl:gap-0 gap-4 items-start xl:items-center justify-between w-full 3xl:w-[90%] mx-auto">
          <div className=" flex flex-col sm:items-start items-center xl:text-left w-full gap-4 sm:gap-6 xl:w-[40%] ">
            <div className="flex flex-col gap-2 w-full">
              <p className=" font-['Inter'] text-sm">Register here</p>
              <div className="flex sm:flex-row flex-col items-center  gap-2 sm:gap-4 w-full">
                <input type="text" placeholder='Email' className='bg-transparent p-2 text-sm border border-[#767f84] w-full sm:w-[349px]' />
                <div className="btn px-6 w-full sm:w-[133px] text-center font-['Inter'] text-sm">Sign up</div>
              </div>
            </div>
            <p className='text-[#a1a7aa]'>your email addresses will only be used forairdrop notifications and won't be shared with third parties</p>
          </div>
          <ul className="list-none flex sm:gap-8 xl:items-center sm:flex-row gap-4 flex-col">
            <li className='hover:underline hover:text-[#00ACE6] cursor-pointer'>Terms and conditions</li>
            <li className='hover:underline hover:text-[#00ACE6] cursor-pointer'>privacy policy</li>
          </ul>
        </div>
      }
      <div className={`flex items-center sm:flex-row gap-4 flex-col  justify-between ${path === "/" ? 'pt-4 border-t border-[#767f84]' : ""}  w-full 3xl:w-[90%] mx-auto`}>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-[13px]">
          <p className='text-[#a1a7aa] font-["Roboto"]'>our community</p>
          <ul className="list-none flex gap-2 items-center">
            <li className='w-6 h-6 pt-[3px] px-[2px]'><a target='_blank' href="https://discord.gg/nimbi"><img src={discordIcon} className='w-full h-full object-contain' alt="" /></a></li>
            <li className='w-6 h-6 py-[5.5px] px-1'><a target='_blank' href="https://t.me/nimbitokenvip"><img src={telegramIcon} className='w-full h-full object-contain' alt="" /></a></li>
            <li className='w-6 h-6 py-1 px-1'><a target='_blank' href="https://www.instagram.com/nimbiwolfpack?igsh=MWZheTZ1amxvdm43Mw%3D%3D"><img src={instagramIcon} className='w-full h-full object-contain' alt="" /></a></li>
            <li className='w-6 h-6 py-0.5 px-0.5'><a target='_blank' href=""><img src={xIcon} className='w-full h-full object-contain' alt="" /></a></li>
            <li className='w-6 h-6 py-1 px-[1px]'><a target='_blank' href="https://www.youtube.com/@nimbitoken"><img src={youtubeIcon} className='w-full h-full object-contain' alt="" /></a></li>
          </ul>
        </div>
        <p className='normal-case font-["Roboto"]'>Copyright &copy; 2024 NIMBI.COM | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

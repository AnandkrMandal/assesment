import React from "react";

import { Button, Img, Text } from "components";

const LANDINGPAGEPage = () => {
  return (
    <>
      <div className="bg-white-A700 h-auto flex flex-col font-outfit items-center  justify-start mx-auto pt-10 w-full">
        <div className="flex flex-col justify-end w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1260px] mx-auto md:px-5 w-full">
            <div className="h-[75px] relative w-[7%] md:w-full">
              <div className="absolute bg-white-A700 h-5 left-[0] rounded-[50%] shadow-bs top-[33%] w-5"></div>
              <div className="absolute bg-gray-900 h-[70px] inset-[0]text-center text-white justify-center m-auto w-[70px]">LOGO</div>
            </div>
            <div className="sm:h-[350px] md:h-[84px] h-[89px] relative w-[78%] md:w-full">
              <div className="absolute bottom-[0] flex flex-col gap-11 justify-start right-[1%] w-[70%]">
                <div className="bg-white-A700 h-5 md:ml-[0] ml-[678px] rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 mr-[678px] rounded-[50%] shadow-bs w-5"></div>
              </div>

              <nav>
              <div className="absolute bg-gradient  flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto p-[9px] rounded-[37px] shadow-bs top-[0] w-full">
                <Button
                  className="!text-blue_gray-800 cursor-pointer font-semibold leading-[normal] min-w-[106px] rounded-[28px] shadow-bs1 text-center text-xl tracking-[0.60px]"
                  size="sm"
                >
                  Home
                </Button>
                <Text
                  className="sm:ml-[0] ml-[47px] text-blue_gray-800 text-xl tracking-[0.60px]"
                  size="txtOutfitBold20"
                >
                  About Us
                </Text>
                <Text
                  className="sm:ml-[0] ml-[71px] text-blue_gray-800 text-xl tracking-[0.60px]"
                  size="txtOutfitBold20"
                >
                  Work
                </Text>
                <Text
                  className="sm:ml-[0] ml-[71px] text-blue_gray-800 text-xl tracking-[0.60px]"
                  size="txtOutfitBold20"
                >
                  Services
                </Text>
                <Text
                  className="sm:ml-[0] ml-[71px] text-blue_gray-800 text-xl tracking-[0.60px]"
                  size="txtOutfitBold20"
                >
                  Clients
                </Text>
                <Text
                  className="sm:ml-[0] ml-[70px] text-blue_gray-800 text-xl tracking-[0.60px]"
                  size="txtOutfitBold20"
                >
                  Team
                </Text>
                <a
                  href="javascript:"
                  className="sm:ml-[0] ml-[71px] text-blue_gray-800 text-xl tracking-[0.60px]"
                >
                  <Text size="txtOutfitBold20">Contact Us</Text>
                </a>
              </div>
              </nav>
            </div>
          </div>
          
          <div className="h-[626rem] bg-gradient md:h-[11910px] sm:h-[13290px] mt-[26px]  relative w-auto">
            <div className="absolute bottom-[0] flex md:h-[3528px] h-[3986px] inset-x-[0] justify-center mx-auto w-[96%] md:w-full">
              <div className="absolute flex flex-row items-start justify-between left-[0] top-[3%] w-[19%]">
                <div className="bg-white-A700 h-5 mb-[2165px] mt-[1343px] rounded-[50%] shadow-bs w-5"></div>
                <div className="flex flex-col md:gap-10 gap-[3198px] justify-start mt-[290px]">
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[18px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 mr-[18px] rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[644px] items-start justify-start mt-[1789px]">
                  <div className="bg-white-A700 h-5 rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[5px] rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[297px] justify-start mt-[736px]">
                  <div className="bg-white-A700 h-5 mr-[9px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[9px] rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="flex flex-col justify-start mb-[290px]">
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[18px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 md:ml-[0] mt-[2879px] mx-[9px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 mr-[18px] mt-[299px] rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="bg-white-A700 h-5 mb-[1345px] mt-[2163px] rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="absolute flex flex-col justify-start right-[3%] top-[0] w-[78%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[45px] mr-5 w-[94%] md:w-full">
                  <div className="flex flex-col justify-start md:mt-0 mt-10 w-[66%] md:w-full">
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[116px] mr-[516px] rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[262px] mr-[370px] mt-[258px] rounded-[50%] shadow-bs w-5"></div>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[196px] w-full">
                      <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                      <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                    </div>
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[400px] mr-[232px] mt-1.5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="bg-white-A700 h-5 mb-[406px] md:ml-[0] ml-[78px] md:mt-0 mt-[174px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-col md:gap-10 gap-[342px] justify-start md:ml-[0] ml-[206px] w-[5%] md:w-full">
                    <div className="bg-white-A700 h-5 mr-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 ml-5 md:ml-[0] rounded-[50%] shadow-bs w-5"></div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[227px] mt-[148px] w-[79%] md:w-full">
                  <div className="bg-white-A700 h-5 mb-[76px] sm:mt-0 mt-36 rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-col md:gap-10 gap-[180px] justify-start">
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[278px] mr-[186px] rounded-[50%] shadow-bs w-5"></div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                      <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[65px] mt-[65px] w-[94%] md:w-full">
                  <div className="flex flex-col justify-start md:mt-0 mt-10 w-[66%] md:w-full">
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[116px] mr-[516px] rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[262px] mr-[370px] mt-[258px] rounded-[50%] shadow-bs w-5"></div>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[196px] w-full">
                      <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                      <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                    </div>
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[400px] mr-[232px] mt-1.5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="bg-white-A700 h-5 mb-[406px] md:ml-[0] ml-[78px] md:mt-0 mt-[174px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-col md:gap-10 gap-[342px] justify-start md:ml-[0] ml-[206px] w-[5%] md:w-full">
                    <div className="bg-white-A700 h-5 mr-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 ml-5 md:ml-[0] rounded-[50%] shadow-bs w-5"></div>
                  </div>
                </div>
              </div>
              <div className="md:h-[1805px] h-[936px] mb-[1249px] ml-auto mr-[91px] mt-auto w-[68%] md:w-full">
                <div className="absolute flex flex-col justify-start right-[0] top-[0] w-[53%]">
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[278px] mr-[186px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-row items-start justify-between mt-[180px] w-full">
                    <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[289px] mr-[175px] mt-[296px] rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="absolute bottom-[0] flex flex-col justify-start left-[0] w-[71%]">
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[116px] mr-[516px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[262px] mr-[370px] mt-[258px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[196px] w-full">
                    <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white-A700 h-5 inset-y-[0] left-[33%] my-auto rounded-[50%] shadow-bs w-5"></div>
              <div className="absolute bottom-[36%] flex flex-col md:gap-10 gap-[342px] justify-start right-[1%] w-[3%]">
                <div className="bg-white-A700 h-5 mr-5 rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 ml-5 md:ml-[0] rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="absolute bottom-[0] flex flex-col justify-start right-[0] w-[79%]">
                <div className="bg-white-A700 h-5 md:ml-[0] ml-[464px] mr-[596px] rounded-[50%] shadow-bs w-5"></div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[246px] mt-[148px] w-[78%] md:w-full">
                  <div className="bg-white-A700 h-5 mb-[76px] sm:mt-0 mt-36 rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-col md:gap-10 gap-[180px] justify-start">
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[278px] mr-[186px] rounded-[50%] shadow-bs w-5"></div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                      <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[84px] mt-[67px] w-[93%] md:w-full">
                  <div className="flex flex-col justify-start md:mt-0 mt-10 w-[66%] md:w-full">
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[116px] mr-[516px] rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[262px] mr-[370px] mt-[258px] rounded-[50%] shadow-bs w-5"></div>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[196px] w-full">
                      <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                      <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                    </div>
                    <div className="bg-white-A700 h-5 md:ml-[0] ml-[400px] mr-[232px] mt-1.5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="bg-white-A700 h-5 mb-[406px] md:ml-[0] ml-[78px] md:mt-0 mt-[174px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-col md:gap-10 gap-[342px] justify-start md:ml-[0] ml-[206px] w-[5%] md:w-full">
                    <div className="bg-white-A700 h-5 mr-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 ml-5 md:ml-[0] rounded-[50%] shadow-bs w-5"></div>
                  </div>
                </div>
                <div className="bg-white-A700 h-5 md:ml-[0] ml-[810px] mr-[250px] mt-[148px] rounded-[50%] shadow-bs w-5"></div>
              </div>
            </div>
            <div className="absolute bg-white-A700 h-5 right-[34%] rounded-[50%] shadow-bs top-[11%] w-5"></div>
            <div className="absolute flex flex-col md:gap-10 gap-[106px] inset-x-[0] justify-start mx-auto top-[2%] w-[84%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col justify-start">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[396px] mr-[510px] mt-[54px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[642px] mr-[264px] mt-[146px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 ml-28 md:ml-[0] mr-[794px] mt-20 rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="bg-white-A700 h-5 mb-40 md:mt-0 mt-[200px] rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="bg-white-A700 h-5 md:ml-[0] ml-[1010px] mr-44 rounded-[50%] shadow-bs w-5"></div>
            </div>
            <div className="absolute bg-white-A700 h-5 right-[4%] rounded-[50%] shadow-bs top-[10%] w-5"></div>
            <div className="absolute flex flex-row gap-2 items-start justify-center left-[4%] top-[9%] w-[13%]">
              <div className="flex flex-col justify-start mt-[358px] w-[32%]">
                <div className="bg-white-A700 h-5 md:ml-[0] ml-[38px] rounded-[50%] shadow-bs w-5"></div>
                <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] mr-[18px] mt-[1035px] w-[52%] md:w-full">
                  <div className="bg-white-A700 h-5 ml-0.5 md:ml-[0] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 mt-[1023px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 ml-2.5 md:ml-[0] mt-[786px] rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="bg-white-A700 h-5 mr-[38px] mt-[1126px] rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="bg-white-A700 h-5 mb-[2688px] mt-[2166px] rounded-[50%] shadow-bs w-5"></div>
              <div className="flex flex-col justify-start w-[30%]">
                <div className="bg-white-A700 h-5 md:ml-[0] ml-[34px] rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 ml-3.5 md:ml-[0] mr-5 mt-[950px] rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 ml-5 md:ml-[0] mr-3.5 mt-[2718px] rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 mr-[34px] mt-[1126px] rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="flex flex-col md:gap-10 gap-[1126px] justify-start mt-[1792px] w-[24%]">
                <div className="flex flex-col md:gap-10 gap-[1160px] items-start justify-start ml-5 md:ml-[0] w-[55%] md:w-full">
                  <div className="bg-white-A700 h-5 ml-1 md:ml-[0] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="bg-white-A700 h-5 mr-6 rounded-[50%] shadow-bs w-5"></div>
              </div>
            </div>
            <div className="absolute flex flex-row items-start justify-start left-[21%] top-[9%] w-1/5">
              <div className="bg-white-A700 h-5 mb-[210px] mt-[696px] rounded-[50%] shadow-bs w-5"></div>
              <div className="bg-white-A700 h-5 mb-[652px] ml-[72px] mt-[254px] rounded-[50%] shadow-bs w-5"></div>
              <div className="flex flex-col md:gap-10 gap-[886px] justify-start ml-[126px] w-[15%]">
                <div className="bg-white-A700 h-5 mr-5 rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 ml-5 md:ml-[0] rounded-[50%] shadow-bs w-5"></div>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[5%] top-[12%] w-[44%]">
              <div className="flex flex-col md:gap-10 gap-[390px] items-center justify-start w-[4%] md:w-full">
                <div className="bg-white-A700 h-5 rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="bg-white-A700 h-5 mb-[90px] md:ml-[0] ml-[356px] md:mt-0 mt-80 rounded-[50%] shadow-bs w-5"></div>
              <div className="bg-white-A700 h-5 mb-44 md:ml-[0] ml-[216px] md:mt-0 mt-[234px] rounded-[50%] shadow-bs w-5"></div>
            </div>
            <div className="absolute flex flex-col justify-start right-[4%] top-[19%] w-[76%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[114px] w-[90%] md:w-full">
                <div className="flex flex-col justify-start w-[92%] md:w-full">
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[674px] mr-[198px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-row items-center justify-between md:ml-[0] ml-[42px] mt-[310px] w-[35%] md:w-full">
                    <div className="bg-white-A700 h-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mr-[274px] mt-[334px] w-[70%] md:w-full">
                    <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[328px] mt-[252px] w-[64%] md:w-full">
                    <div className="bg-white-A700 h-5 mt-2.5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 mb-2.5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[638px] mr-[234px] mt-[120px] rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="bg-white-A700 h-5 mb-[978px] ml-7 md:ml-[0] md:mt-0 mt-[148px] rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 mb-[506px] ml-3.5 md:ml-[0] md:mt-0 mt-[620px] rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[168px] mt-[134px] w-4/5 md:w-full">
                <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="bg-white-A700 h-5 md:ml-[0] ml-[722px] mr-[346px] mt-28 rounded-[50%] shadow-bs w-5"></div>
              <div className="bg-white-A700 h-5 md:ml-[0] ml-[442px] mr-[626px] mt-[30px] rounded-[50%] shadow-bs w-5"></div>
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[78px] w-[91%] md:w-full">
                <div className="bg-white-A700 h-5 mt-2.5 rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 mb-2.5 rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="bg-white-A700 h-5 md:ml-[0] ml-[442px] mr-[626px] mt-[232px] rounded-[50%] shadow-bs w-5"></div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[42px] mr-[50px] mt-[58px] w-[92%] md:w-full">
                <div className="flex flex-col justify-start md:mt-0 mt-10 w-[66%] md:w-full">
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[116px] mr-[516px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[262px] mr-[370px] mt-[258px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[196px] w-full">
                    <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[400px] mr-[232px] mt-1.5 rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="bg-white-A700 h-5 mb-[406px] md:ml-[0] ml-[78px] md:mt-0 mt-[174px] rounded-[50%] shadow-bs w-5"></div>
                <div className="flex flex-col md:gap-10 gap-[342px] justify-start md:ml-[0] ml-[206px] w-[5%] md:w-full">
                  <div className="bg-white-A700 h-5 mr-5 rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 ml-5 md:ml-[0] rounded-[50%] shadow-bs w-5"></div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-56 md:ml-[0] mt-[148px] w-[77%] md:w-full">
                <div className="bg-white-A700 h-5 mb-[254px] sm:mt-0 mt-36 rounded-[50%] shadow-bs w-5"></div>
                <div className="flex flex-col justify-start">
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[278px] mr-[186px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-row items-start justify-between mt-[180px] w-full">
                    <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[404px] mr-[60px] mt-[158px] rounded-[50%] shadow-bs w-5"></div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[22px] mr-[70px] mt-5 w-[92%] md:w-full">
                <div className="flex flex-col justify-start w-[66%] md:w-full">
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[116px] mr-[516px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[262px] mr-[370px] mt-[258px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-row sm:gap-10 items-start justify-between mt-[196px] w-full">
                    <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[400px] mr-[232px] mt-1.5 rounded-[50%] shadow-bs w-5"></div>
                </div>
                <div className="bg-white-A700 h-5 mb-[406px] md:ml-[0] ml-[78px] md:mt-0 mt-[134px] rounded-[50%] shadow-bs w-5"></div>
                <div className="bg-white-A700 h-5 mb-[218px] md:ml-[0] ml-[226px] md:mt-0 mt-[322px] rounded-[50%] shadow-bs w-5"></div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[204px] mt-[148px] w-[77%] md:w-full">
                <div className="bg-white-A700 h-5 mb-[76px] sm:mt-0 mt-36 rounded-[50%] shadow-bs w-5"></div>
                <div className="flex flex-col md:gap-10 gap-[180px] justify-start">
                  <div className="bg-white-A700 h-5 md:ml-[0] ml-[278px] mr-[186px] rounded-[50%] shadow-bs w-5"></div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="bg-white-A700 h-5 mt-5 rounded-[50%] shadow-bs w-5"></div>
                    <div className="bg-white-A700 h-5 mb-5 rounded-[50%] shadow-bs w-5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gradient1  block flex-col h-max inset-[0] items-end justify-center m-auto pl-10 sm:pl-5 py-10 w-full">
              <div className="flex flex-col justify-start mb-[4579px] w-[98%] md:w-full">
                <div className="md:h-[607px] h-[685px] relative w-full">
                  <div className="md:h-[607px] h-[685px] m-auto w-full">
                    <div className="absolute bg-gradient2  flex flex-col md:gap-10 gap-[340px] h-full inset-y-[0] items-start justify-start left-[0] my-auto p-10 sm:px-5 rounded-[25px] w-[95%]">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-blue-A700 w-[48%] sm:w-full"
                        size="txtOutfitSemiBold40"
                      >
                        Diversifying the Designs of Digital World
                      </Text>
                      <div className="bg-deep_orange-300 flex flex-row gap-2.5 items-center justify-start mb-[50px]  p-2.5 rounded-[30px] w-[18%] md:w-full">
                        <div className="bg-white-A700 flex flex-col h-10 items-center justify-start p-0.5 rounded-[50%] w-10">
                          <Img
                            className="h-[35px] w-[35px]"
                            src="images/img_fluentcall24filled.svg"
                            alt="fluentcall24fil"
                          />
                        </div>
                        <Text
                          className="sm:text-[21px] md:text-[23px]  text-[25px] text-white-A700 tracking-[0.75px]"
                          size="txtOutfitSemiBold25"
                        >
                          Book a Call
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[607px] inset-y-[0] my-auto object-cover right-[0] w-1/2"
                      src="images/img_2809413removebgpreview.png"
                      alt="2809413removebg"
                    />
                  </div>
                  <Text
                    className="absolute flex flex-col box-content w-2/5 text-left left-[3%] mb-8 text-[22px] text-blue_gray-800 sm:text-lg md:text-xl top-1/4 tracking-[0.66px]"
                    size="txtOutfitMedium22"
                  >
                    <>
                      Explorogent International Services Private Limited (EISPL)
                      is one of the most famous companies in the sector of Web
                      and Mobile Development. In the market, EISPL has a strong
                      presence in providing quality services to its clients.
                      <br />
                      EISPL is convinced that one should diversify the offering,
                      given the changing needs of the clients. That is why we
                      engage in multiple projects and activities. We also
                      possess knowledge in web development, app development,
                      UI/UX design, as well as digital marketing.
                      <br/>
                    
                    </>
                  </Text>
                </div>
                <Text
                  className="md:ml-[0]  text-center mt-[22px] pb-4 text-[22px] text-blue_gray-800 sm:text-lg md:text-xl tracking-[0.66px]"
                  size="txtOutfitSemiBold22"
                >
                  In the realm of digital solutions, we offer expertise in
                </Text>
                <div className="flex md:flex-col flex-row gap-5 items-center justify-center md:ml-[0] ml-[7px] mt-[17px] w-[94%] md:w-full">
                  <Button
                    className="border-2 border-blue-A700 border-solid cursor-pointer font-semibold leading-[normal] min-w-[281px] text-[22px] text-center sm:text-lg md:text-xl tracking-[0.66px]"
                    shape="round"
                  >
                    Website Development
                  </Button>
                  <Button
                    className="border-2 border-blue-A700 border-solid cursor-pointer font-semibold leading-[normal] min-w-[240px] text-[22px] text-center sm:text-lg md:text-xl tracking-[0.66px]"
                    shape="round"
                  >
                    App Development
                  </Button>
                  <Button
                    className="border-2 border-blue-A700 border-solid cursor-pointer font-semibold leading-[normal] min-w-[192px] text-[22px] text-center sm:text-lg md:text-xl tracking-[0.66px]"
                    shape="round"
                  >
                    UI/UX Design
                  </Button>
                  <Button
                    className="border-2 border-blue-A700 border-solid cursor-pointer font-semibold leading-[normal] min-w-[235px] text-[22px] text-center sm:text-lg md:text-xl tracking-[0.66px]"
                    shape="round"
                  >
                    Digital Marketing
                  </Button>
                  <Button
                    className="border-2 border-blue-A700 border-solid cursor-pointer font-semibold leading-[normal] min-w-[238px] text-[22px] text-center sm:text-lg md:text-xl tracking-[0.66px]"
                    shape="round"
                  >
                    SEO Optimization
                  </Button>
                </div>
                <Text
                  className="md:ml-[0] text-center mt-[22px] text-[22px] text-blue_gray-800 sm:text-lg md:text-xl tracking-[0.66px]"
                  size="txtOutfitSemiBold22"
                >
                  showcasing our proficiency across various facets of the
                  digital platform{" "}
                </Text>
                <Text
                  className="md:ml-[0] items-center justify-center mt-[77px] sm:text-4xl md:text-[38px] text-[40px] text-center text-deep_orange-300"
                  size="txtOutfitSemiBold40Deeporange300"
                >
                  <>
                    Stay Ahead!
                    <br />
                    Launch Your Next Project with Stackkaroo
                  </>
                </Text>
                <div className="bg-gradient2  flex flex-col items-start justify-start mt-[57px] p-10 sm:px-5 rounded-bl-[25px] rounded-tl-[25px] w-full">
                  <div className="flex flex-col items-start justify-start mb-2.5 mt-[3px] w-[44%] md:w-full">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-blue-A700 tracking-[1.05px]"
                      size="txtOutfitBold35"
                    >
                      Our Story
                    </Text>
                    <Text
                      className="sm:flex leading-[30.00px] mt-[15px] text-[22px] text-blue_gray-800 sm:text-lg md:text-xl tracking-[0.66px]"
                      size="txtOutfitMedium22"
                    >
                      <>
                        Guiding EISPL as Directors, Mr. Sourav Gupta and Mr.
                        Chandan Mishra bring their extensive experience to the
                        forefront as industry veterans. Our team is fueled by
                        innovation, continually striving to exceed customer
                        expectations.
                        <br />
                        <br />
                        Operating from our registered office in Agartala Sadar,
                        Tripura (W), our company is officially registered with
                        the Corporate Identification Number (CIN). Our active
                        status and an authorized share capital of Rs 10.00 lac
                        are a source of pride.
                      </>
                    </Text>
                    <div className="bg-deep_orange-300 flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-10 p-2.5 rounded-[30px] w-[73%] md:w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_rimoneyrupeecirclefill.svg"
                        alt="rimoneyrupeecir"
                      />
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 tracking-[0.75px]"
                        size="txtOutfitSemiBold25"
                      >
                        Get Estimated Project Cost
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] items-center justify-center mt-[147px] sm:text-4xl md:text-[38px] text-[40px] text-center text-deep_orange-300"
                  size="txtOutfitSemiBold40Deeporange300"
                >
                  Why Choose Us?
                </Text>
                <Text
                  className="leading-[30.00px] mt-[15px] text-[22px] text-blue_gray-800 text-center sm:text-lg md:text-xl tracking-[0.66px]"
                  size="txtOutfitMedium22"
                >
                  <>
                    We excel with reliability, innovation and customer-centric
                    approach for our quality products.
                    <br />
                    Our dedicated team ensures that the solutions provided are
                    dependable and long-term
                  </>
                </Text>
                <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start md:ml-[0] ml-[116px] mt-20 w-[78%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-[66%] md:w-full">
                    <div className="bg-gradient3  flex flex-row gap-2.5 items-center justify-end outline outline-[2px] outline-white-A700 p-2.5 rounded-[25px] shadow-bs2 w-[47%] md:w-full">
                      <div className="bg-white-A700 flex flex-col h-20 items-center justify-end my-2.5 p-[9px] rounded-[15px] w-20">
                        <Img
                          className="h-[60px] mt-0.5 w-[60px]"
                          src="images/img_group395.svg"
                          alt="group395"
                        />
                      </div>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[67%] sm:w-full"
                        size="txtOutfitSemiBold25BlueA700"
                      >
                        User-Centric Approach
                      </Text>
                    </div>
                    <div className="bg-gradient3  flex flex-row gap-2.5 items-center justify-end outline outline-[2px] outline-white-A700 p-2.5 rounded-[25px] shadow-bs2 w-[47%] md:w-full">
                      <div className="bg-white-A700 flex flex-col h-20 items-center justify-end my-2.5 p-[9px] rounded-[15px] w-20">
                        <Img
                          className="h-[60px] mt-0.5 w-[60px]"
                          src="images/img_lock.svg"
                          alt="lock"
                        />
                      </div>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[67%] sm:w-full"
                        size="txtOutfitSemiBold25BlueA700"
                      >
                        Customer Satisfaction
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gradient3  flex flex-row gap-2.5 items-center justify-end outline outline-[2px] outline-white-A700 p-2.5 rounded-[25px] shadow-bs2 w-[31%] md:w-full">
                    <div className="bg-white-A700 flex flex-col h-20 items-center justify-start my-2.5 p-[15px] rounded-[15px] w-20">
                      <Img
                        className="h-10 my-[5px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[67%] sm:w-full"
                      size="txtOutfitSemiBold25BlueA700"
                    >
                      Integrating Feedback
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start md:ml-[0] ml-[299px] mt-10 w-[51%] md:w-full">
                  <div className="bg-gradient3  flex flex-row gap-2.5 items-center justify-end outline outline-[2px] outline-white-A700 p-2.5 rounded-[25px] shadow-bs2 w-[47%] md:w-full">
                    <div className="bg-white-A700 flex flex-col h-20 items-center justify-end my-2.5 p-[9px] rounded-[15px] w-20">
                      <Img
                        className="h-[60px] mt-0.5 w-[60px]"
                        src="images/img_group400.svg"
                        alt="group400"
                      />
                    </div>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[67%] sm:w-full"
                      size="txtOutfitSemiBold25BlueA700"
                    >
                      High Quality Products
                    </Text>
                  </div>
                  <div className="bg-gradient3  flex flex-row gap-2.5 items-center justify-end outline outline-[2px] outline-white-A700 p-2.5 rounded-[25px] shadow-bs2 w-[47%] md:w-full">
                    <div className="bg-white-A700 flex flex-col h-20 items-center justify-end my-2.5 p-[9px] rounded-[15px] w-20">
                      <Img
                        className="h-[60px] mt-0.5 w-[60px]"
                        src="images/img_group399.svg"
                        alt="group399"
                      />
                    </div>
                    <Text
                      className="my-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[67%] sm:w-full"
                      size="txtOutfitSemiBold25BlueA700"
                    >
                      On-Time Product Delivery
                    </Text>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] items-center justify-center mt-[100px] sm:text-4xl md:text-[38px] text-[40px] text-center text-deep_orange-300"
                  size="txtOutfitSemiBold40Deeporange300"
                >
                  Stackkaroo’s Digital Services
                </Text>
                <Text
                  className="leading-[30.00px] mt-3.5 text-[22px] text-blue_gray-800 text-center sm:text-lg md:text-xl tracking-[0.66px]"
                  size="txtOutfitMedium22"
                >
                  <>
                    We excel with reliability, innovation and customer-centric
                    approach for our quality products.
                    <br />
                    Our dedicated team ensures that the solutions provided are
                    dependable and long-term
                  </>
                </Text>
                <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] mt-20 w-[100%]">
                  <div className="bg-gradient4  blue_A700_deep_orange_300_border border border-solid flex flex-col h-[400px] sm:h-auto items-center justify-end p-[25px] sm:px-5 rounded-[25px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[68px] h-[335px] justify-start mt-[15px] w-[335px]">
                      <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[15px] w-[96%] md:w-full">
                        <div className="flex flex-row gap-[34px] items-start justify-start w-[100%] md:w-full">
                          <Img
                            className="h-[75px] md:h-auto object-cover w-[75px]"
                            src="images/img_software4224716.png"
                            alt="software4224716"
                          />
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[65%] sm:w-full"
                            size="txtOutfitSemiBold25BlueA700"
                          >
                            Website Development
                          </Text>
                        </div>
                        <Text
                          className="text-[22px] text-blue_gray-800 text-center sm:text-lg md:text-xl tracking-[0.66px] w-full"
                          size="txtOutfitMedium22"
                        >
                          We specialize in responsive website development,
                          ensuring optimal performance across various devices.
                        </Text>
                      </div>
                      <Img
                        className="h-[50px] w-[50px] justify-start"
                        src="images/img_iconamoonarrow.svg"
                        alt="iconamoonarrow"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient4  blue_A700_deep_orange_300_border2 border border-solid flex flex-col h-[400px] sm:h-auto items-start justify-start p-5 rounded-[25px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[5px] mt-5 w-[95%] md:w-full">
                      <div className="flex flex-row gap-[34px] items-start justify-start w-[90%] md:w-full">
                        <Img
                          className="h-[75px] md:h-auto object-cover w-[75px]"
                          src="images/img_code38294891.png"
                          alt="code38294891"
                        />
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[65%] sm:w-full"
                          size="txtOutfitSemiBold25BlueA700"
                        >
                          App Development
                        </Text>
                      </div>
                      <Text
                        className="ml-5 md:ml-[0] mt-[30px] text-[22px] text-blue_gray-800 text-center sm:text-lg md:text-xl tracking-[0.66px] w-[95%] sm:w-full"
                        size="txtOutfitMedium22"
                      >
                        We specialize in creating superior apps for diverse
                        sectors such as e-commerce, education, and
                        transportation.
                      </Text>
                      <Img
                        className="h-[50px]  ml-12 md:ml-[0]  mt-[68px] w-[50px] "
                        src="images/img_iconamoonarrow.svg"
                        alt="iconamoonarrow"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient4  blue_A700_deep_orange_300_border3 border border-solid flex flex-col h-[400px] sm:h-auto items-center justify-end p-[25px] sm:px-5 rounded-[25px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[68px] h-[335px] justify-start mt-[15px] w-[335px]">
                      <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[15px] w-[96%] md:w-full">
                        <div className="flex flex-row gap-[34px] items-start justify-start w-[96%] md:w-full">
                          <Img
                            className="h-[75px] md:h-auto object-cover w-[75px]"
                            src="images/img_cloudcomputing5738519.png"
                            alt="cloudcomputingFive"
                          />
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[65%] sm:w-full"
                            size="txtOutfitSemiBold25BlueA700"
                          >
                            Software Development
                          </Text>
                        </div>
                        <Text
                          className="text-[22px] text-blue_gray-800 text-center sm:text-lg md:text-xl tracking-[0.66px] w-full"
                          size="txtOutfitMedium22"
                        >
                          {" "}
                          We specialize in tailored solutions ensuring business
                          growth and efficiency by providing superior software.
                        </Text>
                      </div>
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_iconamoonarrow.svg"
                        alt="iconamoonarrow"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient4  blue_A700_deep_orange_300_border4 border border-solid flex flex-col h-[400px] sm:h-auto items-center justify-end p-[25px] sm:px-5 rounded-[25px] w-full">
                    <div className="flex flex-col gap-10 h-[335px] justify-start mt-[15px] w-[335px]">
                      <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[15px] w-[96%] md:w-full">
                        <div className="flex flex-row gap-[34px] items-start justify-start w-[96%] md:w-full">
                          <Img
                            className="h-[75px] md:h-auto object-cover w-[75px]"
                            src="images/img_marketing8227788.png"
                            alt="marketing822778"
                          />
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px]"
                            size="txtOutfitSemiBold25BlueA700"
                          >
                            <>
                              UI/UX
                              <br />
                              Design
                            </>
                          </Text>
                        </div>
                        <Text
                          className="text-[22px] text-blue_gray-800 text-center sm:text-lg md:text-xl tracking-[0.66px] w-full"
                          size="txtOutfitMedium22"
                        >
                          {" "}
                          We specialize in creating exemplary designs
                          prioritizing user-friendly concepts and aesthetically
                          appealing interfaces.
                        </Text>
                      </div>
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_iconamoonarrow.svg"
                        alt="iconamoonarrow"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient4  blue_A700_deep_orange_300_border5 border border-solid flex flex-col h-[400px] sm:h-auto items-center justify-end p-[25px] sm:px-5 rounded-[25px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[68px] h-[335px] justify-start mt-[15px] w-[335px]">
                      <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[15px] w-[96%] md:w-full">
                        <div className="flex flex-row gap-[34px] items-start justify-start w-[96%] md:w-full">
                          <Img
                            className="h-[75px] md:h-auto object-cover w-[75px]"
                            src="images/img_marketing8227788.png"
                            alt="marketing822778"
                          />
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[65%] sm:w-full"
                            size="txtOutfitSemiBold25BlueA700"
                          >
                            Digital Marketing
                          </Text>
                        </div>
                        <Text
                          className="text-[22px] text-blue_gray-800 text-center sm:text-lg md:text-xl tracking-[0.66px] w-full"
                          size="txtOutfitMedium22"
                        >
                          We specialize in tailored digital marketing solutions
                          and ensure effective online marketing strategies.
                        </Text>
                      </div>
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_iconamoonarrow.svg"
                        alt="iconamoonarrow"
                      />
                    </div>
                  </div>
                  <div className="bg-gradient4  blue_A700_deep_orange_300_border6 border border-solid flex flex-col h-[400px] sm:h-auto items-center justify-end p-[25px] sm:px-5 rounded-[25px] w-full">
                    <div className="flex flex-col gap-3 h-[335px] justify-start mt-[15px] w-[335px]">
                      <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] ml-[15px] w-[96%] md:w-full">
                        <div className="flex flex-row gap-[34px] items-start justify-start w-[96%] md:w-full">
                          <Img
                            className="h-[75px] md:h-auto object-cover w-[75px]"
                            src="images/img_seo103905741.png"
                            alt="seo103905741"
                          />
                          <Text
                            className="sm:text-[21px] md:text-[23px] text-[25px] text-blue-A700 text-center tracking-[0.75px] w-[65%] sm:w-full"
                            size="txtOutfitSemiBold25BlueA700"
                          >
                            SEO Optimization
                          </Text>
                        </div>
                        <Text
                          className="text-[22px] text-blue_gray-800 text-center sm:text-lg md:text-xl tracking-[0.66px] w-full"
                          size="txtOutfitMedium22"
                        >
                          We ensure optimal website traffic by addressing
                          factors such as user experience, accessibility,
                          product details, and monitoring target audience.
                        </Text>
                      </div>
                      <Img
                        className="h-[50px] w-[50px]"
                        src="images/img_iconamoonarrow.svg"
                        alt="iconamoonarrow"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient2  flex flex-col items-center justify-end mt-20 p-10 sm:px-5 rounded-[25px] w-[100%] md:w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-[100%] md:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-center text-deep_orange-300"
                      size="txtOutfitSemiBold40Deeporange300"
                    >
                      SEO Services
                    </Text>
                    <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-4/5 md:w-full">
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_letsiconscheckfill.svg"
                          alt="letsiconscheckf"
                        />
                        <Text
                          className="ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700 text-center"
                          size="txtOutfitSemiBold28"
                        >
                          Customized SEO Services
                        </Text>
                        <Img
                          className="h-[45px] md:ml-[0] ml-[330px] w-[45px]"
                          src="images/img_letsiconscheckfill.svg"
                          alt="letsiconscheckf_One"
                        />
                        <Text
                          className="ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                          size="txtOutfitSemiBold28"
                        >
                          Mobile SEO Services
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-start justify-end md:ml-[0] ml-[65px] w-[95%] md:w-full">
                        <Text
                          className="text-[22px] text-blue_gray-800 sm:text-lg md:text-xl w-[46%] sm:w-full"
                          size="txtOutfitMedium22"
                        >
                          We develop tailored SEO plans for new websites as they
                          consider a correct SEO website checklist, as well as
                          strategy, to be critical for business.
                        </Text>
                        <Text
                          className="text-[22px] text-blue_gray-800 sm:text-lg md:text-xl w-[46%] sm:w-full"
                          size="txtOutfitMedium22"
                        >
                          We stress upon the mobile optimizations since the
                          mobile phone use by search is highly prevalent. They
                          are more able to score the best SEO rankings and can
                          easily be viewed on mobile devices.
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
                        <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
                          <div className="flex flex-row gap-5 items-end justify-start w-[63%] md:w-full">
                            <Img
                              className="h-[45px] w-[45px]"
                              src="images/img_letsiconscheckfill.svg"
                              alt="letsiconscheckf_Two"
                            />
                            <Text
                              className="mb-0.5 mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                              size="txtOutfitSemiBold28"
                            >
                              On-Page SEO Services
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[65px] mt-3.5 text-[22px] text-blue_gray-800 sm:text-lg md:text-xl w-[89%] sm:w-full"
                            size="txtOutfitMedium22"
                          >
                            We offer on-page SEO services for content, photos,
                            descriptions, and visibility. They follow the design
                            principles for SEO-friendly websites in order to
                            provide their customers with the best outcomes.
                          </Text>
                          <div className="flex flex-row gap-5 items-end justify-start mt-10 w-[63%] md:w-full">
                            <Img
                              className="h-[45px] w-[45px]"
                              src="images/img_letsiconscheckfill.svg"
                              alt="letsiconscheckf_Three"
                            />
                            <Text
                              className="mb-0.5 mt-1.5 sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                              size="txtOutfitSemiBold28"
                            >
                              Off-Page SEO Services
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[65px] mt-3.5 text-[22px] text-blue_gray-800 sm:text-lg md:text-xl w-[89%] sm:w-full"
                            size="txtOutfitMedium22"
                          >
                            We undertake off-page SEO for better rankings. They
                            mainly specialize in handling backlink profiles.
                            Their SEO analysts strive to ensure that their
                            websites are listed on some of the popular sites in
                            the industry of travel.
                          </Text>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-3.5 justify-start md:mt-0 mt-7 w-[49%] md:w-full">
                          <div className="flex sm:flex-col flex-row gap-5 items-end justify-start w-[88%] md:w-full">
                            <Img
                              className="h-[45px] w-[45px]"
                              src="images/img_letsiconscheckfill.svg"
                              alt="letsiconscheckf_Four"
                            />
                            <Text
                              className="mb-0.5 sm:mt-0 mt-1.5 sm:text-2xl md:text-[26px] text-[28px] text-blue-A700"
                              size="txtOutfitSemiBold28"
                            >
                              Free Website Audit and Strategies
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[65px] text-[22px] text-blue_gray-800 sm:text-lg md:text-xl w-[89%] sm:w-full"
                            size="txtOutfitMedium22"
                          >
                            We go beyond essential SEO website development to
                            give out free website audits, analysis and SEO
                            strategies for transparent business strategies. They
                            target business owners in different industries, and
                            these packages include local SEO and e-commerce
                            services.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] items-center justify-center mt-[84px] sm:text-4xl md:text-[38px] text-[40px] text-center text-deep_orange-300"
                  size="txtOutfitSemiBold40Deeporange300"
                >
                  Stackkaroo’s Talent Hiring & Job Placement Services
                </Text>
                <Text
                  className="leading-[30.00px] mt-3.5 text-[22px] text-blue_gray-800 text-center sm:text-lg md:text-xl tracking-[0.66px] w-[95%] sm:w-full"
                  size="txtOutfitMedium22"
                >
                  We are a talent searching platform that redesigns how
                  companies hire talents. It is a cost-effective solution for
                  industries. We also provide global job opportunities with good
                  salaries, support, and professional development.
                </Text>
                <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] mt-20 w-[100%]">
                  <div className="bg-white-A700 border border-gray-700_3f border-solid flex flex-col items-center justify-start p-5 rounded-[25px] shadow-bs3 w-full">
                    <Img
                      className="h-[75px] md:h-auto object-cover w-[75px]"
                      src="images/img_locations2837797.png"
                      alt="locations283779"
                    />
                    <Text
                      className="mt-[22px] text-[22px] text-blue-A700 text-center sm:text-lg md:text-xl tracking-[0.66px]"
                      size="txtOutfitSemiBold22BlueA700"
                    >
                      Unleashing Top Talent Globally
                    </Text>
                    <Text
                      className="mb-[71px] mt-[17px] text-blue_gray-800 text-center text-xl tracking-[0.60px] w-full"
                      size="txtOutfitMedium20"
                    >
                      We offer 5% top talents and supports companies hiring from
                      various time zones.
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-700_3f border-solid flex flex-col items-center justify-start p-5 rounded-[25px] shadow-bs3 w-full">
                    <Img
                      className="h-[75px] md:h-auto object-cover w-[75px]"
                      src="images/img_promotion1589592.png"
                      alt="promotion158959"
                    />
                    <Text
                      className="mt-[22px] text-[22px] text-blue-A700 text-center sm:text-lg md:text-xl tracking-[0.66px]"
                      size="txtOutfitSemiBold22BlueA700"
                    >
                      Securing Success
                    </Text>
                    <Text
                      className="mb-[46px] mt-[17px] text-blue_gray-800 text-center text-xl tracking-[0.60px] w-full"
                      size="txtOutfitMedium20"
                    >
                      The company has a 30-day replacement policy and high
                      retention rate due to competitive payouts and strong brand
                      reputation.
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-700_3f border-solid flex flex-col items-center justify-start p-5 rounded-[25px] shadow-bs3 w-full">
                    <Img
                      className="h-[75px] md:h-auto object-cover w-[75px]"
                      src="images/img_pin31929701.png"
                      alt="pin31929701"
                    />
                    <Text
                      className="mt-[22px] text-[22px] text-blue-A700 text-center sm:text-lg md:text-xl tracking-[0.66px]"
                      size="txtOutfitSemiBold22BlueA700"
                    >
                      Beyond Borders
                    </Text>
                    <Text
                      className="mb-24 mt-[17px] text-blue_gray-800 text-center text-xl tracking-[0.60px] w-full"
                      size="txtOutfitMedium20"
                    >
                      We provide both, flexible full-time and part-time jobs
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-700_3f border-solid flex flex-col items-center justify-start p-5 rounded-[25px] shadow-bs3 w-full">
                    <Img
                      className="h-[75px] md:h-auto object-cover w-[75px]"
                      src="images/img_badge96167331.png"
                      alt="badge96167331"
                    />
                    <Text
                      className="mt-5 text-[22px] text-blue-A700 text-center sm:text-lg md:text-xl tracking-[0.66px]"
                      size="txtOutfitSemiBold22BlueA700"
                    >
                      End-to-End Excellence
                    </Text>
                    <Text
                      className="mb-[39px] mt-[26px] text-blue_gray-800 text-center text-xl tracking-[0.60px] w-full"
                      size="txtOutfitMedium20"
                    >
                      In our hiring process, a job description is shared,
                      matches are reviewed, interviews are conducted, and
                      post-hiring support is provided by us.
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-700_3f border-solid flex flex-col items-center justify-start p-5 rounded-[25px] shadow-bs3 w-full">
                    <Img
                      className="h-[75px] md:h-auto object-cover w-[75px]"
                      src="images/img_performance7655790.png"
                      alt="performance7655"
                    />
                    <Text
                      className="mt-[22px] text-[22px] text-blue-A700 text-center sm:text-lg md:text-xl tracking-[0.66px]"
                      size="txtOutfitSemiBold22BlueA700"
                    >
                      Efficiency Redefined
                    </Text>
                    <Text
                      className="my-[19px] text-blue_gray-800 text-center text-xl tracking-[0.60px] w-full"
                      size="txtOutfitMedium20"
                    >
                      The platform enables fast hiring without waiting for
                      candidates to reply. We offer affordable alternatives to
                      traditional recruitment methods and provides quality
                      talent.
                    </Text>
                  </div>
                  <div className="bg-white-A700 border border-gray-700_3f border-solid flex flex-col gap-5 items-center justify-start p-5 rounded-[25px] shadow-bs3 w-full">
                    <Img
                      className="h-[75px] md:h-auto object-cover w-[75px]"
                      src="images/img_commitment5165921.png"
                      alt="commitment51659"
                    />
                    <div className="flex flex-col gap-6 items-center justify-start mb-3.5">
                      <Text
                        className="text-[22px] text-blue-A700 text-center sm:text-lg md:text-xl tracking-[0.66px]"
                        size="txtOutfitSemiBold22BlueA700"
                      >
                        <>
                          Simplified Contracts
                          <br />
                          Satisfied Partnerships
                        </>
                      </Text>
                      <Text
                        className="text-blue_gray-800 text-center text-xl tracking-[0.60px] w-full"
                        size="txtOutfitMedium20"
                      >
                        The contracts are good and satisfy both parties. We save
                        time and money by providing remote onboarding and IT
                        support.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[708px] object-cover right-[0] top-[11%] w-[57%]"
              src="images/img_baf2eadd07e84.png"
              alt="baf2eadd07eEightyFour"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LANDINGPAGEPage;

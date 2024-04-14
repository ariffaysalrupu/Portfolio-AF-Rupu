import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgress,
  Progress,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useState } from "react";
import bioImage from "../../public/images/bio.jpg";

const Skills = () => {
  const [selected, setSelected] = useState("Skills");
  return (
    <div id="skills" className="w-full h-auto bg-[#0c1311] pb-6">
      <h1
        dir="rtl"
        className="font-cute-font text-secondary text-7xl text-center pt-16 flex flex-col items-center justify-center"
      >
        <p className="border-b-4 border-secondary">Skills & Details</p>
        <p className="text-white text-lg font-poppins py-5">
          Unearthing potential, igniting possibilities
        </p>
      </h1>
      <div className="flex justify-center items-center mx-auto w-9/12 mt-5">
        <div className="flex flex-col gap-8 justify-center items-center bg-[#0c1311]">
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key)}
            classNames={{
              tabList:
                "w-full relative rounded flex justify-center gap-x-4 items-center bg-[#0c1311] opacity-100 overflow-hidden",
              cursor:
                "bg-transparent text-white px-8 py-4 rounded border-none focus:outline-none focus:ring-none focus:bg-none opacity-100",
              tab: "transition-opacity-disabled data-[hover-unselected=true]:opacity-disabled outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-0 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-0 h-0 text-small px-8 py-4 rounded opacity-100",
              tabContent:
                "group-data-[selected=true]:text-[#0c1311] group-data-[selected=true]:bg-[#10D3A4] group-data-[selected=true]:px-8 group-data-[selected=true]:py-4 group-data-[selected=true]:rounded opacity-100",
            }}
          >
            <Tab key="Biography" title="Biography">
              <div className="flex items-center justify-center pb-10">
                <div className="flex gap-x-8">
                  <div className="w-3/12"></div>
                  <Card className="bg-transparent rounded-none text-white shadow-none font-semibold h-auto w-3/12">
                    <img
                      src={bioImage}
                      alt="Rupu-Profile-Img"
                      width={"724px"}
                      height={"660px"}
                      className="shadow-2xl"
                    />
                  </Card>
                  <Card className="bg-transparent rounded-none text-white shadow-none font-semibold h-auto w-4/12">
                    <div className="flex flex-col justify-center">
                      <div className="pb-4">
                        <p className="text-2xl">Md Arif Faysal Rupu</p>
                        <p className="text-white text-sm font-extralight pt-6 pb-2">
                          <span className="text-[#10D3A4]">Date of Birth:</span>{" "}
                          15 Oct 1994
                        </p>
                        <p className="text-white text-sm font-extralight pb-2">
                          <span className="text-[#10D3A4]">Gender:</span> Male
                        </p>
                        <p className="text-white text-sm font-extralight pb-2">
                          <span className="text-[#10D3A4]">
                            Permanent Address:
                          </span>{" "}
                          Dhaka, Bangladesh
                        </p>
                        <p className="text-white text-sm font-extralight pb-2">
                          <span className="text-[#10D3A4]">Address:</span>{" "}
                          Hamburg, Germany
                        </p>
                        <p className="text-white text-sm font-extralight pb-2">
                          <span className="text-[#10D3A4]">Mobile:</span>{" "}
                          +4917647331965
                        </p>
                        <p className="text-white text-sm font-extralight pb-2">
                          <span className="text-[#10D3A4]">Email:</span>{" "}
                          1arif3faysal1rupu3@gmail.com
                        </p>
                      </div>
                      <button className="w-48 h-10 border-2 border-white rounded-md bg-secondary text-gray-600 border-none">
                        <i className="fa fa-solid fa-arrow-down mr-2"></i>{" "}
                        Download CV
                      </button>
                    </div>
                  </Card>
                  <div className="w-2/12"></div>
                </div>
              </div>
            </Tab>
            <Tab className="w-full" key="Education" title="Education">
              <div className="flex flex-col gap-y-6 items-center pb-10">
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-transparent border border-[#2D443E] rounded-none text-white shadow-none font-semibold h-auto w-6/12 p-2">
                    <CardHeader>
                      <p className="text-[#10D3A4] text-base border-b-1 border-[#10D3A4] w-16">
                        Masters
                      </p>
                    </CardHeader>
                    <CardBody>
                      <p className="text-white text-lg font-semibold">
                        Environmental Engineering
                      </p>
                      <p className="text-white text-xs font-extralight pt-2">
                        Hamburg Unviersity of Technology
                      </p>
                      <p className="text-[#A5A5A5] text-xs font-extralight pt-2">
                        2023 - Current
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="bg-transparent border border-[#2D443E] rounded-none text-white shadow-none font-semibold h-auto w-6/12 p-2">
                    <CardHeader>
                      <p className="text-[#10D3A4] text-base border-b-1 border-[#10D3A4] w-40">
                        Professional Course
                      </p>
                    </CardHeader>
                    <CardBody>
                      <p className="text-white text-lg font-semibold">
                        Front-end Development
                      </p>
                      <p className="text-white text-xs font-extralight pt-2">
                        Programming Hero
                      </p>
                      <p className="text-[#A5A5A5] text-xs font-extralight pt-2">
                        2023
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-transparent border border-[#2D443E] rounded-none text-white shadow-none font-semibold h-auto w-6/12 p-2">
                    <CardHeader>
                      <p className="text-[#10D3A4] text-base border-b-1 border-[#10D3A4] w-40">
                        Professional Course
                      </p>
                    </CardHeader>
                    <CardBody>
                      <p className="text-white text-lg font-semibold">
                        Professional UX/UI Design
                      </p>
                      <p className="text-white text-xs font-extralight pt-2">
                        Creative IT
                      </p>
                      <p className="text-[#A5A5A5] text-xs font-extralight pt-2">
                        2023
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="bg-transparent border border-[#2D443E] rounded-none text-white shadow-none font-semibold h-auto w-6/12 p-2">
                    <CardHeader>
                      <p className="text-[#10D3A4] text-base border-b-1 border-[#10D3A4] w-[70px]">
                        Bachelor
                      </p>
                    </CardHeader>
                    <CardBody>
                      <p className="text-white text-lg font-semibold">
                        Civil Engineering
                      </p>
                      <p className="text-white text-xs font-extralight pt-2">
                        Presidency University
                      </p>
                      <p className="text-[#A5A5A5] text-xs font-extralight pt-2">
                        2016 - 2019
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-transparent border border-[#2D443E] rounded-none text-white shadow-none font-semibold h-auto w-6/12 p-2">
                    <CardHeader>
                      <p className="text-[#10D3A4] text-base border-b-1 border-[#10D3A4] w-[68px]">
                        Diploma
                      </p>
                    </CardHeader>
                    <CardBody>
                      <p className="text-white text-lg font-semibold">
                        Architecture
                      </p>
                      <p className="text-white text-xs font-extralight pt-2">
                        National Polytechnic Institute
                      </p>
                      <p className="text-[#A5A5A5] text-xs font-extralight pt-2">
                        2011 - 2015
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="bg-transparent border border-[#2D443E] rounded-none text-white shadow-none font-semibold h-auto w-6/12 p-2">
                    <CardHeader>
                      <p className="text-[#10D3A4] text-base border-b-1 border-[#10D3A4] w-8">
                        SSC
                      </p>
                    </CardHeader>
                    <CardBody>
                      <p className="text-white text-lg font-semibold">
                        Business Studies
                      </p>
                      <p className="text-white text-xs font-extralight pt-2">
                        Bamoil Ideal High School and College
                      </p>
                      <p className="text-[#A5A5A5] text-xs font-extralight pt-2">
                        2008 - 2010
                      </p>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Tab>
            <Tab className="" key="Skills" title="Digital Skills">
              <div className="flex items-center gap-x-8 pb-10">
                <Card className="bg-[#0c1311 text-[#10D3A4] shadow-none flex items-center justify-center border-2 border-[#10D3A4] px-12 py-4">
                  <CardBody className="flex items-center justify-center">
                    <CircularProgress
                      classNames={{
                        svg: "w-16 h-16 drop-shadow-md",
                        indicator: "stroke-[#10D3A4]",
                        track: "stroke-white/10",
                        value: "text-[10px] font-semibold text-[#10D3A4]",
                      }}
                      value={90}
                      strokeWidth={3}
                      showValueLabel={true}
                    />
                  </CardBody>
                  <CardFooter className="justify-center items-center pt-0">
                    UX/UI Design
                  </CardFooter>
                </Card>
                <Card className="bg-[#0c1311 text-[#10D3A4] shadow-none flex items-center justify-center border-2 border-[#10D3A4] px-12 py-4">
                  <CardBody className="flex items-center justify-center">
                    <CircularProgress
                      classNames={{
                        svg: "w-16 h-16 drop-shadow-md",
                        indicator: "stroke-[#10D3A4]",
                        track: "stroke-white/10",
                        value: "text-[10px] font-semibold text-[#10D3A4]",
                      }}
                      value={85}
                      strokeWidth={3}
                      showValueLabel={true}
                    />
                  </CardBody>
                  <CardFooter className="justify-center items-center pt-0">
                    Front End Development
                  </CardFooter>
                </Card>
                <Card className="bg-[#0c1311 text-[#10D3A4] shadow-none flex items-center justify-center border-2 border-[#10D3A4] px-12 py-4">
                  <CardBody className="flex items-center justify-center">
                    <CircularProgress
                      classNames={{
                        svg: "w-16 h-16 drop-shadow-md",
                        indicator: "stroke-[#10D3A4]",
                        track: "stroke-white/10",
                        value: "text-[10px] font-semibold text-[#10D3A4]",
                      }}
                      value={80}
                      strokeWidth={3}
                      showValueLabel={true}
                    />
                  </CardBody>
                  <CardFooter className="justify-center items-center pt-0">
                    Graphic Design
                  </CardFooter>
                </Card>
              </div>
              <div className="flex flex-col gap-y-4 items-center pb-10">
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>Figma</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={90}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>Adobe XD</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={85}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                </div>
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>HTML</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={75}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>CSS</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={75}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                </div>
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>JavaScript</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={60}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>React</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={85}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                </div>
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>Photoshop</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={80}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>Illustrator</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={80}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                </div>
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>Autocad</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={85}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>3ds Max</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={95}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Tab>
            <Tab className="w-full" key="LangSkills" title="Language Skills">
              <div className="flex flex-col gap-y-4 items-center ">
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>Bangla</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        valueLabel="Native"
                        value={100}
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>English</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={90}
                        valueLabel="Fluent"
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                </div>
                <div className="flex gap-x-8 w-full">
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>Hindi</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={60}
                        valueLabel="Intermediate"
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>Urdu</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={60}
                        valueLabel="Intermediate"
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                </div>
                <div className="flex gap-x-8 w-full pb-10">
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>German</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={20}
                        valueLabel="Beginner"
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                  <Card className="bg-[#091C18] text-white shadow-none rounded-md font-semibold h-auto w-6/12">
                    <CardHeader>Turkish</CardHeader>
                    <CardBody>
                      <Progress
                        size="sm"
                        value={20}
                        valueLabel="Beginner"
                        color="secondary"
                        showValueLabel={true}
                        className="max-w-md"
                      />
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Skills;

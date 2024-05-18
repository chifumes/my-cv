import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaSchoolCircleCheck } from "react-icons/fa6";

const Page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between flex-wrap">
        <div className="basis-4/12 LeftBackgroundColor">
          <div className="flex flex-row justify-center">
            <div className="w-[95%] md:w-10/12 mt-5">
              <h1 className="text-2xl font-semibold">Personal Info</h1>
              <div className="mt-3">
                <div className="flex items-center">
                  <span className="rounded-full w-6 h-6 round flex items-center justify-center">
                    <IoMdMail />
                  </span>
                  <p className="pl-2 text-sm md:text-lg">chifum@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full w-6 h-6 round  flex items-center justify-center">
                    <IoCall />
                  </span>
                  <p className="pl-2 text-sm md:text-lg">0469054535</p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full w-6 h-6 round  flex items-center justify-center">
                    <FaLocationDot />
                  </span>
                  <p className="pl-2 text-sm md:text-lg">
                    U 1 30 Beck Street, Park Ridge, 4125, Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-8/12 RightBackgroundColor">
          <div className="flex flex-row justify-center">
            <div className="w-[95%] md:w-11/12 mt-5">
              <h1 className="text-2xl font-semibold">Summary</h1>
              <hr className="w-[99%]" />
              <div className="mt-3">
                <div className="">
                  <p className="summary">
                    Detail-oriented and results-driven Cloud Engineer with 3
                    years of experience in designing, implementing, and
                    maintaining cloud infrastructure solutions. Procient in a
                    variety of cloud platforms and technologies, with a strong
                    focus on scalability, security, and automation. Seeking to
                    leverage expertise in cloud architecture to contribute to
                    innovative projects in a dynamic team environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between flex-wrap">
        <div className="basis-4/12 LeftBackgroundColor">
          <div className="flex flex-row justify-center">
            <div className="w-[95%] md:w-10/12 mt-5">
              <h1 className="text-2xl font-semibold">Education</h1>
              <div className="mt-3">
                <div className="flex items-center">
                  <span className="rounded-full w-6 h-6 round flex items-center justify-center">
                    <LiaSchoolSolid />
                  </span>
                  <p className="pl-2 text-sm md:text-lg">
                    Master of Business Information Systems
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="rounded-full w-6 h-6 round  flex items-center justify-center">
                    <FaSchoolCircleCheck />
                  </span>
                  <p className="pl-2 text-sm md:text-lg">
                    Torrens University, Australia 2023 - 2024
                  </p>
                </div>
                {/* <div className="flex items-center">
                  <span className="rounded-full w-6 h-6 round  flex items-center justify-center">
                    <FaLocationDot />
                  </span>
                  <p className="pl-2 text-sm md:text-lg">
                    U 1 30 Beck Street, Park Ridge, 4125, Australia
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="basis-8/12 RightBackgroundColor">
          <div className="flex flex-row justify-center">
            <div className="w-[95%] md:w-11/12 mt-5">
              <h1 className="text-2xl font-semibold">Work Experience</h1>
              <hr className="w-[99%]" />
              <div className="mt-3">
                <div className="">
                  <h5>Cloud Engineer, Nicolas - Maggio</h5>
                  <h6>March 2023 - Present</h6>
                  <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Developed and maintained the automation of cloud-based
                      resources using CloudFormation, Terraform, and Ansible.
                    </span>
                  </div>
                  <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Designed and implemented highly-available cloud
                      infrastructures using Amazon Web Services.
                    </span>
                  </div>
                  <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Utilized AWS services such as EC2, S3, VPC, and IAM to
                      streamline cloud-based operations.
                    </span>
                  </div>
                  <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Assisted in the migration of on-premises infrastructure to
                      Microsoft Azure, including VMs, databases, and storage
                    </span>
                  </div>
                  {/* <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Supported the deployment and conguration of Kubernetes
                      clusters on Google Cloud Platform (GCP), enabling
                      containerized application deployment and orchestration.
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between flex-wrap">
        <div className="basis-4/12 LeftBackgroundColor">
          <div className="flex flex-row justify-center">
            <div className="w-[95%] md:w-10/12 mt-5">
              <h1 className="text-2xl font-semibold">Skills</h1>
              <div className="mt-3">
                <div className="flex items-center">
                  <span className="flex items-center justify-center">
                    {/* <IoMdMail /> */}
                  </span>
                  <p className="pl-2 text-sm md:text-lg">
                    Cloud Platforms: AWS, Azure,
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center justify-center">
                    {/* <IoCall /> */}
                  </span>
                  <p className="pl-2 text-sm md:text-lg">
                    Google Cloud Platform -
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center justify-center">
                    {/* <FaLocationDot /> */}
                  </span>
                  <p className="pl-2 text-sm md:text-lg">Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-8/12 RightBackgroundColor">
          <div className="flex flex-row justify-center">
            <div className="w-[95%] md:w-11/12 mt-5">
              {/* <h1 className="text-2xl font-semibold">Work Experience</h1> */}
              {/* <hr className="w-[99%]" /> */}
              <div className="mt-3">
                <div className="">
                  <h5>Cloud Engineer, Cronin and Sons</h5>
                  <h6>May 2021 - February 2023</h6>
                  <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Developed and maintained the automation of cloud-based
                      resources using CloudFormation, Terraform, and Ansible.
                    </span>
                  </div>
                  <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Designed and implemented highly-available cloud
                      infrastructures using Amazon Web Services.
                    </span>
                  </div>
                  <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Utilized AWS services such as EC2, S3, VPC, and IAM to
                      streamline cloud-based operations.
                    </span>
                  </div>
                  <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Assisted in the migration of on-premises infrastructure to
                      Microsoft Azure, including VMs, databases, and storage
                    </span>
                  </div>
                  {/* <div className="md:pl-2 flex items-center">
                    <BsDot className=" text-5xl" />
                    <span className="summary">
                      Supported the deployment and conguration of Kubernetes
                      clusters on Google Cloud Platform (GCP), enabling
                      containerized application deployment and orchestration.
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
// h-[32rem]
// border-2 border-rose-500

// ccacrfaz37

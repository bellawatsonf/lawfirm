// import React from "react";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import img2 from "./assets/Rectangle.svg";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

type FieldType = {
  firstname?: string;
  lastname?: string;
  phone?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function ContactUs() {
  return (
    <>
      <HeaderComponent />
      <div className="bg-[url('/ContactUs.svg')] h-[auto] md:h-[480px] px-[80px] pt-[70px] md:pt-[186px] pb-[40px] md:pb-[0px] bg-cover">
        <p className="text-[white] text-[28px] md:text-[64px] font-semibold font-[Poppins] pb-[32px]">
          HUBUNGI KAMI
        </p>
      </div>

      <div className="px-[20px] md:px-[80px] pt-[10px] md:pt-[80px] bg-[#F8F8F8]  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" pb-[32px] px-[24px] pt-[10%] md:pt-[30%]">
            {/* <img src={logo} className="hidden md:block" /> */}
            <p className="text-[#1D1D1D] text-[20px] md:text-[24px] font-bold font-[Poppins] py-[12px] md:py-[24px]">
              KANTOR KAMI
            </p>
            <p className="text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins] ">
              Jl. Pondasi Raya No. 28, RT.02 RW 17, Pulo Gadung, Jakarta Timur,
              13210
            </p>
            <div className="flex flex-row items-center pt-[32px]">
              <MailOutlined className="text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins]" />
              <a href="mailto:perkasa.phe@gmail.com" target="_blank">
                <p className="hover:cursor-pointer text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins] pl-[10px]">
                  perkasa.phe@gmail.com
                </p>
              </a>
            </div>
            <div className="flex flex-row items-center pt-[32px]">
              <PhoneOutlined className="text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins]" />
              <a href="https://wa.me/+6281321130071" target="_blank">
                <p className="hover:cursor-pointer text-[#1D1D1D] text-[16px] md:text-[20px] font-medium font-[Poppins] pl-[10px]">
                  0813-2113-0071
                </p>
              </a>
            </div>
          </div>

          <div className="py-[32px] px-[10px] md:px-[24px]">
            <iframe
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="py-[0px] md:py-[32px] px-[10px] md:px-[24px] ">
            <img src={img2} className="w-[100%]  h-[302px] md:h-[402px]" />
          </div>
          <div className="mt-[0px] md:mt-[40px]">
            {/* <img src={logo} className="hidden md:block" /> */}
            <p className="text-[#07152A] text-[28px] md:text-[40px] font-semibold font-[Poppins] leading-[32px]">
              Send us Message
            </p>
            <div className="w-full md:w-[70%] mt-[12px] md:mt-[40px]">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="flex flex-row">
                  <div className="w-[50%] mr-[10px]">
                    <Form.Item<FieldType>
                      name="firstname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your firstname",
                        },
                      ]}
                    >
                      <Input placeholder="input your firstname" />
                    </Form.Item>
                  </div>
                  <div className="w-[50%]">
                    <Form.Item<FieldType>
                      name="lastname"
                      rules={[
                        {
                          required: true,
                          message: "Please input your lastname",
                        },
                      ]}
                    >
                      <Input placeholder="input your lastname" />
                    </Form.Item>
                  </div>
                </div>

                <Form.Item<FieldType>
                  name="phone"
                  rules={[
                    { required: true, message: "Please input your phone" },
                  ]}
                >
                  <Input placeholder="input your phone number" />
                </Form.Item>

                <Form.Item>
                  <TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[black] w-[100%]"
                  >
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

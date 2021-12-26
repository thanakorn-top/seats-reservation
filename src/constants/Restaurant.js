import r1img1 from "../assests/rest1/1.jpg";
import r1img2 from "../assests/rest1/2.jpg";
import r1img3 from "../assests/rest1/3.jpg";

import r2img1 from "../assests/rest2/1.jpg";
import r2img2 from "../assests/rest2/2.jpg";
import r2img3 from "../assests/rest2/3.jpg";

import r3img1 from "../assests/rest3/1.jpg";
import r3img2 from "../assests/rest3/2.jpg";
import r3img3 from "../assests/rest3/3.jpg";

import r4img1 from "../assests/rest4/1.jpg";
import r4img2 from "../assests/rest4/2.jpg";
import r4img3 from "../assests/rest4/3.jpg";

export const RESERVATION_TIMES = [
  { time: "10.30 AM" },
  { time: "11.00 AM" },
  { time: "12.30 PM" },
  { time: "2.00 PM" },
  { time: "3.30 PM" },
  { time: "5.00 PM" },
  { time: "6.30 PM" },
];

export const DUMMY_RESTAURANT = [
  {
    id: "p1",
    price: 6,
    title: "ร้านเจ๊โอว",
    description: "ชื่อเต็มว่า “เจ๊โอว ข้าวต้มเป็ด” เปิดมานมนาน 3 ชั่วอายุคน กว่าครึ่งศตวรรษ",
    img: r1img1,
    img2: r1img2,
    img3: r1img3,
  },
  {
    id: "p2",
    price: 2,
    title: "ร้านเจ๊ไฝ",
    description: "ร้านอาหารที่ได้รับเสียงฮือฮาและเป็นกระแสมากที่สุดต้องยกให้กับร้านสตรีทฟู้ดหนึ่งเดียวที่ได้รับ 1 ดาวมิชลิน",
    img: r2img1,
    img2: r2img2,
    img3: r2img3,
  },
  {
    id: "p3",
    price: 1,
    title: "ร้านโจ๊กหมูทอง",
    description: "โจ๊กหมูทอง ผู้ไม่เคยหลับใหล เปิดให้ลูกค้าตลอดเวลาไม่มีวันหยุด สุดพิเศษกับหมูเด้งสูตรล้ำค่าดั่งทองคำ ถ้าได้ลองอาจมีซ้ำ",
    img: r3img1,
    img2: r3img2,
    img3: r3img3,
  },
  {
    id: "p4",
    price: 8,
    title: "ร้านทิพย์สมัย ผัดไทยประตุผี",
    description: "ผัดไทยอายุเก่าแก่ สูตรแบบฉบับพิเศษไม่เหมือนใคร น้ำส้ม แท้ คั้นสด ทิพย์สมัย ผัดไทย เส้นจันท์มันกุ้ง กุ้งสดตัวใหญ่",
    img: r4img1,
    img2: r4img2,
    img3: r4img3,
  },
];

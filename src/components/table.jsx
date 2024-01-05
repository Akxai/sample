// import { Card, Typography } from "@material-tailwind/react";

// const TABLE_HEAD = ["Name", "Job", "Employed", ""];

// const TABLE_ROWS = [
//   {
//     name: "John Michael",
//     job: "Manager",
//     date: "23/04/18",
//   },
//   {
//     name: "Alexa Liras",
//     job: "Developer",
//     date: "23/04/18",
//   },
//   {
//     name: "Laurent Perrier",
//     job: "Executive",
//     date: "19/09/17",
//   },
//   {
//     name: "Michael Levi",
//     job: "Developer",
//     date: "24/12/08",
//   },
//   {
//     name: "Richard Gran",
//     job: "Manager",
//     date: "04/10/21",
//   },
// ];

// export function TableWithStripedRows() {
//   return (
//     <Card className="h-full w-full overflow-scroll">
//       <table className="w-full min-w-max table-auto text-left">
//         <thead>
//           <tr>
//             {TABLE_HEAD.map((head) => (
//               <th
//                 key={head}
//                 className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
//               >
//                 <Typography
//                   variant="small"
//                   color="blue-gray"
//                   className="font-normal leading-none opacity-70"
//                 >
//                   {head}
//                 </Typography>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {TABLE_ROWS.map(({ name, job, date }, index) => (
//             <tr key={name} className="even:bg-blue-gray-50/50">
//               <td className="p-4">
//                 <Typography
//                   variant="small"
//                   color="blue-gray"
//                   className="font-normal"
//                 >
//                   {name}
//                 </Typography>
//               </td>
//               <td className="p-4">
//                 <Typography
//                   variant="small"
//                   color="blue-gray"
//                   className="font-normal"
//                 >
//                   {job}
//                 </Typography>
//               </td>
//               <td className="p-4">
//                 <Typography
//                   variant="small"
//                   color="blue-gray"
//                   className="font-normal"
//                 >
//                   {date}
//                 </Typography>
//               </td>
//               <td className="p-4">
//                 <Typography
//                   as="a"
//                   href="#"
//                   variant="small"
//                   color="blue-gray"
//                   className="font-medium"
//                 >
//                   Edit
//                 </Typography>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Card>
//   );
// }

// import { Card, Typography } from "@material-tailwind/react";
// import { useState } from "react";
// import React from "react";

// const TABLE_HEAD = [
//   "Package",
//   "Polarity",
//   "Bvdss",
//   "Rds(on) mΩ",
//   "Qg(nC)",
//   "RθJC(℃/W)",
//   "Pd(W)",
//   "Configuration",
// ];

// const TABLE_ROWS = [
//   {
//     pkg: "Sample Package",
//     polarity: "Sample Polarity",
//     bvdss: "Sample Bvdss",
//     rds10V: [0, 3, 5, 6.7, 7.2],
//     rds5V: [0, 3, 5, 6.7, 7.2],
//     rds4_5V: [0, 3, 5, 6.7, 7.2],
//     rds2_5V: [0, 3, 5, 6.7, 7.2],
//     rds1_8V: [0, 3, 5, 6.7, 7.2],
//     qg4_5V: [0, 4.2, 10.7, 6.7, 7.2],
//     qg10V: [0, 5, 8, 6.7, 7.2],
//     rthetaJC: [0, 5, 8, 6.7, 7.2],
//     pd: [0, 5, 8, 6.7, 7.2],
//     configuration: "Sample Configuration",
//   },
//   // Add more rows as needed
// ];

// export function CustomTable() {
//   const [activeItem, setActiveItem] = useState({
//     rds: { voltage: "@10V", index: 0 },
//     qg: { voltage: "@4.5V(typ)", index: 0 },
//     rthetaJC: { voltage: "@0V", index: 0 },
//     pd: { voltage: "@0V", index: 0 },
//   });

//   const handleItemClick = (type, voltage, index) => {
//     setActiveItem((prev) => ({
//       ...prev,
//       [type]: { voltage, index },
//     }));
//   };

//   return (
//     <Card className="h-full w-full overflow-scroll">
//       <table className="w-full min-w-max table-auto text-left">
//         <thead>
//           <tr>
//             {TABLE_HEAD.map((head) => (
//               <th
//                 key={head}
//                 className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
//               >
//                 <Typography
//                   variant="small"
//                   color="blue-gray"
//                   className="font-normal leading-none opacity-70"
//                 >
//                   {head}
//                 </Typography>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {TABLE_ROWS.map(
//             (
//               {
//                 pkg,
//                 polarity,
//                 bvdss,
//                 rds10V,
//                 rds5V,
//                 rds4_5V,
//                 rds2_5V,
//                 rds1_8V,
//                 qg4_5V,
//                 qg10V,
//                 rthetaJC,
//                 pd,
//                 configuration,
//               },
//               rowIndex
//             ) => (
//               <React.Fragment key={rowIndex}>
//                 <tr className={rowIndex % 2 === 0 ? "bg-blue-gray-50/50" : ""}>
//                   <td className="p-4">{pkg}</td>
//                   <td className="p-4">{polarity}</td>
//                   <td className="p-4">{bvdss}</td>
//                   <td className="p-4">
//                     <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
//                       {[rds10V, rds5V, rds4_5V, rds2_5V, rds1_8V].map(
//                         (rds, voltageIndex) => (
//                           <p
//                             key={voltageIndex}
//                             className={`rounded-full cursor-pointer px-[2px] ${
//                               activeItem.rds.voltage ===
//                                 `@${rds[voltageIndex]}V` &&
//                               activeItem.rds.index === voltageIndex
//                                 ? "bg-[#F4F4F5]"
//                                 : ""
//                             }`}
//                             onClick={() =>
//                               handleItemClick(
//                                 "rds",
//                                 `@${rds[voltageIndex]}V`,
//                                 voltageIndex
//                               )
//                             }
//                           >
//                             {rds[voltageIndex]}
//                           </p>
//                         )
//                       )}
//                     </div>
//                   </td>
//                   <td className="p-4">
//                     <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
//                       {[qg4_5V, qg10V].map((qg, voltageIndex) => (
//                         <p
//                           key={voltageIndex}
//                           className={`rounded-full cursor-pointer px-[2px] ${
//                             activeItem.qg.voltage ===
//                               `@${qg[voltageIndex]}V(typ)` &&
//                             activeItem.qg.index === voltageIndex
//                               ? "bg-[#F4F4F5]"
//                               : ""
//                           }`}
//                           onClick={() =>
//                             handleItemClick(
//                               "qg",
//                               `@${qg[voltageIndex]}V(typ)`,
//                               voltageIndex
//                             )
//                           }
//                         >
//                           {qg[voltageIndex]}
//                         </p>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="p-4">
//                     <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
//                       {rthetaJC.map((item, index) => (
//                         <p
//                           key={index}
//                           className={`rounded-full cursor-pointer px-[2px] ${
//                             activeItem.rthetaJC.voltage === `@${item}V` &&
//                             activeItem.rthetaJC.index === index
//                               ? "bg-[#F4F4F5]"
//                               : ""
//                           }`}
//                           onClick={() =>
//                             handleItemClick("rthetaJC", `@${item}V`, index)
//                           }
//                         >
//                           {item}
//                         </p>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="p-4">
//                     <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
//                       {pd.map((item, index) => (
//                         <p
//                           key={index}
//                           className={`rounded-full cursor-pointer px-[2px] ${
//                             activeItem.pd.voltage === `@${item}V` &&
//                             activeItem.pd.index === index
//                               ? "bg-[#F4F4F5]"
//                               : ""
//                           }`}
//                           onClick={() =>
//                             handleItemClick("pd", `@${item}V`, index)
//                           }
//                         >
//                           {item}
//                         </p>
//                       ))}
//                     </div>
//                   </td>
//                   <td className="p-4">{configuration}</td>
//                 </tr>
//               </React.Fragment>
//             )
//           )}
//         </tbody>
//       </table>
//     </Card>
//   );
// }

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Package",
  "Polarity",
  "Bvdss",
  "Rds(on) mΩ",
  "Qg(nC)",
  "RθJC(℃/W)",
  "Pd(W)",
  "Configuration",
];
const VOLTAGE_LABELS = [
  "@10V",
  "@5V",
  "@4.5V",
  "@2.5V",
  "@1.8V",
  "@4.5V(typ)",
  "@10V(typ)",
];

const TABLE_ROWS = [
  {
    pkg: "",
    polarity: "",
    bvdss: "",
    rds: [10, 5, 4.5, 2.5, 1.8],
    qg: [4.2, 5, 8, 6.7, 7.2],
    rthetaJC: "",
    pd: "",
    configuration: "",
  },
  // Add more rows as needed
];

export function MOSFETTable() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            (
              { pkg, polarity, bvdss, rds, qg, rthetaJC, pd, configuration },
              rowIndex
            ) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-blue-gray-50/50" : ""}
              >
                <td className="p-4">{pkg}</td>
                <td className="p-4">{polarity}</td>
                <td className="p-4">{bvdss}</td>
                <td className="p-4">
                  <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                    {rds.map((value, index) => (
                      <p
                        key={index}
                        className="rounded-full cursor-pointer px-[2px]"
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                    {qg.map((value, index) => (
                      <p
                        key={index}
                        className="rounded-full cursor-pointer px-[2px]"
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                    {rthetaJC}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2 text-[0.5rem] text-[#6B6B6B]">
                    {pd}
                  </div>
                </td>
                <td className="p-4">{configuration}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}

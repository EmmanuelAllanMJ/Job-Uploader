import Entry from "./Entry";
import Card from "./Entry";
import Wrapper from "./Wrapper";

type SelectProps = {
  children: React.ReactNode;
};
function Entries() {
  var data = [
    {
      title: "UX UI Designer",
      companyName: "Great View",
      industry: "Information Technology",
      location: "Chennai, TamilNadu, India",
      remoteType: "In-office",
      expMin: 1,
      expMax: 2,
      totalEmp: 51 - 200,
      applyType: false,
      salaryMin: 30000,
      salaryMax: 50000,
      quick: false,
      id: "1",
    },
    {
      title: "UX UI Designer",
      companyName: "Great View",
      industry: "Information Technology",
      location: "Chennai, TamilNadu, India",
      remoteType: "In-office",
      expMin: 1,
      expMax: 2,
      totalEmp: 51 - 200,
      applyType: false,
      salaryMin: 30000,
      salaryMax: 50000,
      quick: true,
      id: "1",
    },
  ];
  return (
    <div className=" grid grid-cols-[50%_50%] grid-rows-[auto] gap-x-5 gap-y-2.5 bg-[#D8D8D8] py-5 px-16 ">
      {data.map((job) => {
        return <Entry job={job} />;
      })}
    </div>
  );
}

export default Entries;

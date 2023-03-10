import axios from "axios";
import { useEffect, useState } from "react";
import Entry from "./Entry";

const baseURL = process.env.REACT_APP_BASE_URL;

type SelectProps = {
  title: string;
  companyName: string;
  industry: string;
  location: string;
  remoteType: string;
  expMin: number;
  expMax: number;
  totalEmp: number;
  applyType: boolean;
  salaryMin: number;
  salaryMax: number;
  quick: string | null;
  id: string;
};

function Entries() {
  const [jobs, setJobs] = useState<SelectProps[] | null | void>([]);
  console.log("base", baseURL);
  console.log("base1", process.env.REACT_APP_BASE_URL);

  useEffect(() => {
    axios
      .get<SelectProps[]>(`${baseURL}/tasks`)
      .then((response) => {
        console.log(response.data);
        setJobs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" grid md:grid-cols-[50%_50%] grid-cols-[100%] grid-rows-[auto] gap-x-5 gap-y-2.5 bg-[#D8D8D8] md:py-5 md:px-12 py-2 px-5">
      {jobs != null && jobs.map((job: SelectProps) => <Entry job={job} />)}
    </div>
  );
}

export default Entries;

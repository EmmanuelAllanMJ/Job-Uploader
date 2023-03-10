import axios from "axios";
import { useEffect, useState } from "react";
import Entry from "./Entry";
import { SelectProps } from "../../assets/Types";

const baseURL = process.env.REACT_APP_BASE_URL;

function Entries() {
  const [jobs, setJobs] = useState<SelectProps[] | null | void>([]);

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

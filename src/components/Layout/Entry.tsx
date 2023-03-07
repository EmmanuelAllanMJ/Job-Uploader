import Button from "../UI/button";

type SelectProps = {
  job: {
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
    quick: boolean;
    id: string;
  };
};

function Entry({ job }: SelectProps) {
  return (
    <div className="p-4 justify-self-center rounded-lg	bg-[#fff]">
      <div className="flex">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png" />
        <div>
          <h2>{job.title}</h2>
          <h3>{job.companyName}</h3>
          <h4>
            {job.location}({job.remoteType})
          </h4>

          <h4>
            Experience (<span>{job.expMin}</span>-<span>{job.expMax}</span>)
          </h4>
          <h4>INR() </h4>
          <h1>JOB</h1>
          {job["title"]}
        </div>
      </div>
      <Button>{job.quick ? "Apply" : "External Apply"}</Button>
    </div>
  );
}

export default Entry;

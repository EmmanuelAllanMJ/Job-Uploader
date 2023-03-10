import BorderBtn from "../UI/borderBtn";
import Button from "../UI/button";
import { SelectPropsEntry as SelectProps } from "../../assets/Types";

function Entry({ job }: SelectProps) {
  return (
    <div className="w-full p-4 justify-self-center rounded-lg	bg-[#fff]">
      <div className="flex gap-2">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png" />
        <div>
          <h2>{job.title}</h2>
          <h3 className="font-medium">
            {job.companyName} - {job.industry}
          </h3>
          <h4 className="text-grey pb-6 block">
            {job.location} ({job.remoteType})
          </h4>
          <h4 className="block">Part-Time (9:00am - 5:00pm)</h4>
          <h4 className="block">
            Experience (<span>{job.expMin}</span>-<span>{job.expMax}</span>{" "}
            years)
          </h4>
          <h4 className="block">
            INR(&#8377;){job.salaryMin} - {job.salaryMax}{" "}
          </h4>
          <h4 className="pb-6 block">51-200 employees</h4>
          {job.quick === "quick" && <Button>Apply</Button>}
          {job.quick === "external" && <BorderBtn>External Apply</BorderBtn>}
          {job.quick === null && (
            <div className="flex gap-2">
              <Button>Apply</Button>
              <BorderBtn>External Apply</BorderBtn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Entry;

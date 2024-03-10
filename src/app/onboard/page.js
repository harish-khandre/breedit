"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";

const OnBoard = () => {
  const router = useRouter();
  const [file, setFile] = useState(undefined);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("");
  const [genderInterest, setGenderInterest] = useState("");
  const [about, setAbout] = useState("");
  const [breed, setBreed] = useState("");
  const [petName, setPetName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [matches, setMatches] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const user_id = cookies.UserId;

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFile(file);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please enter Image");
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("first_name", name);
    formData.append("pet_name", petName);
    formData.append("gender_identity", genderIdentity);
    formData.append("gender_interest", genderInterest);
    formData.append("age", age);
    formData.append("about", about);
    formData.append("breed", breed);
    formData.append("user_id", user_id);
    formData.append("matches", matches);

    if (!name) {
      toast.error("Please enter name ");
      return;
    }

    if (!user_id) {
      toast.error("Please enter name ");
      return;
    }
    if (!breed) {
      toast.error("Please enter breed ");
      return;
    }

    if (!age) {
      toast.error("Please enter age ");
      return;
    }

    if (!about) {
      toast.error("Please enter about ");
      return;
    }

    if (!genderInterest) {
      toast.error("Please select Interest ");
      return;
    }

    if (!genderIdentity) {
      toast.error("Please select identity");
      return;
    }

    if (!petName) {
      toast.error("Please enter pet name ");
      return;
    }

    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        toast.error("Error sending request");
        setUploading(false);
        return;
      }
      setUploading(false);
      toast.success("Form submitted successfully!");
      const success = response.status === 200;
      if (success) router.push("/findpet");
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="flex  justify-center items-center h-screen ">
      <div className="authBlogCard rounded-lg border-2 bg-card text-card-foreground border-[#505f2f] shadow-sm ">
        <div className="card-header flex flex-col space-y-1.5 p-6">
          <div className="card-title text-2xl font-semibold leading-none tracking-tight">
            Create Account !
          </div>
          <div className=" card-description text-sm text-muted-foreground">
            Fill in the form below to get started
          </div>
        </div>
        <div className="card-content p-6 pt-0">
          <form onSubmit={onSubmit} className="grid grid-cols-2 w-full gap-6">
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none ">
                Your Name{" "}
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                className="flex text-[#f7ebdb] mb-5 leading-normal  h-9 w-full rounded-md border-b-4 border-r-4 border  border-[#505f2f]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#505f2f] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Pet Name
              </label>
              <input
                type="text"
                required={true}
                onChange={(e) => {
                  setPetName(e.target.value);
                }}
                className="flex text-[#f7ebdb]  border border-b-4 border-r-4 mb-5 leading-normal  h-9 w-full rounded-md border-[#505f2f]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#505f2f] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                About
              </label>
              <input
                type="text"
                required={true}
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                className="flex h-9 w-full rounded-md text-[#f7ebdb]  border border-b-4 border-r-4 border-[#505f2f]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#505f2f] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Breed
              </label>
              <input
                type="text"
                required={true}
                onChange={(e) => {
                  setBreed(e.target.value);
                }}
                className="flex h-9 w-full rounded-md text-[#f7ebdb]  border border-b-4 border-r-4 border-[#505f2f]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#505f2f] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Age
              </label>
              <input
                type="number"
                required={true}
                min="1"
                max="30"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                className="flex text-[#f7ebdb]  border border-b-4 border-r-4 h-9 w-full rounded-md border-[#505f2f]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#505f2f] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Image of the person
              </label>
              <input
                type="file"
                required={true}
                accept="image/*"
                onChange={handleFileChange}
                className="flex  text-[#f7ebdb] h-9 w-full rounded-md border border-[#505f2f]  border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 ring-[#505f2f] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Pet
              </label>
              <div className="flex flex-row gap-4  ">
                <input
                  id="male-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="Male"
                  onChange={(e) => {
                    setGenderIdentity(e.target.value);
                  }}
                  checked={genderIdentity === "Male"}
                  className="border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
                />
                <label htmlFor="male-gender-identity">Male</label>
                <input
                  id="female-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="Female"
                  onChange={(e) => {
                    setGenderIdentity(e.target.value);
                  }}
                  checked={genderIdentity === "Female"}
                  className=" border-b-2 text-[#f7ebdb] bg-[#f7ebdb] focus:outline-none focus:border-[#f7ebdb] focus:ring-1 focus:ring-[#505f2f] rounded-2xl  border-t-2 border-l-4 border-[#505f2f]"
                />
                <label htmlFor="female-gender-identity">Female</label>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Interest
              </label>
              <div className="flex flex-row gap-4 ">
                <input
                  id="man-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="Male"
                  onChange={(e) => {
                    setGenderInterest(e.target.value);
                  }}
                  checked={genderInterest === "Male"}
                />
                <label htmlFor="man-gender-interest">Male</label>
                <input
                  id="woman-gender-interest"
                  type="radio"
                  name="gender_interest"
                  value="Female"
                  onChange={(e) => {
                    setGenderInterest(e.target.value);
                  }}
                  checked={genderInterest === "Female"}
                />
                <label htmlFor="woman-gender-interest">Female </label>
              </div>
            </div>
            <div className=" space-y-1.5">
              <button
                type="submit"
                disabled={!file || uploading}
                className="button"
              >
                {uploading ? "Uploading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnBoard;

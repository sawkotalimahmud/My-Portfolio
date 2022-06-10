import React, { useEffect, useState } from "react";
import Skills from "./Skills";

const MySkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("allSkills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="bg-black">
      <h2 className="text-4xl font-bold text-center my-10">My Skills</h2>
      <div className="grid grid-cols-5 sm:grid-cols-10 p-2 ">
        {skills.map((skill) => (
          <Skills key={skill.id} skill={skill}></Skills>
        ))}
      </div>
    </div>
  );
};

export default MySkills;

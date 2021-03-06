import React from "react";

const Skills = ({ skill }) => {
  const { id, picture, name } = skill;
  return (
    <div>
      <div class="card w-28 h-42 bg-black">
        <figure class=" pt-10">
          <img
            src={picture}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React, { useState } from "react";

type InputValType = string | number;

const BoxGeneric = <T extends InputValType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div>
      <form>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setter(e.target.value)}
        />
      </form>
    </div>
  );
};

export default BoxGeneric;

import "./drop-down-list.css";
import React, { useState } from 'react';
import styled from 'styled-components';



export const DropDownList = () => {
  const DropdownOption = styled.option`cursor: pointer;`;
  const [selectedOption, setSelectedOption] = useState('1');
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div dropdown>
      <select
        className="dropdown__select"
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <DropdownOption value="1" >
          Завтрак
        </DropdownOption>
        <DropdownOption value="2" >
          Обед
        </DropdownOption>
        <DropdownOption value="3" >
          Ужин
        </DropdownOption>
      </select>
    </div>
  );
};


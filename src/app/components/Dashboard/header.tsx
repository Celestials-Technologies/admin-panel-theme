import React from 'react';
import Dropdown from '../DropDown';

interface Props {}

const DashboardHeader: React.FC<Props> = ({}) => {
  return (
    <div className="flex">
      <div>Dahboard</div>
      <div>
        <Dropdown title="Last 30 days">
          <li>Last 10 days </li>
          <li>last 20 days</li>
        </Dropdown>
      </div>
      <div>
        <Dropdown title="Create Campaign">
          <li>Create </li>
          <li>Update</li>
        </Dropdown>
      </div>
    </div>
  );
};

export default DashboardHeader;

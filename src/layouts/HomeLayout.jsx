import React from "react";
import { Divider, Icon } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingList";
import ViewAllJobPostingByPostingDate from "./ViewAllJobPostingByPostingDate";

export default function HomeLayout() {
  return (
    <div>
      <Divider horizontal>
        <Icon name="bell outline" /> Recently Posted
      </Divider>
      <br />
      <br />

      <JobPostingList type="recently" itemsPerRow="3" />

      <ViewAllJobPostingByPostingDate />
    </div>
  );
}

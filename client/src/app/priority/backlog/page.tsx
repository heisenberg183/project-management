import React from "react";
import ReusablePriorityPage from "../reusable-priority";
import { Priority } from "@/state/api";

const Backlog = () => {
  return <ReusablePriorityPage priority={Priority.Backlog} />;
};

export default Backlog;
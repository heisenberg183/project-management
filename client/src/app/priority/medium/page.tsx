import React from "react";
import ReusablePriorityPage from "../reusable-priority";
import { Priority } from "@/state/api";

const Medium = () => {
  return <ReusablePriorityPage priority={Priority.Medium} />;
};

export default Medium;
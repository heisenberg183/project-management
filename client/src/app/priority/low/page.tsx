import React from "react";
import ReusablePriorityPage from "../reusable-priority";
import { Priority } from "@/state/api";

const Low = () => {
  return <ReusablePriorityPage priority={Priority.Low} />;
};

export default Low;
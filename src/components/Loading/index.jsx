import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { LoadingContainer } from "./style";

export default function Loading() {
  return (
    <LoadingContainer>
      <ImSpinner9 />
    </LoadingContainer>
  );
}

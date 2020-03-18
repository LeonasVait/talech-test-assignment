import React from "react";
import { useParams } from "react-router";

export const ProductView: React.FC = () => {
  let { id } = useParams();
  return <div>Product View Works ID:{id}</div>;
};

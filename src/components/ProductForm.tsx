import React from "react";
import { useParams } from "react-router";

export const ProductForm: React.FC = () => {
  const { id } = useParams();

  return <div>Product Form Works ID:{id}</div>;
};

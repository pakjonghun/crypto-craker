import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Title;

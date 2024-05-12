import React from 'react'
import { ReactComponent as GitHub } from "../../assets/images/svg/Github.svg";
import { ReactComponent as Twitter } from "../../assets/images/svg/Twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/images/svg/Linkedin.svg";

type Props = {
  icon: string;
};

export const SvgSelector = ({ icon }: Props) => {
  switch (icon) {
    case "github":
      return <GitHub />;
    case "twitter":
      return <Twitter />;
    case "linkedin":
      return <Linkedin />;
    default:
      return null;
  }
};

import React from 'react'
import { ReactComponent as GitHub } from "../../../assets/images/svg/socialMedia/Github.svg";
import { ReactComponent as Twitter } from "../../../assets/images/svg/socialMedia/Twitter.svg";
import { ReactComponent as Linkedin } from "../../../assets/images/svg/socialMedia/Linkedin.svg";
import { ReactComponent as Facebook } from "../../../assets/images/svg/socialMedia/Facebook.svg";

type PropsType = {
  icon: string;
};

export const SocialMediaSvgSelector = ({ icon }: PropsType) => {
  switch (icon) {
    case "github":
      return <GitHub />;
    case "twitter":
      return <Twitter />;
    case "facebook":
      return <Facebook />;
    case "linkedin":
      return <Linkedin />;
    default:
      return null;
  }
};

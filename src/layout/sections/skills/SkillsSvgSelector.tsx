import React from 'react'
import { ReactComponent as SvgHTML } from "../../../assets/images/svg/skillsPage/html.svg";
import { ReactComponent as SvgCSS } from "../../../assets/images/svg/skillsPage/css.svg";
import { ReactComponent as SvgJS } from "../../../assets/images/svg/skillsPage/js.svg";
import { ReactComponent as SvgReact } from "../../../assets/images/svg/skillsPage/react.svg";
import { ReactComponent as SvgRedux } from "../../../assets/images/svg/skillsPage/redux.svg";
import { ReactComponent as SvgBootstrap } from "../../../assets/images/svg/skillsPage/bootstrap.svg";
import { ReactComponent as SvgTailwind } from "../../../assets/images/svg/skillsPage/tailwind.svg";
import { ReactComponent as SvgSass } from "../../../assets/images/svg/skillsPage/sass.svg";
import { ReactComponent as SvgGit } from "../../../assets/images/svg/skillsPage/git.svg";
import { ReactComponent as SvgGreenshok } from "../../../assets/images/svg/skillsPage/greenshok.svg";
import { ReactComponent as SvgVSCode } from "../../../assets/images/svg/skillsPage/vscode.svg";
import { ReactComponent as SvgGitHub } from "../../../assets/images/svg/skillsPage/github.svg";

type PropsType = {
  icon: string;
};

export const SkillsSvgSelector = ({ icon }: PropsType) => {
  switch (icon) {
    case "SvgHTML":
      return <SvgHTML />;
    case "SvgCSS":
      return <SvgCSS />;
    case "SvgJS":
      return <SvgJS />;
    case "SvgReact":
      return <SvgReact />;
    case "SvgRedux":
      return <SvgRedux />;
    case "SvgBootstrap":
      return <SvgBootstrap />;
    case "SvgTailwind":
      return <SvgTailwind />;
    case "SvgSass":
      return <SvgSass />;
    case "SvgGit":
      return <SvgGit />;
    case "SvgGreenshok":
      return <SvgGreenshok />;
    case "SvgVSCode":
      return <SvgVSCode />;
    case "SvgGitHub":
      return <SvgGitHub />;
    default:
      return null;
  }
};

export interface ITeamPerson {
  name: string;
  description: string;
  img: string;
}

export interface IArrowSlide {
  className: string | undefined;
  onClick: () => void;
}

export interface ISocialItem {
  title: string;
  link: string;
}

export interface ICardItem {
  title: string;
  descr: string;
  img: string;
}

export interface IBenefitsItem {
  icon: string;
  descr: string;
}

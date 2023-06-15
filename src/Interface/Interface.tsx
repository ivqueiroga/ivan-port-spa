export interface IContact {
  from_name: string;
  subject: string;
  message: string;
}

export interface IDataState {
  load: boolean,
  data: {
    icons?: any[];
    iconsInports?: any[];
    projects?: any[];
  },
}

export interface ISkill {
  name: string;
  active: boolean;
  text: string;
}

export interface IProject {
  name: string,
  photoPath?: any,
  description: string,
  genre: string[],
  languages: string[],
  status: string,
  link: {github: string, webpage: string, youtube: string}
}

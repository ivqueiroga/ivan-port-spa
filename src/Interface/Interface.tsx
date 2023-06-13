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

export enum PartnerStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CLOSED = 'CLOSED',
}

export interface IPartners {
  id: string;
  name: string;
  status?: PartnerStatus;
}

export interface IBiller extends  IPartners {
  id: string;
  name: string;
}

export interface IBank extends IPartners {
  id: string;
  name: string;
}

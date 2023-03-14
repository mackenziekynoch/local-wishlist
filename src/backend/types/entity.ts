export enum Kind {
  VISIT,
  CONSUME,
};

export enum Status {
  TODO,
  DOING,
  DONE,
};

export interface Entity {
  name: string,
  kind: Kind,
  status: Status,
  rating?: number,
  tags?: string[],
};

export interface VisitEntity extends Entity {
  extra: {
    location?: {
      address1: string,
      address2?: string,
      address3?: string,
      city: string,
      state: string,
      zipCode: string,
      country: string,
    },
    website?: string,
  }
};

export interface ConsumeEntity extends Entity {
  extra: {
    website?: string,
  }
};
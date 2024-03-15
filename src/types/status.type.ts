export enum StatusEnum {
  'ALIVE' = 'alive',
  'DEAD' = 'dead',
  'UNKNOWN' = 'unknown',
}

export type StatusArray = (keyof typeof StatusEnum)[];

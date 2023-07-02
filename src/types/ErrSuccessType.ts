import { ResultKindEnum } from '../constants/ResultKindEnum';

export interface ErrSuccessType<T> {
  kind: ResultKindEnum.SUCCESS;
  value: T;
}
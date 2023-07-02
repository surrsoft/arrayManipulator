import { ErrorAmEnum } from '../constants/ErrorAmEnum';
import { ResultKindEnum } from '../constants/ResultKindEnum';

export interface ErrErrorType {
  kind: ResultKindEnum.ERROR;

  errCode: ErrorAmEnum;
}
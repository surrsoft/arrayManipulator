import { ErrErrorType } from './ErrErrorType';
import { ErrSuccessType } from './ErrSuccessType';

export type ResultAmType<T> = ErrSuccessType<T> | ErrErrorType;
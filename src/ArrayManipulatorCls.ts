import { ResultAmType } from './types/ResultAmType';
import { ErrorAmEnum } from './constants/ErrorAmEnum';
import { isValidIndex } from './utils/isValidIndex';
import { ResultKindEnum } from './constants/ResultKindEnum';

export class ArrayManipulatorCls {

  /**
   * Получить элемент массива по индексу.
   *
   * Возвращает {@link ErrErrorType} если:
   * 1) массив нулевой длины
   * 2) индекс не входит в диапазон индексов массива
   * В случае успеха возвращает {@link ErrSuccessType} с элементом массива.
   *
   * @param arr массив из которого нужно получить элемент
   * @param index индекс элемента
   */
  static elemGetByIndex<T>(arr: T[], index: number): ResultAmType<T> {
    if (arr.length === 0) {
      return { kind: ResultKindEnum.ERROR, errCode: ErrorAmEnum.EMPTY_ARRAY };
    }
    if (!isValidIndex(arr, index)) {
      return { kind: ResultKindEnum.ERROR, errCode: ErrorAmEnum.INVALID_INDEX };
    }
    return {
      kind: ResultKindEnum.SUCCESS, value: arr[index],
    };
  }

  static elemsGetByIndexes<T>(arr: T[], indexes: number[]): ResultAmType<T>[] {
    return indexes.map((index) => {
      return ArrayManipulatorCls.elemGetByIndex<T>(arr, index);
    });
  }
}

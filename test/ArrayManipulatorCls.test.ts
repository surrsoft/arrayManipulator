import { ArrayManipulatorCls } from '../src/ArrayManipulatorCls';
import { ResultKindEnum } from '../src/constants/ResultKindEnum';
import { ErrorAmEnum } from '../src/constants/ErrorAmEnum';

describe('ArrayManipulatorCls', () => {

  describe('elemGetByIndex', () => {
    it('010 success', () => {
      const arr = [1, 2, 3];
      const result = ArrayManipulatorCls.elemGetByIndex(arr, 1);
      expect(result).toEqual({ kind: ResultKindEnum.SUCCESS, value: 2 });
    });
    it('020 err', () => {
      const arr = [1, 2, 3];
      const result = ArrayManipulatorCls.elemGetByIndex(arr, 10);
      expect(result).toEqual({ kind: ResultKindEnum.ERROR, errCode: ErrorAmEnum.INVALID_INDEX });
    });
    it('030 err', () => {
      const arr = [1, 2, 3];
      const result = ArrayManipulatorCls.elemGetByIndex(arr, -1);
      expect(result).toEqual({ kind: ResultKindEnum.ERROR, errCode: ErrorAmEnum.INVALID_INDEX });
    });
    it('040 err', () => {
      const arr: unknown[] = [];
      const result = ArrayManipulatorCls.elemGetByIndex(arr, 1);
      expect(result).toEqual({ kind: ResultKindEnum.ERROR, errCode: ErrorAmEnum.EMPTY_ARRAY });
    });
  });

  describe('elemsGetByIndexes', () => {
    it('010 success', () => {
      const arr = [1, 2, 3];
      const result = ArrayManipulatorCls.elemsGetByIndexes(arr, [1, 2]);
      expect(result).toEqual(
        [
          { kind: ResultKindEnum.SUCCESS, value: 2 },
          { kind: ResultKindEnum.SUCCESS, value: 3 },
        ],
      );
    });
    it('020 err', () => {
      const arr = [1, 2, 3];
      const result = ArrayManipulatorCls.elemsGetByIndexes(arr, [-1, 10]);
      expect(result).toEqual(
        [
          { kind: ResultKindEnum.ERROR, errCode: ErrorAmEnum.INVALID_INDEX },
          { kind: ResultKindEnum.ERROR, errCode: ErrorAmEnum.INVALID_INDEX },
        ],
      );
    });
    it('030 err', () => {
      const arr: unknown[] = [];
      const result = ArrayManipulatorCls.elemsGetByIndexes(arr, [1, 2]);
      expect(result).toEqual(
        [
          { kind: ResultKindEnum.ERROR, errCode: ErrorAmEnum.EMPTY_ARRAY },
          { kind: ResultKindEnum.ERROR, errCode: ErrorAmEnum.EMPTY_ARRAY },
        ],
      );
    });
  });

});
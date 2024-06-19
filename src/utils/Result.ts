interface ResultFailure {
  code: string;
  payload?: any;
}
export type DefaultResultFailure = {
  code: 'UNKNOWN';
};

type ResultType<Success, Failure extends ResultFailure> =
  | { type: 'SUCCESS'; payload: Success }
  | { type: 'FAILURE'; data: Failure };

export class Result<Success, Failure extends ResultFailure> {
  private constructor(public result: ResultType<Success, Failure>) {}

  static Success<Success, Failure extends ResultFailure>(
    payload: Success,
  ): Result<Success, Failure> {
    return new Result<Success, Failure>({ type: 'SUCCESS', payload });
  }

  static Failure<Success, Failure extends ResultFailure>(
    data: Failure,
  ): Result<Success, Failure> {
    return new Result<Success, Failure>({ type: 'FAILURE', data });
  }
}

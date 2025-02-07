import { Error } from '../entities/error.entity';
import { ErrorResponse } from '../error.typings';

export interface ErrorService {
  handle: (error: Error) => Promise<ErrorResponse>;
}

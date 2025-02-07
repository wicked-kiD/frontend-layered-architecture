import { ServiceIdentifier } from 'containers/config';
import {
  HttpClientDeleteMethod,
  HttpClientGetMethod,
  HttpClientHeadMethod,
  HttpClientOptionsMethod,
  HttpClientPatchMethod,
  HttpClientPostMethod,
  HttpClientPutMethod,
  HttpInterceptorManager,
} from './http-method.typings';
import { HttpRequestConfig, AbortPromise } from './http.typings';

export const HttpClientType: ServiceIdentifier<HttpClient> = Symbol('HttpClient');
export const HttpClientAdapterType: ServiceIdentifier<HttpClientAdapter<HttpRequestConfig>> =
  Symbol('HttpClientAdapter');

export interface HttpClient<THttpConfig extends HttpRequestConfig = HttpRequestConfig> {
  getConfig: () => THttpConfig;

  post: HttpClientPostMethod<THttpConfig>;
  get: HttpClientGetMethod<THttpConfig>;
  put: HttpClientPutMethod<THttpConfig>;
  delete: HttpClientDeleteMethod<THttpConfig>;
  head: HttpClientHeadMethod<THttpConfig>;
  options: HttpClientOptionsMethod<THttpConfig>;
  patch: HttpClientPatchMethod<THttpConfig>;

  setRequestInterceptors: HttpInterceptorManager;
  setResponseInterceptors: HttpInterceptorManager;
}

export interface HttpClientAdapter<C extends HttpRequestConfig> {
  execute: <T = unknown>(config: C) => AbortPromise<T>;
}

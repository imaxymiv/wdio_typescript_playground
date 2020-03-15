import {expect} from './utilities/ChaiHttp';

export class ResponseWrapper<T> {
  response: any;
  responseModel: T;

  constructor(response: any, responseModel: T) {
    this.response = response;
    this.responseModel = responseModel;
  }

  readEntity(): T {
    return this.response.body as T;
  }

  readEntities(): T[] {
    return this.response.body.data as T[];
  }

  expectStatusCode(code: number) {
    expect(this.response).to.have.status(code);
    return this;
  }
}

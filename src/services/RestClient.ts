import {ResponseWrapper} from './ResponseWrapper';
import {chaiHttp} from './utilities/ChaiHttp';

export class RestClient {

  baseUrl = 'https://reqres.in/api/users';

  /*get() {
    return chaiHttp.request(this.baseUrl)
      .get('').then((res: any) => {
        /!* console.debug(res.body);
         expect(res).to.have.status(200);
         expect(res.body.all[0]).to.have.property('type');
         expect(res.body.all[0].type).to.be.equal('cat');*!/

      });
  }*/

  get<T>(path: any, responseModel: T) {
    return chaiHttp.request(this.baseUrl)
      .get(`/${path}`)
      .set('Content-Type', 'application/json')
      .then((resp) => {
        return new ResponseWrapper<T>(resp, responseModel);
      });
  }

  getQueryParams<T>(path: string, queryParams: any, responseModel: T) {
    return chaiHttp.request(this.baseUrl)
      .get(path)
      .query(queryParams)
      .then((resp) => {
        return new ResponseWrapper<T>(resp, responseModel);
      });
  }

  post(requestModel: any) {
    return chaiHttp.request(this.baseUrl)
      .post('')
      .send(requestModel);
  }

  delete(path: any) {
    return chaiHttp.request(this.baseUrl)
      .delete(`/${path}`);
  }

}

import {UserRequest} from './request/UserRequest';
import {CreateUserResponse} from './response/createuser/createUser';
import {Data} from './response/user/Data';
import {UsersByPage} from './response/usersbypage/UsersByPage';
import {ResponseWrapper} from './ResponseWrapper';
import {RestClient} from './RestClient';
import {expect} from './utilities/ChaiHttp';

export class UserClient extends RestClient {

  /*getUserById(userId: number) {
    return this.get(userId).then((userResponse) => {
      expect(userResponse).to.have.status(200);
      return userResponse.body as Data;
    }).catch((err) => {
      throw err;
    });
  }*/

  getUserById(userId: number): ResponseWrapper<Data> {
    return this.get(userId, Data)
      .then((resp) => {
      return resp;
    });
  }

  getUsersByPage(pageNumber: number): ResponseWrapper<UsersByPage> {
    return this.getQueryParams('', {page: pageNumber}, UsersByPage)
      .then((userResponse) => {
        return userResponse;
      });
  }

  createUser(userRequest: UserRequest) {
    return this.post(userRequest)
      .then((userResponse) => {
        expect(userResponse).to.have.status(201);
        return userResponse.body as CreateUserResponse;
      });
  }

  deleteUser(userId: any) {
    return this.delete(userId)
      .then((userResponse) => {
        expect(userResponse).to.have.status(204);
      });
  }

}

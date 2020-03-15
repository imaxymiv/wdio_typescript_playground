import {UserRequest} from '../../src/services/request/UserRequest';
import {UserClient} from '../../src/services/UserClient';
import {expect} from '../../src/services/utilities/ChaiHttp';

describe('API', () => {

  /*it('test get', async () => {
    const restClient = new RestClient();
    await restClient.get();
  });*/

  it('get user', async () => {
    const userClient = new UserClient();
    const userResponse = await userClient.getUserById(2);
    const userResponseModel = await userResponse.expectStatusCode(200).readEntity();
    // const res = await userResponse.expectStatusCode(200).readEntity();
    console.log(userResponseModel.data.email);
    // expect(userResponse.data.email).to.be.equal('janet.weaver@reqres.in');
  });

  it('get users by page', async () => {
    const userClient = new UserClient();
    const usersResponse = await userClient.getUsersByPage(2);
    const userResponseModel = await usersResponse.expectStatusCode(200).readEntities();

    userResponseModel.forEach((user) => {
      console.log(user);
      expect(user).to.have.property('email');
    });
  });

  it('create user and delete user', async () => {
    const userClient = new UserClient();
    const userRequest = new UserRequest('a', 'b');
    const userResponse = await userClient.createUser(userRequest);
    console.log(userResponse)
    expect(userResponse).to.have.property('id');
    expect(userResponse.name).to.be.equal(userRequest.name);
    await userClient.deleteUser(userResponse.id);
  });
});

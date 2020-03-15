import {expect} from 'chai';
import LoginPage from '../../src/pages/LogInPage';
import {credentials} from '../../src/user_config';

describe('Login page', () => {

  it('displays message with invalid credentials', () => {
    LoginPage.open;
    LoginPage.loginWithCredentials('foo', 'bar');

    expect(LoginPage.flash).to.include('Your username is invalid!');
  });

  it('should allow access with correct credentials', () => {
    LoginPage.open;
    LoginPage.loginWithCredentials('tomsmith', 'SuperSecretPassword!');

    expect(LoginPage.flash).to.include('You logged into a secure area!');
  });

  it('using config values specified in src/config', () => {
    LoginPage.open;
    LoginPage.loginWithCredentials(credentials.username, credentials.password);

    expect(LoginPage.flash).to.include('You logged into a secure area!');
  });
});

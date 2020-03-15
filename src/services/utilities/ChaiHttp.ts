const assert = require('chai');
const chaihttp = require('chai-http');

export const chaiHttp = assert.use(chaihttp);
export const expect = chaiHttp.expect;

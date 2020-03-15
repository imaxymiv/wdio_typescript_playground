import {User} from '../user/User';

export class UsersByPage {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: User[];

  constructor(page: number, perPage: number, total: number, totalPages: number, data: User[]) {
    this.page = page;
    this.perPage = perPage;
    this.total = total;
    this.totalPages = totalPages;
    this.data = data;
  }
}

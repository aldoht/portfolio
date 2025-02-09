import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }

  async getRepositories() {
    const response = await fetch('https://api.github.com/users/aldoht/repos');

    if (response.status == 200) {
      return response.json();
    }

    return []
  }
}

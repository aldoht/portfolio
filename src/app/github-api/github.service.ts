import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }

  async getRepositories() {
    const response = await fetch('https://api.github.com/users/aldoht/repos');

    if (response.status == 200) {
      const repos = await response.json();
      return repos
        .sort(
        (a: { pushed_at: string | number | Date; }, b: { pushed_at: string | number | Date; }) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
        .slice(0, 10);
    }

    return []
  }
}

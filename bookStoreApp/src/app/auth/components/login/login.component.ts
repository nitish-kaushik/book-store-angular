import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      this.name = queryParam.name;
      console.log(queryParam);
    });
  }

  goToSignup(): void {
    this.router.navigate(['/auth/signup']);
  }

  goToBookDetails(id: number, authorId: number): void {
    this.router.navigate(['/public/book-details', id, 'author', authorId], {
      queryParams: { name: 'nitish', email: 'sample' },
    });
  }
}

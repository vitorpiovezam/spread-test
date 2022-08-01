import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="wrapper">
    <nav>
      <a routerLink="/">
  			<img src="https://spread.com.br/wp-content/uploads/2020/05/logo.svg" width="100px">
      </a>

			<div class="info">
				Pokedex Test
			</div>
    </nav>
  </div>
  `,
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  title = 'spread-test';
}

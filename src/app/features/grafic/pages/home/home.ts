import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  ngOnInit(): void {
    this.setPage();
  }

  private setPage(): void {
    const buttons: NodeListOf<HTMLElement> =
      document.querySelectorAll('.accordion-btn');

    buttons.forEach((button: HTMLElement) => {
      button.addEventListener('click', (): void => {
        button.classList.toggle('active');

        const content = button.nextElementSibling as HTMLElement | null;

        if (!content) {
          return;
        }

        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  }
}

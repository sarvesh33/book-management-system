import { Component, OnInit } from '@angular/core';
import { book } from 'src/models/book.model';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  ngOnInit(): void {
    let savedBooks = localStorage.getItem('book');
    this.book = savedBooks ? JSON.parse(savedBooks) : [];
  }
  newtitle: string = '';
  newauthor: string = '';
  book: book[] = [];

  addBook() {
    if (this.newtitle.trim().length && this.newauthor) {
      let newBook: book = {
        id: Date.now(),
        title: this.newtitle,
        author: this.newauthor,
      };
      this.book.push(newBook);
      this.newtitle = '';
      this.newauthor = '';
      localStorage.setItem('book', JSON.stringify(this.book));
    }
  }
  deleteBook(index: number) {
    this.book.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(this.book));
  }
}

import { Component, OnInit } from '@angular/core';
import { bookService } from './bookService.service';
import { Book } from './product-item/model/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros: Array<Book> = []
  
  constructor(private bookService: bookService) {}

  ngOnInit(): void {
    this.getBook()
  }

  getBook() {
      this.bookService.getBook().subscribe(data => {
        this.livros = data.books
      console.log(this.livros)
      console.log(this.livros[0])
    })
  }

}

import { v4 as uuidv4 } from 'uuid';

class Book {
  constructor(id, title, author, category = 'Action', completed = '0%', currentChapter = 'Introduction') {
    this.id = id || uuidv4();
    this.title = title;
    this.author = author;
    this.category = category;
    this.completed = completed;
    this.current_chapter = currentChapter;
  }
}

export default Book;

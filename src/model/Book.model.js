class Book {
  constructor(title, author, category = 'Action', completed = '0%', currentChapter = 'Introduction') {
    this.id = '';
    this.title = title;
    this.author = author;
    this.category = category;
    this.completed = completed;
    this.current_chapter = currentChapter;
  }
}

export default Book;
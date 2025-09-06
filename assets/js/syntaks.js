

class Post {
  constructor(id, title, author, text, date, likes = 0, image = null) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.text = text;
    this.date = date || new Date().toISOString();
    this._likes = likes;
    this.image = image;
    this.tags = [];

    

    console.log(`"${this.title}" ${this.author}`);
  }


  changeText(newText) {
    this.text = newText;
    console.log(`(id=${this.id}) "${this.text}"`);
  }

  like() {
    this.likes++;
    console.log(`${this.likes}`);
  }

  dislike() {
    if (this.likes > 0) {
      this.likes--;
      console.log(`${this.likes}`);
    } else {
      console.log(`(id=${this.id})`);
    }
  }
};
  
  
const post1 = new Post(1, "Мій перший пост", new Date(), 5);

post1.like();
post1.changeText("Оновлений текст поста 1");

const post2 = new Post(2, "Навчання JS", new Date(), 10);


post2.dislike();


const posts = [post1, post2];
console.log( posts);


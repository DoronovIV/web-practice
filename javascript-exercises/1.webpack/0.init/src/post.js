// social media post;
class Post {
    constructor(title, contents) {
        this.title = title;
        this.contents = contents;
        this.date = new Date();
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date,
            contents: this.contents
        });
    }
}

class Story {
   constructor(title, creator) {
      this.title = title;
      this.creator = creator;
      this._comments = [];
      /*
         {
         Id: string,
         Username: string,
         Content: string,
            Replies: [
               Id: replyId,
               Username: username,
               Content: content,
            ]
         }
      */
      this._likes = []; // names of persons who liked
   }

   get likes() {
      let username = this._likes[0];

      if (this._likes.length == 0) {
         return `${this.title} has 0 likes`
      } else if (this._likes.length == 1) {
         return `${username} likes this story!`
      } else {
         return `${username} and ${this._likes.length - 1} others like this story!`
      }
   }

   like(username) {

      if (this._likes.includes(username)) {
         throw new Error('You can\'t like the same story twice!')
      }
      if (this.creator == username) {
         throw new Error('You can\'t like your own story!')
      }
      return `${username} liked ${this.title}!`
   }

   dislike(username) {

      if (!this._likes.includes(username)) {
         throw new Error('You can\'t dislike this story!')
      }

      return `${username} disliked ${this.title}!`
   }

   comment(username, content, id) {

      if (id == undefined || !this._comments.some(c => c.Id == id)) {
         let newComment = {
            Id: this._comments.length + 1,
            Username: username,
            Content: content,
            Replies: []
         };

         this._comments.push(newComment)
         return `${username} commented on ${this.title}`
      }

      let commentToReplyTo = this._comments.find(c => c.Id === id);
      let replyNextId = commentToReplyTo.Replies.length + 1
      let replyId = Number(`${commentToReplyTo.Id}.${replyNextId}`)
      let reply = {
         Id: replyId,
         Username: username,
         Content: content,
      }
      commentToReplyTo.Replies.push(reply);
      return 'You replied successfully'

   }

   toString(sortingType) {

      if (sortingType == 'asc') {
         this._comments.sort((a, b) => a.Id - b.Id)
         this._comments.Replies.sort((a, b) => a.Id - b.Id)
      } else if (sortingType == 'desc') {
         this._comments.sort((a, b) => b.Id - a.Id)
         this._comments.Replies.sort((a, b) => b.Id - a.Id)
      } else {
         this._comments.sort((a, b) => a.Username.localeCompare(b.Username))
         this._comments.Replies.sort((a, b) => a.Username.localeCompare(b.Username))
      }

      let commentsStringArr = [];

      for (const comment of comments) {
         let commentString = `--${comment.Id}. ${comment.Username}: ${comment.Content}`
         let repiesString = comments.Replies
            .map(r => `--- ${r.Id}. ${r.Username}: ${r.Content}`)
            .join('\n');
         let combinedString = `${commentString}\n${repiesString}`
         commentsStringArr.push(combinedString)
      }

      let fullCommentString = commentsStringArr.join('\n');

      return `Title: ${this.title}
      Creator: ${this.creator}
      Likes: ${this._likes.length}
      Comments: ${fullCommentString}`
   }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));


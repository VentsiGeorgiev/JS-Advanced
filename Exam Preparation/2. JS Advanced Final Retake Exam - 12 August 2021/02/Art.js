// class ArtGallery {
//    constructor(creator) {
//       this.creator = creator;
//       this.posibleArticles = { "picture": 200, "photo": 50, "item": 250 }
//       this.listOfArticles = [];
//       /**
//          {articleModel, articleName, quantity}
//        */
//       this.guests = []
//       /**
//        * {guestName, points, purchaseArticle: 0}
//        */
//    }

//    addArticle(article, articleName, quantity) {
//       let articleModel = article.toLowerCase()
//       if (!Object.keys(this.posibleArticles).includes(articleModel)) {
//          throw new Error('This article model is not included in this gallery!')
//       }

//       if (!this.listOfArticles.some(a => a.articleName == articleName)) {
//          this.listOfArticles.push({
//             articleModel,
//             articleName,
//             quantity: 0,
//          })
//       }

//       this.listOfArticles[quantity] += quantity;
//       return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

//    }

//    inviteGuest(guestName, personality) {
//       let currentGuest = this.guests.find(g => g.guestName == guestName);

//       if (currentGuest) {
//          throw new Error(`${guestName} has already been invited.`)
//       }
//       let guestPoints = 0;

//       if (personality == 'Vip') {
//          guestPoints = 500
//       } else if (personality == 'Middle') {
//          guestPoints = 250
//       } else {
//          guestPoints = 50
//       }

//       this.guests.push({
//          guestName,
//          points: guestPoints,
//          purchaseArticle: 0
//       })

//       return `You have successfully invited ${guestName}!`
//    }

//    buyArticle(articleModel, articleName, guestName) {

//       let currentArticle = this.listOfArticles.find(x => x.articleName == articleName);

//       if (!currentArticle || this.listOfArticles.articleModel !== articleModel) {
//          throw new Error('This article is not found.')
//       }

//       if (currentArticle.quantity == 0) {
//          return `The ${articleName} is not available.`
//       }

//       let currentG = this.guests.find(x => x.guestName == guestName)

//       if (!currentG) {
//          return 'This guest is not invited.'
//       }

//       if (currentG.points >= this.posibleArticles[articleModel]) {
//          currentG.points -= this.posibleArticles[articleModel];
//          this.guests.purchaseArticle++;
//       } else {
//          return 'You need to more points to purchase the article.'
//       }

//       return `${guestName} successfully purchased the article worth ${this.posibleArticles[articleModel]} points.`

//    }

//    showGalleryInfo(criteria) {
//       let resultArticle = [];
//       let resultGuest = [];

//       if (criteria == 'article') {
//          resultArticle.push('Articles information:');
//          resultArticle.push(this.listOfArticles.forEach(x => resultArticle.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`)))

//          return resultArticle.join('\n');
//       }

//       if (criteria == 'guest') {
//          resultGuest.push('Guests information:')
//          resultGuest.push(this.guests.forEach(x => resultGuest.push(`${x.guestName} - ${x.purchaseArticle}`)))
//       }
//    }


// }

// const ArtGallery = result;
// let art = new ArtGallery("Curtis Mayfield");

// art.addArticle('picture', 'Mona Liza', 3);
// art.addArticle('Item', 'Ancient vase', 2);
// art.addArticle('picture', 'Mona Liza', 1);

// art.inviteGuest('John', 'Vip');
// art.inviteGuest('Peter', 'Middle');



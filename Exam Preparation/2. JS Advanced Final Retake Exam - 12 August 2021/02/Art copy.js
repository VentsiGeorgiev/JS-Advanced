class ArtGallery {
   constructor(creator) {
      this.creator = creator;
      this.posibleArticles = { "picture": 200, "photo": 50, "item": 250 }
      this.listOfArticles = [];
      /**
         {articleModel, articleName, quantity}
       */
      this.guests = []
      /**
       * {guestName, points, purchaseArticle: 0}
       */
   }

   addArticle(article, articleName, currQuantity) {
      let articleModel = article.toLowerCase()

      if (!Object.keys(this.posibleArticles).includes(articleModel)) {
         throw new Error('This article model is not included in this gallery!')
      }
      let currentArticle = this.listOfArticles.find(a => a.articleName == articleName)

      if (currentArticle) {
         currentArticle.quantity += currQuantity
      } else {
         this.listOfArticles.push({
            articleModel,
            articleName,
            quantity: currQuantity
         })
      }
      return `Successfully added article ${articleName} with a new quantity- ${currQuantity}.`
   }

   inviteGuest(guestName, personality) {
      let currentGuest = this.guests.find(g => g.guestName == guestName);

      if (currentGuest) {
         throw new Error(`${guestName} has already been invited.`)
      }
      let guestPoints = 0;

      if (personality == 'Vip') {
         guestPoints = 500
      } else if (personality == 'Middle') {
         guestPoints = 250
      } else {
         guestPoints = 50
      }

      this.guests.push({
         guestName,
         points: guestPoints,
         purchaseArticle: 0
      })

      return `You have successfully invited ${guestName}!`
   }

   buyArticle(articleModel, articleName, guestName) {

      let currArticle = this.listOfArticles.find(x => x.articleName == articleName);

      if (!currArticle || currArticle.articleModel !== articleModel) {
         throw new Error('This article is not found.')
      }

      if (currArticle.quantity == 0) {
         return `The ${articleName} is not available.`
      }

      let currentG = this.guests.find(x => x.guestName == guestName)

      if (!currentG) {
         return 'This guest is not invited.'
      }
      let articlePoints = this.posibleArticles[articleModel]

      if (currentG.points >= articlePoints) {
         currentG.points -= articlePoints;
         currentG.purchaseArticle++;
         currArticle.quantity--;
      } else {
         return 'You need to more points to purchase the article.'
      }

      return `${guestName} successfully purchased the article worth ${this.posibleArticles[articleModel]} points.`

   }

   showGalleryInfo(criteria) {
      let resultArticle = [];
      let resultGuest = [];

      if (criteria == 'article') {
         resultArticle.push('Articles information:');
         this.listOfArticles.forEach(x => resultArticle.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));

         return resultArticle.join('\n');
      }

      if (criteria == 'guest') {
         resultGuest.push('Guests information:')
         this.guests.forEach(x => resultGuest.push(`${x.guestName} - ${x.purchaseArticle}`))

         return resultGuest.join('\n');

      }
   }

}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));








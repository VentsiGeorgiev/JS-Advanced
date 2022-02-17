class SummerCamp {
   constructor(organizer, location) {
      this.organizer = organizer;
      this.location = location;
      this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
      this.listOfParticipants = [];
   };
   registerParticipant(name, condition, money) {
      if (!Object.keys(this.priceForTheCamp).includes(condition)) {
         throw new Error(`Unsuccessful registration at the camp.`)
      };

      if (this.listOfParticipants.find(p => p.name === name)) {
         return `The ${name} is already registered at the camp.`
      };

      if (money < this.priceForTheCamp[condition]) {
         return `The money is not enough to pay the stay at the camp.`
      };

      if (!this.listOfParticipants.find(p => p.name === name)) {
         let person = {
            name: name,
            condition: condition,
            power: 100,
            wins: 0
         };
         this.listOfParticipants.push(person);
         return `The ${name} was successfully registered.`
      }
   };

   unregisterParticipant(name) {
      let findPerson = this.listOfParticipants.find(p => p.name === name)
      if (!findPerson) {
         throw new Error(`The ${name} is not registered in the camp.`)
      }
      this.listOfParticipants = this.listOfParticipants.filter(p => p.name !== name);
      return `The ${name} removed successfully.`
   };

   timeToPlay(typeOfGame, participant1, participant2) {
      if (typeOfGame === 'WaterBalloonFights') {

         let person1 = this.listOfParticipants.find(p => p.name === participant1);
         let person2 = this.listOfParticipants.find(p => p.name === participant2);

         if (!person1 || !person2) {
            throw new Error(`Invalid entered name/s.`);
         }
         if (person1.condition !== person2.condition) {
            throw new Error(`Choose players with equal condition.`);
         }
         let result = '';
         if (person1.power > person2.power) {
            person1.wins++;
            result = `The ${person1.name} is winner in the game ${typeOfGame}.`

         } else if (person1.power < person2.power) {
            person2.wins++;
            result = `The ${person2.name} is winner in the game ${typeOfGame}.`

         } else {
            result = `There is no winner.`
         }
         return result;
      };

      if (typeOfGame === 'Battleship') {
         let person = this.listOfParticipants.find(p => p.name === participant1);

         if (!person) {
            throw Error(`Invalid entered name.`)
         };

         person.power += 20;
         return `The ${person.name} successfully completed the game ${typeOfGame}.`
      };
   };

   toString() {
      let result = [];
      let numberOfParticipants = this.listOfParticipants.length;

      let firstLine = `${this.organizer} will take ${numberOfParticipants} participants on camping to ${this.location}`;
      result.push(firstLine);

      let sortedList = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

      if (sortedList.length > 0) {
         sortedList.forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
      }
      return `${result.join('\n')}`
   };

};



const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));
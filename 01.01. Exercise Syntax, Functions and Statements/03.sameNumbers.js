function solve(input) {

 let str = input.toString()
 let isEquals = true;
 // let sum = 0;

 // for (let i = 0; i < str.length; i++) {
 //  sum += Number(str[i]);
 //  for (let j = i + 1; j < str.length; j++) {
 //   if (str[i] !== str[j]) {
 //    isEquals = false;
 //    break;
 //   }
 //  }
 // }
 // for (let i = 0; i < str.length; i++) {
 //  if (i < str.length - 1) {
 //   if (str[i] !== str[i + 1]) {
 //    isEquals = false;
 //   }
 //  }
 //  sum += Number(str[i]);
 // }

 // понеже започваме от 1 пропускаме 1вия елемент, затова:
 let sum = Number(str[0]);
 for (let i = 1; i < str.length; i++) {

  if (str[i] !== str[i - 1]) {
   isEquals = false;
  }

  sum += Number(str[i]);
 }
 // if (isEquals) {
 //  console.log('true');
 //  console.log(sum);
 // } else {
 //  console.log('false');
 //  console.log(sum);
 // }


 console.log(isEquals);
 console.log(sum);
}
solve(1234)
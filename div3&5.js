const elems=[32,55,42,75,70,41,100,30,33,15,45];

//divisible by 5 and 3 both then show
const result=elems.filter((item)=>item%5===0 && item%3===0);
 console.log(result);

 //divisible by 5 as well as 3 also then show
//  const result=elems.filter((item)=>item%5===0 || item%3===0);
//  console.log(result);
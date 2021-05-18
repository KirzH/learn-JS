// const foo = [1, 2]
// const bar = foo

// bar[0] = 15

// console.log(foo[0])

// const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
// const arr = Array.from(arrLike);
// console.log(arr)


// function getFullName({ firstName, lastName }) {
//     return `${firstName} ${lastName}`;

// const arr = [1, 2, 3, 4];
// const [first, second] = arr;

// (function () {
//     console.log('Welcome to the Internet. Please follow me.');
//   }());

//   let test;
// if (currentUser) {
//   test = () => {
//     console.log('Yup.');
//   };
// }
// $(".langswitcher a").on("click",function(e){
//     e.preventDefault();
//     $(".langswitcher li").removeClass("active");
//     $("html").attr("lang",$(this).data("lang"));
//     $(this).parent().addClass("active");
//   });

function deleteHr() {
    let elems = document.querySelectorAll('hr');

    for(let i = 0; i < elems.length; i++) {
  let elem = elems[i];
  
  if(elem.nextElementSibling.tagName === 'HR') {
     elem.add();
     i++;
  }
}
}
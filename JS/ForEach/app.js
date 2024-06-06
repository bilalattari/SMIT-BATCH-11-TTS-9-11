var arrOfObjects = [
  {
    type: "Cow",
    img: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y293fGVufDB8fDB8fHww",
  },
  {
    type: "Australian",
    img: "https://images.unsplash.com/photo-1564085352725-08da0272627d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y293fGVufDB8fDB8fHww",
  },
  {
    type: "Bull",
    img: "https://images.unsplash.com/photo-1593046584078-ddc9dc530ca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVsbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    type: "Yacht",
    img: "https://images.unsplash.com/photo-1551606712-b0341396cc87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVsbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    type: "Goat",
    img: "https://images.unsplash.com/photo-1588466585717-f8041aec7875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29hdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    type: "White Goat",
    img: "https://plus.unsplash.com/premium_photo-1664304353021-b31d9cbe0e87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hdHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

// for (var i = 0; i < arrOfObjects.length; i++) {
//   console.log(i, arrOfObjects[i]);
// }

// arrOfObjects[1].type = 'Australian Cow'

arrOfObjects.splice(1, 1);
console.log(arrOfObjects);

arrOfObjects.forEach(function (item, i) {
  console.log(i, item.type);
  var ele = `<button id=${i}></button>`
});

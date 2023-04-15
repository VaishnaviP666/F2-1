/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let ans=arr.map(obj=>{
    if(obj.profession==="developer"){
      console.log(obj);
    }
    return null;
  });

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(obj=>{
    if(obj.profession==="developer"){
      console.log(obj);
    }
  });
  
}

function addData() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "susan", age: "20", profession: "intern" },
  ]
a.push.apply(arr, arr1);

console.log(arr1);
}

function removeAdmin() {
  let ans=arr.filter(obj=>{
    if(obj.profession!="admin"){
      return obj;
    }
  })
  console.log(ans);
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
 
  let arr2 = [
    { id: 4, name: "vais", age: "20", profession: "engineer" },
    { id: 5, name: "raj", age: "22", profession: "developer" },
    { id: 6, name: "mou", age: "21", profession: "ca" },
  ];

let newArray = arr.concat(arr2);

console.log(newArray); // returns ['1', '2', '3', '4', '5', '6']

}
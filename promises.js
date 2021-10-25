function getMeAPromise(){
     fetch('dataa.json')
    .then(res => res.json())
    .then(data => console.log(data))
}

console.log(getMeAPromise());

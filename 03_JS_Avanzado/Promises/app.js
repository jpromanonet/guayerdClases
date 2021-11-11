function myDisplayer(some) {
    document.getElementById("promesa").innerHTML = some;
}

// Codigo para cambiar de X a 5

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 4

    if (x == 4){
        myResolve("OK la promesa se cumple");
    } else {
        myReject("Error, no se cumple la promesa");
    }
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
)
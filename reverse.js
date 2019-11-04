function reverseString(s) {

    function reverse(s){
        var answer = s.split("").reverse().join("");
        console.log(answer);
    }

    try {
        reverse(s);
    }
    catch(err) {
        console.log(err.message);
        console.log(s);
    }
}

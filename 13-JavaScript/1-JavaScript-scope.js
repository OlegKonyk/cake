var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt(); 

/*
result: will print undefined 
reason: logIt creates new scope => var text is hoisted => when logging text is undefined
*/


/*
If we execute this Javascript, what will the browser's console show?
*/
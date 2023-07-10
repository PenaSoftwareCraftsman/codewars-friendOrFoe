const friend = (input) => {
    let result = [];

    for(str of input) {
        if(str.length == 4){
            result.push(str);
        }
    }

    return result;
}

module.exports = {
    friend
}
function curry(fun) {
    countArguments = fun.length;
    var concatArguments = [];
    function checkArgument() {
        concatArguments = concatArguments.concat(...arguments);
        if(concatArguments.length >= countArguments) {
            return fun(...concatArguments);
        } else {
            var savedArguments = [...arguments];
            return function() {
                concatArguments = savedArguments.concat(...arguments);
                if(concatArguments.length >= countArguments) {
                    return fun(...concatArguments);
                } else {
                    return checkArgument;
                }
            };
        }
    }
    return checkArgument;
}




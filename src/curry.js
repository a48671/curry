function curry(fun) {
    const countArguments = fun.length;
    let concatArguments = [];
    const checkArgument = (...rest) => {
        concatArguments = [...concatArguments, ...rest];
        if(concatArguments.length >= countArguments) {
            return fun(...concatArguments);
        } else {
            return checkArgument;
        }
    }
    return checkArgument;
}



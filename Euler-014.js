let longestCollatzSequence = (limit) => {
    let longestSequence = 1
    let longestValue = 1
    let startValue
    for(startValue = 2; startValue < limit; startValue ++){
        let numberOfTerms = 1
        let currentTerm = startValue
        while(currentTerm != 1){
            if(currentTerm % 2 === 0){
                currentTerm = currentTerm / 2
            }else{
                currentTerm = ((3 * currentTerm) + 1)
            }
            numberOfTerms = numberOfTerms + 1
        }
        if(numberOfTerms > longestSequence){
            console.log('Number of terms for ' + startValue + ' is ' + numberOfTerms)
            longestSequence = numberOfTerms
            longestValue = startValue
        }

    }
    return longestValue
}
console.log('Result is ' + longestCollatzSequence(1000000))

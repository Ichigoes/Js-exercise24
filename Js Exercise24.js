function lunchBreak(input) {
    let movieName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    lunchTime = breakLength / 8;
    breakTime = breakLength / 4;
    timeLeft = breakLength - (lunchTime + breakTime);

    if (timeLeft >= episodeLength) {
        timeLeft -= episodeLength
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        timeNeeded = episodeLength - timeLeft
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }

}

lunchBreak(["Game of Thrones", "48", "60"])

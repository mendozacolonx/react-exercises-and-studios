function hobbyLinks(){
    let hobbyLinks = ["https://www.tennis.com/", "https://www.runnersworld.com/", "https://www.goodreads.com/"]
    return (
        <div>
            <a href = {hobbyLinks[0]}>Tennis</a>
            <a href = {hobbyLinks[1]}>Running</a>
            <a href = {hobbyLinks[2]}>Reading</a>
        </div>
    );
}
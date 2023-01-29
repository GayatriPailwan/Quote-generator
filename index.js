function generate() {
    var quotes = {
        " -Alebert Einstein": '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty." ',
        " ― Lana Del Rey": ' "Who are you  Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them?  I have.I am fucking crazy. But I am free." ',
        "― Madeline Miller": '"Bury us, and mark our names above. Let us be free."',
        "― C.S. Lewis": '"I was not born to be free---I was born to adore and obey"',
        "― John Galsworthy": '"Life calls the tune, we dance"',
        "― Lauren DeStefano": '"But there’s no such thing as free. There are only different and more horrible ways to be enslaved."'
    };
    var authors = Object.keys(quotes);
    var author= authors[Math.floor(Math.random() * authors.length)];
    var quote =quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;


}
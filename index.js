const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newq = document.getElementById('newq');
const getNewquotes = (real_data)=>{
    let rnum =Math.floor(Math.random()*100);
    quotes.innerText = `${real_data[rnum].text}`
    author.innerText = `${real_data[rnum].author}`

}



const getQuotes = async()=>{
    let real_data ="";
    const api = "https://type.fit/api/quotes"
    try
    {
        let data = await fetch(api);
        real_data= await data.json();
        getNewquotes(real_data);
        

    }
    catch(e)
    {
        console.log(e)
    }
}
newq.addEventListener('click',getQuotes);
 




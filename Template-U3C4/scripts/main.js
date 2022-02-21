async function apiCall(url) {
    try{
        let res = await fetch(url);
        let data =  await res.json()
        return data;
    }catch (error){
        console.log("error:",error)
    }


    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(element => {
        let div = document.createElement("div");
        div.onclick=()=>{
            let arr=[]
            arr.push(element)
            localStorage.setItem("article",JSON.stringify(arr));
            window.location.href="news.html";
        }
        div.id="doct"
        let head = document.createElement("p")
        head.innerHTML=element.content;
        head.id="head"

        let dis = document.createElement("p")
        dis.innerHTML=element.disription
        dis.id="dis"

        let img = document.createElement("img")
        img.src = element.urlToImage
        
        div.append(head,dis,img)
        main.append(div)
        
    });

}

export { apiCall, appendArticles }
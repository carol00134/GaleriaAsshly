const handlerBarsContext ={
    "/index.html":{
        "gallery": [
            {
                imgUrl:"public/cafe1.png"
            },
            {
                imgUrl:"public/cafe 2.png"
            },
            {
                imgUrl:"public/cafe3.png"
            },
            {
                imgUrl:"public/cafe 4.jpg"
            },
            {
                imgUrl:"public/cafe5.jpg"
            },
            {
                imgUrl:"public/cafe6.jpg"
            },
            {
                imgUrl:"public/cafe7.jpg"
            },
            {
                imgUrl:"public/cafe8.png"
            },
            {
                imgUrl:"public/cafe9.jpg"
            },
            {
                imgUrl:"public/cafe10.jpg"
            },
            {
                imgUrl:"public/cafe12.jpg"
            },
            {
                imgUrl:"public/cafe 11.jpg"
            },
            {
                imgUrl:"public/cafe13.png"
            },
            {
                imgUrl:"public/cafe14.jpg"
            },
            {
                imgUrl:"public/cafe15.jpg"
            }
        ]
    },
}
 
const pageContext = (page)=>{
    const context = {...handlerBarsContext[page]}
    return context;
}
export default pageContext;

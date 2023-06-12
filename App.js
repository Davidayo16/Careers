
const toggler=document.querySelector(".btn")
const myList=document.querySelector(".list")
const navList=document.querySelectorAll(".list li a")
const myNav=document.querySelector(".list-container")
const topLink=document.querySelector(".arrow")
const sections=document.querySelectorAll("section")

window.onscroll=()=>{
    sections.forEach(sec=>{
      
        let top=window.scrollY
        // console.log(top)
        let offset=sec.offsetTop-80
        let height=sec.offsetHeight
        let id=sec.getAttribute('id')
        console.log(id)
        const heightt=sec.getBoundingClientRect().height
        console.log(top, offset, offset + height, height)
        if(top>=offset && top<offset+height){
            navList.forEach(nav=>{
                nav.classList.remove('active')
                const idd=document.querySelector(`#${id}`)
                // console.log(idd)
                document.querySelector('.list li a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

// *******BACK TO TOP*********
    topLink.addEventListener("click", (e)=>{
        e.preventDefault()
        const element=document.getElementById('home');
        const navHeight=navBar.getBoundingClientRect().height
        const listHeight=myNav.getBoundingClientRect().height    
        let position=element.offsetTop-navHeight
        if(navHeight>82){
            position=position+listHeight;
        }
        window.scrollTo({
            left:0,
            top:position,
            
            })       
            myNav.style.height=0
        toggler.classList.remove("active" )
      
        })

// ***********SHOW NAVBAR**********
toggler.addEventListener("click", function(){
    const list=myList.getBoundingClientRect().height
    const listHeight=myNav.getBoundingClientRect().height

    if(listHeight===0){
        myNav.style.height=`${list}px`
    }else{
        myNav.style.height=0
    }
    toggler.classList.toggle("active")   
    })

// ******SHOW BACK TO TOP******
window.addEventListener("scroll", function(){
    const page=window.pageYOffset
    // console.log(page)
    const linksCont=navBar.getBoundingClientRect().height
     const linksContt=navBar.offsetHeight
    //  console.log(linksContt)
    // console.log(linksCont)
     
    if(page>800){
        topLink.classList.add("show-arrow")
    }else{
        topLink.classList.remove("show-arrow")
    }
    })
    
 // *******SCROLLING AND LINKS TO PAGE*******
 const scrollLink=Array.from(document.querySelectorAll(".scroll-link"))
 const navBar=document.querySelector(".navbar")
scrollLink.map(scrol=>{
    scrol.addEventListener("click", (e)=>{
        e.preventDefault( )
        const id=e.currentTarget.getAttribute("href").slice(1)
        const element=document.getElementById(id);
        const navHeight=navBar.getBoundingClientRect().height
        const listHeight=myNav.getBoundingClientRect().height
        const fixedNav=navBar.classList.contains("fixed-nav")
        let position=element.offsetTop-navHeight
        //  console.log(position)
        //  console.log(position-navHeight)
        if(navHeight>82){
            position=position+listHeight;
        }
        window.scrollTo({
            left:0,
            top:position,
            
            })       
            myNav.style.height=0
        toggler.classList.remove("active" )
      
        })
})

const myBtn=Array.from(document.querySelectorAll(".btnn"))
const myBtnn=Array.from(document.querySelectorAll(".art"))
const myContent=Array.from(document.querySelectorAll(".content"))

myBtnn.forEach(btns=>{
    btns.addEventListener("click", (e)=>{
        const wiz=e.target.dataset.id
        myBtn.forEach(btn=>{
            btn.classList.remove("active")
            e.target.classList.add("active")
            myContent.forEach(cont=>{
                cont.classList.remove("active")
                }) 
            })
        
        const element=document.getElementById(wiz)
        element.classList.add("active")
        })
    
    })


    console.log("1"+2+"1")

function scrollNavbar(){
    let scrollTop = window.pageYOffset;
    console.log(scrollTop);
    document.querySelector("nav > ul").style.paddingTop = `${scrollTop}px`;
}

function main(){
    window.onscroll = () => {
        scrollNavbar();
    }
}

main();
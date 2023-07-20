router();
window.addEventListener("hashchange",(e)=>{
    router();
})
function router(){
    switch (location.hash) {
        case "#home":
          render({ title: "HOME", color: "red", ItemId: "home" });      
          break;
        case "#search":
          render({ title: "SEARCH", color: "blue", ItemId: "search" });
          break;
        case "#likes":
          render({ title: "LIKES", color: "yellow", ItemId: "likes"});
          break;
        case "#profile":
            render({ title: "PROFILE", color: "pink", ItemId: "profile" });
            break;
      }   
}
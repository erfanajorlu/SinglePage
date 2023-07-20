document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.nodeName != "I") return;
  let data;
  switch (e.target.getAttributeNode("item-id").value) {
    case "home":
      data = { title: "HOME", color: "red", ItemId: "home" };
      break;
    case "search":
      data = { title: "SEARCH", color: "blue", ItemId: "search" };
      break;
    case "likes":
      data = { title: "LIKES", color: "yellow", ItemId: "likes" };
      break;
    default:
        data = { title: "PROFILE", color: "pink", ItemId: "profile" };
        break;
  }
});

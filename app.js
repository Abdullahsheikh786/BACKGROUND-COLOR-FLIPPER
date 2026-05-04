function changeColor() {
      let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black"];
      
      let randomcolor = Math.floor(Math.random() * colors.length);
      
      document.body.style.backgroundColor = colors[randomcolor];

      if(colors[randomcolor] === "black" || colors[randomcolor] === "purple" || colors[randomcolor] === "blue" || colors[randomcolor] === "red"){
        document.body.style.color = "white";
      }
      else{
        document.body.style.color = "black";
      }
}
function rectangleCalculateArea(){
   const rectangleField=document.getElementById('rectangle-length')
   const rectangleText=rectangleField.value 
   const length=parseFloat(rectangleText)
   console.log(length);

   // get  the height 
   const rectangleWidth=document.getElementById('rectangle-width')
   const rectangleWidthText=rectangleWidth.value 
   const width=parseFloat(rectangleWidthText)
   console.log(width);
    // calculate the area 
    const Area  = length * width
    console.log(Area);
    const rectangleAreaCalculateDisplay=document.getElementById('rectangle-area')
    rectangleAreaCalculateDisplay.innerText=Area
}
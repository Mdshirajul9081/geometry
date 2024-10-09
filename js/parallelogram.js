function parallelogramCalculationArea(){

    //get the parallelogram base
    const parallelogramField=document.getElementById('parallelogram-base')
    const parallelogramText=parallelogramField.value 
    const base=parseFloat(parallelogramText)
    console.log(base);

    //get the parallelogram height section
    const parallelogramHeight=document.getElementById('parallelogram-height')
    const parallelogramSection=parallelogramHeight.value 
    const height=parseFloat(parallelogramSection)
    console.log(height);

    // calulate the area

    const Area  = base* height
    console.log(Area);
    const parallelogramAreaCalculationDisplay=document.getElementById('parallelogram-area')
    parallelogramAreaCalculationDisplay.innerText=Area ;

}
// Triangle 
function clickButton() {
  // Triangle base value
  const triangleBase = document.getElementById("triangle-base");
  const triangleText = triangleBase.value;
  const base = parseFloat(triangleText);
  console.log( base);

  // triangle height value
  const triangleHeight = document.getElementById("triangle-height");
  const triangleText2=triangleHeight.value
  const height=parseFloat(triangleText2)
  console.log( height)
//   Triangle Calculator
  const area =0.5*base*height;
  console.log( "Area of triangle is="+ area)

  const triangleAns=document.getElementById('triangle-ans')
  triangleAns.innerText = area;
  triangleAns.style.color='red'
}

// Rectectangle calculation
function calculateRectangle(){
    // width
    const rectangleWidth=document.getElementById('rectangle-width');
    const rectangleText1=rectangleWidth.value;
    const width =parseFloat(rectangleText1);
    console.log(width);

    //  length
    const rectangleLength =document.getElementById('rectangle-length');
    const rectangleText2 = rectangleLength.value;
    const length =parseFloat(rectangleText2);

    area =width * length;
    console.log("Total rectangle area="+ area);

    const totalArea =document.getElementById('total_area');
    totalArea.innerText=area;
    totalArea.style.color='red';
}
// Parallelogram calculator
function calculatorParallelogram(){
    // parallelogram base calculator 
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseText =parallelogramBase.value;
    const base =parseFloat(parallelogramBaseText);
    console.log(base);

    // parallelogram base height
    const parallelogramHeight =document.getElementById('parallelogram-height');
    const parallelogramHeightText =parallelogramHeight.value;
    const width =parseFloat(parallelogramHeightText);
    console.log(width);

   const area =base * width;
    console.log("Total area number="+area);

   const totalArea = document.getElementById('parallelogram_total');
   totalArea.innerText = area;
   totalArea.style.color ='red';



}

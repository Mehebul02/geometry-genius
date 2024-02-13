// Triangle
function clickButton() {
  // Triangle base value
  const triangleBase = document.getElementById("triangle-base");
  const triangleText = triangleBase.value;
  const base = parseFloat(triangleText);
  console.log(base);

  // triangle height value
  const triangleHeight = document.getElementById("triangle-height");
  const triangleText2 = triangleHeight.value;
  const height = parseFloat(triangleText2);
  console.log(height);
  //   Triangle Calculator
  const area = 0.5 * base * height;
  console.log("Area of triangle is=" + area);

  const triangleAns = document.getElementById("triangle-ans");
  triangleAns.innerText = area;
  triangleAns.style.color = "red";
}

// Rectectangle calculation
function calculateRectangle() {
  // width
  const rectangleWidth = document.getElementById("rectangle-width");
  const rectangleText1 = rectangleWidth.value;
  const width = parseFloat(rectangleText1);
  console.log(width);

  //  length
  const rectangleLength = document.getElementById("rectangle-length");
  const rectangleText2 = rectangleLength.value;
  const length = parseFloat(rectangleText2);

  area = width * length;
  console.log("Total rectangle area=" + area);

  const totalArea = document.getElementById("total_area");
  totalArea.innerText = area;
  totalArea.style.color = "	MediumVioletRed";
}
// Parallelogram calculator
function calculatorParallelogram() {
  // parallelogram base calculator
  const parallelogramBase = document.getElementById("parallelogram-base");
  const parallelogramBaseText = parallelogramBase.value;
  const base = parseFloat(parallelogramBaseText);
  console.log(base);

  // parallelogram base height
  const parallelogramHeight = document.getElementById("parallelogram-height");
  const parallelogramHeightText = parallelogramHeight.value;
  const width = parseFloat(parallelogramHeightText);
  console.log(width);

  const area = base * width;
  console.log("Total area number=" + area);

  const totalArea = document.getElementById("parallelogram_total");
  totalArea.innerText = area;
  totalArea.style.color = "Crimson";
}


// Rhombus
function rhombusCalculator(){
    const base =getInputFiled('rhombus-base');
    const height = getInputFiled('rhombus-height');
    const total=0.5*base*height;
    console.log(total);
    setInnerText("rhombus_area",total);
    
}



function getInputFiled(input){
    const inputFiled =document.getElementById(input);
    const inputText =inputFiled.value;
    const value =parseFloat(inputText);
    return value;
  
}

function setInnerText(elementId,area){
    const inner =document.getElementById(elementId);
   inner.innerText=area;
   inner.style.color='red';
}


// Pentagon

function pentagonCalculator(){
    const peri=pentagonInputFiled("pentagon-peri");
   const apo =pentagonInputFiled("pentagon-apo");
   const total = 0.5 * peri*apo;
   console.log(total);
   setElement("pentagon_area",total)
  
    
}

function pentagonInputFiled(input){
    const inputFiled =document.getElementById(input);
    const inputText =inputFiled.value;
    const value=parseFloat(inputText);
    return value;

}
function setElement(elements,area){
    const element =document.getElementById(elements);
    element.innerText =area;
    element.style.color='red'
}

// Ellipse
function ellipseCalculator(){
    const ellipseA = pentagonInputFiled('ellipse-a')
    const ellipseB =pentagonInputFiled("ellipse-b")
    const total=3.14*ellipseA*ellipseB;
    console.log(total)
    setElement("ellipse_area",total.toFixed(2))
}
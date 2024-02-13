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

var result = `
body {
  margin: 0;
  padding: 0;
  background-color: yellow;
}
#body {
  position: relative;
  width: 100%;
  height: 100%;
}
.spot {
  position: absolute;
  background-color: rgb(185, 163, 0);
  -webkit-border-radius: 50%;
}
#spot1 {
  width: 120px;
  height: 200px;
  -moz-border-radius: 120px / 200px;
  top: 10px;
  left: 20px;
  -webkit-transform: rotate(-15deg);
  -moz-transform: rotate(-15deg);
}
#spot2 {
  width: 60px;
  height: 100px;
  -moz-border-radius: 60px / 100px;
  top: 200px;
  left: 20px;
  -webkit-transform: rotate(-15deg);
  -moz-transform: rotate(-15deg);
}
#spot3 {
  width: 120px;
  height: 180px;
  -moz-border-radius: 120px / 180px;
  top: 500px;
  left: 230px;
  -webkit-transform: rotate(5deg);
  -moz-transform: rotate(5deg);
}
#spot4 {
  width: 60px;
  height: 100px;
  -moz-border-radius: 60px / 100px;
  top: 480px;
  left: 20px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
}
#spot5 {
  width: 40px;
  height: 80px;
  -moz-border-radius: 40px / 80px;
  top: 50px;
  right: 20px;
  -webkit-transform: rotate(-15deg);
  -moz-transform: rotate(-15deg);
}
#spot6 {
  width: 150px;
  height: 180px;
  -moz-border-radius: 150px / 180px;
  top: 400px;
  right: 20px;
  -webkit-transform: rotate(10deg);
  -moz-transform: rotate(10deg);
}
#spot7 {
  width: 60px;
  height: 80px;
  -moz-border-radius: 60px / 80px;
  top: 580px;
  right: 180px;
  -webkit-transform: rotate(25deg);
  -moz-transform: rotate(25deg);
}
#face {
  position: relative;
  top: -100px;
  width: 600px;
  margin: 0 auto;
  -webkit-transform: scale(1, 1);
}
#eyes {
  width: 540px;
  margin: 0 auto;
  position: relative;
  top: 200px;
}
.lash {
  border: 7px solid black;
  background-color: black;
  width: 0px;
  height: 100px;
}
#leftlash1 {
  position: absolute;
  top: -30px;
  left: 80px;
  -webkit-transform: rotate(-35deg);
  -moz-transform: rotate(-35deg);
}
#leftlash2 {
  position: absolute;
  top: -40px;
  left: 125px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
}
#leftlash3 {
  position: absolute;
  top: -30px;
  left: 170px;
  -webkit-transform: rotate(35deg);
  -moz-transform: rotate(35deg);
}
#rightlash1 {
  position: absolute;
  top: -30px;
  right: 170px;
  -webkit-transform: rotate(-35deg);
  -moz-transform: rotate(-35deg);
}
#rightlash2 {
  position: absolute;
  top: -40px;
  right: 125px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
}
#rightlash3 {
  position: absolute;
  top: -30px;
  right: 80px;
  -webkit-transform: rotate(35deg);
  -moz-transform: rotate(35deg);
}
.eye {
  overflow: hidden;
  border: 10px solid black;
  background-color: white;
  width: 250px;
  height: 250px;
  border-radius: 100%;
  -moz-border-radius: 100%;
}
#lefteye {
  position: absolute;
  left: 0;
}
#righteye {
  position: absolute;
  right: 0;
}
.iris {
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  border: 10px solid black;
  background-color: #48CAFE;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  -moz-border-radius: 100%;
}
#leftiris {
  position: absolute;
  right: 30px;
  top: 60px;
}
#leftiris:hover {
  right: 0px;
}
#rightiris {
  position: absolute;
  left: 30px;
  top: 60px;
}
#rightiris:hover {
  left: 0px;
}
.pupil {
  border: 10px solid black;
  background-color: black;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 15px;
  top: 15px;
  border-radius: 100%;
  -moz-border-radius: 100%;
}
#nose {
  border-width: 10px 10px 0 10px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  position: absolute;
  top: 340px;
  left: 240px;
  width: 100px;
  height: 150px;
  border-radius: 50% 50% 60% 60%;
  -moz-border-radius: 100px;
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.4, rgba(0, 0, 0, 0)), color-stop(0.4, rgb(255, 255, 0)));
}
.cheek {
  border-width: 10px 10px 0 10px;
  border-style: solid;
  border-color: rgb(231, 45, 22);
  width: 100px;
  height: 90px;
  border-radius: 100%;
  -moz-border-radius: 100%;
  background-image: -webkit-gradient(radial, 50 45, 0, 50 45, 6, color-stop(0, rgb(231, 45, 22)), color-stop(0.8, rgb(231, 45, 22)), color-stop(0.9, rgba(231, 45, 22, 0))), -webkit-gradient(radial, 30 25, 0, 30 25, 6, color-stop(0, rgb(231, 45, 22)), color-stop(0.8, rgb(231, 45, 22)), color-stop(0.9, rgba(231, 45, 22, 0))), -webkit-gradient(radial, 70 25, 0, 70 25, 6, color-stop(0, rgb(231, 45, 22)), color-stop(0.8, rgb(231, 45, 22)), color-stop(0.9, rgba(231, 45, 22, 0)));
}
#leftcheek {
  position: absolute;
  background-color: yellow;
  top: 400px;
  left: 0px;
  -webkit-transform: rotate(-25deg);
  -moz-transform: rotate(-25deg);
}
#rightcheek {
  position: absolute;
  background-color: yellow;
  top: 400px;
  right: 0px;
  -webkit-transform: rotate(25deg);
  -moz-transform: rotate(25deg);
}
#mouth {
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  overflow: hidden;
  background-color: rgb(77, 0, 10);
  position: absolute;
  top: 490px;
  left: 65px;
  width: 450px;
  height: 200px;
  border-width: 10px 10px 10px 10px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-radius: 0 0 100% 100%;
  -moz-border-radius: 0 0 30% 30%;
  background-image: -webkit-gradient(radial, 260 210, 0, 260 210, 72, color-stop(0, rgb(248, 158, 167)), color-stop(0.9, rgb(248, 158, 167)), color-stop(0.9, rgba(248, 158, 167, 0))), -webkit-gradient(radial, 190 210, 50, 190 210, 100, color-stop(0.29, rgb(248, 158, 167)), color-stop(0.3, rgb(0, 0, 0)), color-stop(0.4, rgb(0, 0, 0)), color-stop(0.4, rgba(77, 0, 10, 0))), -webkit-gradient(radial, 260 210, 50, 260 210, 100, color-stop(0.29, rgb(248, 158, 167)), color-stop(0.3, rgb(0, 0, 0)), color-stop(0.4, rgb(0, 0, 0)), color-stop(0.4, rgba(77, 0, 10, 100)))
    }
#mouth:hover {
  height: 0px;
}
.tooth {
  border-width: 10px 10px 10px 10px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  width: 70px;
  height: 80px;
}
#lefttooth {
  position: absolute;
  top: -20px;
  left: 125px;
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
}
#righttooth {
  position: absolute;
  top: -20px;
  right: 125px;
  -webkit-transform: rotate(-2deg);
  -moz-transform: rotate(-2deg);
}
#tongue {
  display: none;
  border-width: 10px 10px 10px 10px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  background-color: rgb(248, 158, 167);
  height: 60px;
  width: 200px;
  position: absolute;
  bottom: -20px;
}
`

var n = 0
var id = setInterval(() => {
  n += 1
  code.innerHTML = result.substring(0, n)
  if (n >= result.length) {
    window.clearInterval(id)
  }
}, 5)

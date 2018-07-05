import { injectGlobal } from 'styled-components'
import img from '../assets/Beer-2.jpg';

injectGlobal`
@import url("https://fonts.googleapis.com/css?family=Pacifico");

body{
    padding: 0;
    margin: 0;
    background-image: url(${img});
    background-position: right;
    background-attachment: fixed;
    background-repeat: no-repeat;
  	background-size: cover;
    overflow-x: hidden;
  };

.navbar-default {
  background: #63605f;
  border: none;
}

.navbar-default .navbar-brand {
  font-family: 'Pacifico', cursive;
  font-size: 30px;
  color: #ffffff;
}

.frontTitle {
  font-family: 'Pacifico', cursive;
  color: #ffffff;
  position: absolute;
  left: 150px;
  width: 200px;
  height: 120px;
}

h2 {
  color: #ffffff
}

h3 {
  color: #ffffff
}

label {
  color: #ffffff
}

text {
  color: #ffffff
}

.formTitle {
  font-family: 'Pacifico', cursive;
}

`

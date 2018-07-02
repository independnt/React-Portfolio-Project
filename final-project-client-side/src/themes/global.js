import { injectGlobal } from 'styled-components'
import img from '../assets/Beer-2.jpg';

injectGlobal`

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

.frontTitle {
  font-family: "Times New Roman";
  font-color: "orange";
  position: center;
  textShadowRadius: 100;
}
`

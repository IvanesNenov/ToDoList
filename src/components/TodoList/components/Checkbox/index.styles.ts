import styled from '@emotion/styled'

export const CheckboxWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  --background-color: #fff;
  --checkbox-height: 25px;

  & > input {
    display: none;
  }


  @-moz-keyframes dothabottomcheck {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @-webkit-keyframes dothabottomcheck {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @keyframes dothabottomcheck {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @keyframes dothatopcheck {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  @-webkit-keyframes dothatopcheck {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  @-moz-keyframes dothatopcheck {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  & > label {
    height: var(--checkbox-height);
    width: var(--checkbox-height);
    background-color: transparent;
    border: calc(var(--checkbox-height) * .1) solid #000;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition: border-color ease 0.2s;
    -o-transition: border-color ease 0.2s;
    -webkit-transition: border-color ease 0.2s;
    transition: border-color ease 0.2s;
    cursor: pointer;
  }

  & > label::before, label::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: calc(var(--checkbox-height) * .2);
    background-color: #34b93d;
    display: inline-block;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 5px;
    content: " ";
    -webkit-transition: opacity ease 0.5s;
    -moz-transition: opacity ease 0.5s;
    transition: opacity ease 0.5s;
  }

  & > label::before {
    top: calc(var(--checkbox-height) * .72);
    left: calc(var(--checkbox-height) * .41);
    box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  & > label::after {

    top: calc(var(--checkbox-height) * .37);
    left: calc(var(--checkbox-height) * .05);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  & > input:checked + label, label.checked{
    border-color: #34b93d;
  }

  & > input:checked + label::after, label.checked::after {
    height: calc(var(--checkbox-height) / 2);
    -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    animation: dothabottomcheck-19 0.2s ease 0s forwards;
  }


  & > input:checked +  label::before, label.checked::before {
    height: calc(var(--checkbox-height) * 1.2);
    -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -o-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;
    animation: dothatopcheck-19 0.4s ease 0s forwards;
  }
`



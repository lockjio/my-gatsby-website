import styled from "styled-components"

export const Styles = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap");
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css");

  html {
    overflow-x: hidden;
  }

  .app {
    font-family: "Open Sans", Roboto, sans-serif;
    color: #383838;
  }

  h1 {
    font-family: "Open Sans", Roboto, sans-serif;
    font-weight: 600;
    color: #383838;
  }

  h2 {
    font-family: "Open Sans", Roboto, sans-serif;
    font-weight: 600;
  }

  h4 {
    font-family: "Open Sans", Roboto, sans-serif;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    font-weight: 700;
    color: #383838;
  }

  h5 {
    font-family: "Open Sans", Roboto, sans-serif;
    font-weight: 600;
    color: #383838;
  }

  a {
    font-size: 0.875rem;
    color: #ffffff;
    cursor: pointer;
    text-decoration: underline;
    text-decoration: none;
  }

  a:active {
    color: #ffffff;
    text-decoration: none;
  }

  a:focus {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    color: #ffffff;
    text-decoration: none;
  }

  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a .btn {
    text-decoration: none;
  }

  a .btn:active {
    text-decoration: none;
  }

  a .btn:focus {
    text-decoration: none;
  }

  a .btn:hover {
    text-decoration: none;
  }

  a .btn:visited {
    text-decoration: none;
  }

  a:active.topic {
    color: #3e64a0 !important;
    text-decoration: none;
  }

  a:focus.topic {
    color: #3e64a0 !important;
    text-decoration: none;
  }

  a:hover.topic {
    color: #3e64a0 !important;
    text-decoration: none;
  }

  a:visited.topic {
    color: #3e64a0 !important;
    text-decoration: none;
  }

  li {
    font-size: 0.875rem;
  }

  li a {
    -o-transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
    -webkit-box-shadow: inset 0 -0.25rem 0 #b4e7f8;
    -webkit-transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
    border-bottom: 0.125rem solid #b4e7f8;
    box-shadow: inset 0 -0.25rem 0 #b4e7f8;
    color: #000000 !important;
    overflow-wrap: break-word;
    transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
    word-break: break-word;
    word-wrap: break-word;
  }

  li a:active {
    background-color: #b4e7f8;
  }

  li a:focus {
    background-color: #b4e7f8;
  }

  li a:hover {
    background-color: #b4e7f8;
  }

  p {
    font-size: 0.875rem;
  }

  p a {
    -o-transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
    -webkit-box-shadow: inset 0 -0.25rem 0 #b4e7f8;
    -webkit-transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
    border-bottom: 0.125rem solid #b4e7f8;
    box-shadow: inset 0 -0.25rem 0 #b4e7f8;
    color: #000000 !important;
    overflow-wrap: break-word;
    transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
    word-break: break-word;
    word-wrap: break-word;
  }

  p a:active {
    background-color: #b4e7f8;
  }

  p a:focus {
    background-color: #b4e7f8;
  }

  p a:hover {
    background-color: #b4e7f8;
  }

  .gray-text {
    color: #848484;
  }

  .marg-bot-0 {
    margin-bottom: 0 !important;
  }

  .marg-bot-05 {
    margin-bottom: 0.5rem !important;
  }

  .marg-bot-1 {
    margin-bottom: 1rem !important;
  }

  .marg-bot-2 {
    margin-bottom: 2rem !important;
  }

  .marg-top-0 {
    margin-top: 0 !important;
  }

  .marg-top-05 {
    margin-top: 0.5rem !important;
  }

  .marg-top-1 {
    margin-top: 1rem !important;
  }

  .marg-top-2 {
    margin-top: 2rem !important;
  }

  .space-1 {
    display: block;
    width: 100%;
    height: 1rem;
  }

  .space-2 {
    display: block;
    width: 100%;
    height: 2rem;
  }

  .space-3 {
    display: block;
    width: 100%;
    height: 3rem;
  }

  .btn {
    border-radius: 0.2rem;
    -webkit-box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }

  .btn:hover {
    -webkit-box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  }

  .btn.btn-info {
    background: #e18e7f;
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    color: #ffffff !important;
  }

  .btn.btn-info:active {
    background: #b55f4b;
  }

  .btn.btn-info:focus {
    background: #b55f4b;
  }

  .btn.btn-info:hover {
    background: #b55f4b;
  }

  .buttons {
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .buttons .btn {
    margin-bottom: 0.5rem;
    margin-right: 0.25rem;
    z-index: 10;
  }

  .profile-picture-wrapper {
    margin-right: calc(1rem + 2.5%);
  }

  .profile-picture {
    border-radius: 50%;
    height: auto;
    margin-bottom: 1.5rem;
    width: 10rem;
  }

  .flex-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .flex-container .background-image {
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    height: auto;
    margin-left: 1rem;
    max-height: 3rem;
    width: 3rem;
  }

  .flex-container .flex {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  #hero {
    padding-bottom: 1.5rem;
    padding-top: 2.5rem;
  }

  .app {
    display: block;
    width: 100%;
  }

  .app #menu {
    width: 100%;
  }

  .app .logo-wrapper {
    text-decoration: none !important;
  }

  .app .social {
    bottom: 0;
    display: block;
    margin-bottom: 1rem;
    position: absolute;
    width: 100%;
  }

  .app .social a {
    text-decoration: none !important;
  }

  .app .social a img {
    display: inline-block;
    height: 1rem;
    margin-right: 0.4rem;
    opacity: 0.25;
  }

  .app .social a:hover img {
    opacity: 1;
  }

  .app .links {
    display: block;
    width: 100%;
  }

  .app .links a {
    clear: left;
    color: #848484 !important;
    display: block;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }

  .app .links a:active {
    color: #000000 !important;
  }

  .app .links a:focus {
    color: #000000 !important;
  }

  .app .links a:hover {
    color: #000000 !important;
  }

  .app .links a.active {
    color: #000000 !important;
  }

  footer {
    margin-left: 12rem;
    margin-top: 1rem;
    padding-bottom: 1.2rem;
    padding-top: 1rem;
    position: relative;
    z-index: 1;
  }

  footer p {
    color: #a0a0a0;
    font-size: 0.75rem;
    line-height: 1;
    margin-bottom: 0;
  }

  footer p.right {
    float: right;
  }

  footer #scroll-to-top {
    cursor: pointer;
  }

  footer #scroll-to-top:hover {
    text-decoration: underline;
  }

  .form-control {
    border: 0.125rem solid rgba(0, 0, 0, 0.1);
    border-width: 0.125rem;
    font-family: "Open Sans", Roboto, sans-serif;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.75rem;
  }

  .form-control:hover {
    border: 0.125rem solid rgba(0, 0, 0, 0.2);
  }

  .form-control:active {
    border: 0.125rem solid #e18e7f;
  }

  .form-control:focus {
    border: 0.125rem solid #e18e7f;
  }

  textarea.form-control {
    margin-bottom: 0;
  }

  .line {
    border-top: 0.125rem solid rgba(26, 26, 26, 0.1);
    display: block;
    height: 0;
    margin: 1rem 0;
    width: 100%;
  }

  hr {
    border-top: 0.125rem solid rgba(26, 26, 26, 0.1);
    display: block;
    height: 0;
    margin: 1rem 0;
    width: 100%;
  }

  #extracurriculars {
    padding-bottom: 1.5rem;
  }

  .browser {
    border-radius: 0.2rem;
    -webkit-box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
  }

  .browser .top {
    background: #dbdbe0;
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem 0.2rem 0 0;
    height: 2.25rem;
    padding: 0.5rem;
    text-align: right;
  }

  .browser .top .circle {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    display: inline-block;
    height: 1.25rem;
    margin-left: 0.5rem;
    width: 1.25rem;
  }

  .browser .body {
    background: #ffffff;
    border: 0.0625rem solid rgba(0, 0, 0, 0.175);
    border-radius: 0 0 0.2rem 0.2rem;
    border-top: 0 solid transparent;
    padding: 1rem;
  }

  .browser .body h2 {
    color: #383838;
  }

  .browser-screenshot {
    background: #dbdbe0;
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    -webkit-box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
    padding: 0% 1.25% 2.5%;
  }

  .browser-screenshot .top {
    height: 2rem;
    padding: 0.5rem 0;
    text-align: right;
  }

  .browser-screenshot .top .circle {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    display: inline-block;
    height: 1rem;
    margin-left: 0.25rem;
    width: 1rem;
  }

  .system-screenshot {
    background: #ffffff;
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    -webkit-box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
    padding: 0% 1.25% 2.5%;
    padding-left: 1rem;
    padding-right: 1rem;
    max-height: 23rem;
  }

  .system-screenshot .top {
    height: 2rem;
    padding: 0.5rem 0;
    text-align: right;
  }

  .system-screenshot .top .circle {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    display: inline-block;
    height: 1rem;
    margin-left: 0.25rem;
    width: 1rem;
  }

  .mobile-screenshot {
    max-height: 30rem;
    text-align: center !important;
    margin: 0 auto;
  }

  .four {
    text-align: center;
    display: block;
  }

  .four-img {
    max-width: 100%;
    height: auto;
    width: auto;
  }

  .project {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    border-radius: 0.2rem;
    -webkit-box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.05);
    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.05);
    color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-bottom: 2rem;
    overflow: hidden;
    padding: 0 2.5%;
  }

  .project .screenshot-wrapper {
    padding: 5% 0 0 1rem;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .project:nth-child(even) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .project:nth-child(even) .screenshot-wrapper {
    padding: 5% 1rem 0 0;
  }

  .project .text {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 1rem 0;
  }

  .project .text .btn {
    background: rgba(255, 255, 255, 0.3);
    color: #ffffff;
  }

  .project .text .btn:hover {
    color: #ffffff;
  }

  .project .text .btn:focus {
    color: #ffffff;
  }

  .project .text .btn:visited {
    color: #ffffff;
  }

  .project .text .btn:active {
    color: #ffffff;
  }

  .project .browser-screenshot {
    border-bottom: 0;
    border-radius: 0.2rem 0.2rem 0 0;
    -webkit-box-shadow: 0 -0.1rem 2rem rgba(0, 0, 0, 0.25);
    box-shadow: 0 -0.1rem 2rem rgba(0, 0, 0, 0.25);
    padding-bottom: 0;
  }

  .project .system-screenshot {
    border-bottom: 0;
    border-radius: 0.2rem 0.2rem 0 0;
    -webkit-box-shadow: 0 -0.1rem 2rem rgba(0, 0, 0, 0.25);
    box-shadow: 0 -0.1rem 2rem rgba(0, 0, 0, 0.25);
    padding-bottom: 0;
  }

  .has-bg {
    background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }

  .mobile {
    position: relative;
    z-index: 1;
    height: 43.375rem;
    width: 21.375rem;
  }

  .mobile * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
  }

  .mobile *::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
  }

  .mobile *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
  }

  .mobile .side {
    background: #383838;
    border-radius: 3.375rem;
    height: 43.375rem;
    padding: 0.9375rem 1.375rem;
    width: 21.375rem;
    z-index: 1;
  }

  .mobile .screen {
    background: #383838;
    background-position: center center;
    background-size: cover;
    border-radius: 2.0625rem;
    position: relative;
    height: 40.75rem;
    width: 18.75rem;
    margin-left: -0.0625rem;
    margin-top: 0.375rem;
    z-index: 198;
    overflow: hidden;
  }

  .mobile .line::after {
    content: "";
    position: absolute;
    border: solid rgba(68, 68, 68, 0.25);
    border-width: 0 0.375rem;
    height: 0.3125rem;
    left: 0;
    width: 100%;
    z-index: 9;
    top: 4.25rem;
  }

  .mobile .line::before {
    content: "";
    position: absolute;
    border: solid rgba(68, 68, 68, 0.25);
    border-width: 0 0.375rem;
    height: 0.3125rem;
    left: 0;
    width: 100%;
    z-index: 9;
    bottom: 4.25rem;
  }

  .mobile .header {
    background: #383838;
    border-bottom-left-radius: 0.8125rem;
    border-bottom-right-radius: 0.8125rem;
    height: 1.5rem;
    left: 50%;
    margin-left: -5.125rem;
    position: absolute;
    top: 0.9375rem;
    width: 10.25rem;
    z-index: 199;
  }

  .mobile .volume-button {
    background: #383838;
    height: 1.625rem;
    left: -0.125rem;
    position: absolute;
    top: 5.75rem;
    width: 0.1875rem;
  }

  .mobile .volume-button::after {
    content: "";
    position: absolute;
    background: #383838;
    height: 3.125rem;
    left: 0;
    width: 0.1875rem;
    top: 3rem;
  }

  .mobile .volume-button::before {
    content: "";
    position: absolute;
    background: #383838;
    height: 3.125rem;
    left: 0;
    width: 0.1875rem;
    top: 7rem;
  }

  .mobile .power-button {
    background: #383838;
    height: 5rem;
    right: -0.125rem;
    position: absolute;
    top: 10rem;
    width: 0.1875rem;
  }

  .screen video {
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 78rem) {
    a {
      font-size: 1rem;
    }
    li {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 53rem) {
    .btn {
      padding: 0.375rem 0.75rem;
    }
    .no-flex-mobile {
      display: block !important;
    }
    .profile-picture {
      margin-left: calc(50% - 5rem);
    }
    .profile-picture-wrapper {
      margin-right: 0;
      width: 100%;
    }
    #hero {
      margin-top: -1rem;
    }
  }

  @media screen and (min-width: 64rem) {
    .post h1 {
      margin-bottom: 1rem;
      margin-top: calc(1.5rem + 1.25vh);
    }
    .post h2 {
      margin-bottom: 1rem;
      margin-top: calc(1.5rem + 1.25vh);
    }
    .post h3 {
      margin-bottom: 1rem;
      margin-top: calc(1.5rem + 1.25vh);
    }
    .post h4 {
      margin-bottom: 1rem;
      margin-top: calc(1.5rem + 1.25vh);
    }
    .post h5 {
      margin-bottom: 1rem;
      margin-top: calc(1.5rem + 1.25vh);
    }
    .post h6 {
      margin-bottom: 1rem;
      margin-top: calc(1.5rem + 1.25vh);
    }
    .card-post .body:first-child {
      padding-top: calc(1.5rem + 2.5vh) !important;
    }
    .card-post .body:last-child {
      padding-bottom: calc(1.5rem + 2.5vh) !important;
    }
    .project {
      margin-bottom: calc(2rem + 2.5vh);
    }
  }

  @media screen and (max-width: 35.75rem) {
    .flex-container .background-image {
      margin-left: 0.5rem;
      max-height: 3rem;
      width: 2.4rem;
    }
    .space-mobile {
      display: block;
      height: 1rem;
      width: 100%;
    }
    .project {
      border-radius: 0;
      margin-bottom: 1.5rem;
      margin-left: -1rem;
      margin-right: -1rem;
    }
  }

  @media screen and (max-width: 52.9937rem) {
    .nav-space {
      display: block;
      height: 3.0625rem;
      width: 100%;
    }
    .nav {
      -webkit-box-shadow: 0 0.1rem 0.15rem rgba(0, 0, 0, 0.1);
      box-shadow: 0 0.1rem 0.15rem rgba(0, 0, 0, 0.1);
      position: fixed;
      width: 100%;
      z-index: 10;
    }
    .nav #overview {
      background: #ffffff;
      border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.1);
      display: block;
      padding: 0.5rem 1rem;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      width: 100%;
      z-index: 15;
    }
    .nav #overview .logo {
      height: 2rem;
      margin-right: 0.75rem;
    }
    .nav #overview .logo.alt {
      opacity: 0;
      position: absolute;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      z-index: 1001;
    }
    .nav #overview.active {
      background: #e18e7f;
      border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.2);
    }
    .nav #overview.active .logo.alt {
      opacity: 1;
    }
    .nav #toggle {
      cursor: pointer;
      position: absolute;
      right: 1rem;
      top: calc(1rem + 0.1875rem);
      z-index: 1;
    }
    .nav #toggle span {
      background: #000000;
      display: block;
      height: 0.125rem;
      margin-bottom: 0.1875rem;
      -webkit-transition: background 0.2s ease;
      transition: background 0.2s ease;
      width: 1rem;
    }
    .nav #toggle.active span {
      background: #f5c9ae;
    }
    .nav #menu {
      background: #ffffff;
      border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.1);
      height: 0;
      left: 0;
      overflow: hidden;
      padding: 1rem 1rem 0.5rem;
      position: absolute;
      top: 0;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      width: 100%;
      z-index: 1;
    }
    .nav #menu.active {
      background: #e18e7f;
      height: 100vh;
    }
    .nav .social {
      margin-top: 1rem;
      position: relative;
    }
    .nav .social a img {
      color: #ffffff;
      -webkit-filter: invert(100%);
      filter: invert(100%);
      height: 1.4rem;
      margin-right: 2.5%;
      opacity: 0.75;
    }
    .nav .links a {
      color: #f5c9ae !important;
      font-size: 1.5rem;
      margin-bottom: 1.5%;
    }
    .nav .links a:hover {
      color: #ffffff !important;
    }
    .nav .links a.active:hover {
      color: #ffffff !important;
    }
    .nav .links a.active {
      color: #f5c9ae !important;
    }
    .nav .links a:focus {
      color: #ffffff !important;
    }
  }

  @media screen and (min-width: 53rem) {
    .hidden-on-desktop {
      display: none !important;
    }
    .app .nav-wrapper {
      height: 100vh;
      padding-left: 1rem;
      position: fixed;
    }
    .app .nav {
      background: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      display: block;
      height: 100%;
      position: fixed;
      top: 0;
      width: 12rem;
    }
    .app .nav #toggle {
      display: none;
    }
    .app .nav .logo {
      display: block;
      height: 2rem;
      margin-top: 1rem;
      opacity: 0.5;
    }
    .app .nav .social {
      min-height: 1.75rem;
    }
    .app .nav .links {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .app .nav .links a {
      margin-bottom: 5%;
    }
  }

  @media screen and (max-width: 28rem) {
    footer {
      margin-left: 0;
      padding-bottom: 0;
      padding-top: 1.5rem;
      text-align: center;
    }
    footer p {
      font-size: 0.875rem;
      margin-bottom: 1rem;
      width: 100%;
    }
    footer p.right {
      float: none;
    }
  }

  @media screen and (max-width: 47.9375rem) {
    .col-1-format {
      padding-top: 1rem;
    }
  }

  @media screen and (max-width: 64rem) {
    .project {
      display: block;
      padding: 0% 5%;
    }
    .project .screenshot-wrapper {
      padding: 0;
    }
    .project .screenshot-wrapper .browser-screenshot {
      -webkit-box-shadow: 0 -0.1rem 0.5rem rgba(0, 0, 0, 0.25);
      box-shadow: 0 -0.1rem 0.5rem rgba(0, 0, 0, 0.25);
    }
    .project .screenshot-wrapper .system-screenshot {
      -webkit-box-shadow: 0 -0.1rem 0.5rem rgba(0, 0, 0, 0.25);
      box-shadow: 0 -0.1rem 0.5rem rgba(0, 0, 0, 0.25);
    }
  }

  .content {
    position: relative;
    z-index: 1;
  }

  .content .card {
    background: #ffffff;
    border: 0.0625rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  .content .card .timestamp {
    font-size: 0.875rem;
    margin-bottom: 0;
  }

  .content .card .timestamp a {
    font-size: 0.875rem;
  }

  .content .card p:last-child {
    margin-bottom: 0;
  }

  .content .card .subtitle {
    font-weight: normal;
    margin-bottom: 0.75rem !important;
  }

  .content .card ul {
    margin-bottom: 0;
    padding-left: 1.5rem;
  }

  .content .card ul.tech {
    padding-bottom: 0.75rem;
  }

  .content .card.card-post {
    padding: 0;
  }

  .content .card.card-post .body {
    padding: 1rem;
  }

  .content .card.card-post .timestamp {
    margin-top: 0;
  }

  .content .card.has-bg {
    border: 0 !important;
  }

  .content .card.has-img {
    padding: 0;
  }

  .content .card.has-img .card-img {
    border-radius: 0.2rem 0.2rem 0 0;
    width: 100%;
  }

  .content .card.has-img .body {
    padding: 1rem;
  }

  .content .card.has-img#hero .card-img {
    background-position: top;
    background-repeat: none;
    background-size: cover;
    display: block;
    height: 10rem;
    width: 100%;
  }

  .content a .card {
    color: #000000;
    text-decoration: none;
  }

  .content a .card:active {
    color: #000000;
  }

  .content a .card:focus {
    color: #000000;
  }

  .content a .card:hover {
    color: #000000;
  }

  .content a .card:visited {
    color: #000000;
  }

  .app .content {
    min-height: calc(100vh - 3.25rem);
    padding-top: 1rem;
  }

  @media screen and (min-width: 78rem) {
    .content .card.card-post .body {
      padding: 1.5rem calc(1rem + 5%);
    }
    .app .content {
      margin-left: calc(12rem + 5vw);
      margin-right: calc(12rem + 5vw);
    }
    .app .content .content-full-width {
      margin-left: -5vw;
      margin-right: -5vw;
    }
  }

  @media screen and (max-width: 53rem) {
    .content .card .subtitle {
      font-size: 0.875rem;
    }
    .content .card.card-post .timestamp {
      font-size: 0.875rem;
    }
    .content .card.card-post .line {
      margin: 0.75rem 0;
    }
  }

  @media screen and (min-width: 64rem) {
    .content .card.card-post .body {
      padding: 1.5rem calc(1rem + 2.5%);
    }
    .app .content {
      margin-left: calc(12rem + 1.25vw);
      margin-right: calc(1rem + 5vw);
    }
    .app .content .content-full-width {
      margin-left: -1.25vw;
      margin-right: -5vw;
    }
  }

  @media screen and (max-width: 35.75rem) {
    .app .content {
      padding-top: 0;
    }
    .app .content .card {
      border-radius: 0;
      margin-left: -1rem;
      margin-right: -1rem;
    }
    .app .content .card .card-img {
      border-radius: 0;
    }
  }

  @media screen and (min-width: 53rem) {
    .content > .container-fluid {
      margin: 0 !important;
      padding: 0 !important;
    }
    .app .content {
      margin-left: calc(12rem + 1.25%);
      margin-right: 1rem;
    }
  }

  @media screen and (min-width: 93.5rem) {
    .app .content {
      margin-left: calc(12rem + 15vw);
      margin-right: calc(12rem + 15vw);
    }
    .app .content .content-full-width {
      margin-left: -15vw;
      margin-right: -15vw;
    }
  }
`

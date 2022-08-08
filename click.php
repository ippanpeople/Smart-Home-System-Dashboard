<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Smart_Home</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!-- Bootstrap CSS v5.0.2 -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />    
    <link rel="stylesheet" href="styles.css" />
    <script src="./time.js"></script>
    <!-- <script src="./weather.js"></script> -->
    <script src="./weather2.js"></script>
    <script src="./webSocket.js"></script>
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="./move.css">

    <link rel="icon" href="./smart-house.ico" type="image/x-icon">
  </head>
  <body onload="clickOn()">
    <div class="dark-light">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
    <div class="app">
      <div class="header">
        <div class="menu-circle"></div>
        <div class="header-menu">
          <a class="menu-link is-active" id="path">> Setting</a>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div class="header-profile">
          <div class="notification">
            <span class="notification-number">3</span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bell"
            >
              <path
                d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
              />
            </svg>
          </div>
          <svg viewBox="0 0 512 512" fill="currentColor">
            <path
              d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z"
            />
          </svg>
          <img class="profile-img" src="./smart-house.png" alt="" />
          <span class="ms-1" style="color:white;">demo.Home</span>
        </div>
      </div>
      <div class="wrapper">

        <div class="left-side">
          
          <!-- <div class="row">
            <div class="col d-flex justify-content-center align-items-center" style="font-size: 38px; color:white; font-weight:lighter; border-bottom: 1px solid; border-bottom-color: var(--border-color);">dm.Home</div>
          </div>
 -->
          <div class="row mt-1">
            <div class="col d-flex justify-content-end align-items-end pe-0" id="year" style="font-size: 10px; color:white; font-weight:lighter;"></div>
            <div class="col d-flex align-items-end" id="day" style="font-size: 10px; color:white; font-weight:lighter;"></div>
          </div>
          <div class="row">
            <div class="col d-flex align-items-end ps-3" id="mon" style="font-size: 40px; color:white; font-weight:lighter;"></div>
            <div class="col d-flex justify-content-center align-items-end p-0" id="date" style="font-size: 40px; color:white; font-weight:lighter;"></div>
          </div>
          <div class="row ms-0">
            <div class="col-5 d-flex align-items-end ps-4" id="hour" style="font-size: 50px; color:white; font-weight:lighter;"></div>
            <div class="col-1 d-flex justify-content-center align-items-end p-0" id="colon" style="font-size: 50px; color:white; font-weight:lighter;"></div>
            <div class="col-4 d-flex align-items-end p-0" id="min" style="font-size: 50px; color:white; font-weight:lighter;"></div>
            <div class="col-1 d-flex align-items-center p-0" id="sec" style="font-size: 15px; color:white; font-weight:lighter;"></div>
          </div>

          <div class="weather pt-1">
            <div class="row">
              <div class="city col-8 "></div>
              <div class="city col-2"></div>
              <div class="wicon DWEATHER col-2"></div>
              <!-- <div class="description DWEATHER col"></div> -->
            </div>
            <div class="row">
              <div class="col temp" style="font-size: 30px;"></div>
            </div>
            <div class="row">
              <div class="col description1 DWEATHER pe-0"></div>
              <div class="col description2 DWEATHER pe-0"></div>
              <div class="col description3 DWEATHER pe-0"></div>
              <div class="col description4 DWEATHER pe-0"></div>
              <div class="col description5 DWEATHER"></div>
            </div>
            <div class="row">
              <div class="col description1 DWEATHER pe-0"></div>
              <div class="col description2 DWEATHER pe-0"></div>
              <div class="col description3 DWEATHER pe-0"></div>
              <div class="col description4 DWEATHER pe-0"></div>
              <div class="col description5 DWEATHER"></div>
            </div>
            <div class="row">
              <div class="col temp1 pe-0" style="font-size: 1px;"></div>
              <div class="col temp2 pe-0" style="font-size: 1px;"></div>
              <div class="col temp3 pe-0" style="font-size: 1px;"></div>
              <div class="col temp4 pe-0" style="font-size: 1px;"></div>
              <div class="col temp5" style="font-size: 1px;"></div>
            </div>
          </div>
          <div class="weather my-1" style="padding: 10px 20px; font-size: 15px;">
            <div class="row">
              <div class="col">Indoor Temp : <span id="temperature" style="margin-left:100px;font-size: 15px;"></span>°C</div>
              
            </div>
            <div class="row">
              <div class="col">Indoor Humidity : <span id="humidity" style="margin-left:100px;font-size: 15px;"></span>%</div>
            
            </div>
          </div>
          <div class="weather">
            <!-- <iframe id="inlineFrameExample"
              title="Inline Frame Example"
              >
            </iframe> -->
            <video width="147" height="150" controls id="mp4" style="visibility: hidden;">
              <source src="./IMG_2442.mp4" type="video/mp4" />
            </video>
            <div class="row d-flex justify-content-center" style="font-size: 10px; font-weight: lighter;" id="confirm">confirm</div>
          </div>

          <div class="row">
            <div class="col d-flex justify-content-center align-items-center" style="font-weight:lighter; font-size:5px; color:white;">&copy; 2022 team-f-koi</div>
          </div>
        </div>

        <div class="main-container">
          <div class="content-wrapper" id="control_panel">
            <div class="content-section">
              <div class="content-section-title">Rooms</div>
              <ul>
                <li class="adobe-product" id="list_1">
                  <div class="products1" id="block1" style="  background-color: #f9fafb9e;">
                    <div class="row">
                      <i class="fa-solid fa-house" id="icon1" style="color: rgba(49, 48, 48, 0.645);"></i>
                    </div>
                  </div>
                  <div style="padding-left:10px;">Room1</div>
                  <span class="status">
                    <span class="status-circle green"></span>
                    Power On
                  </span>

                  <div class="button-wrapper">
                    <button class="content-button status-button open" id="setting">Setting</button>
                    <div class="menu">
                      <button class="dropdown">
                      </button>
                    </div>
                  </div>
                </li>
                <li class="adobe-product">
                  <div class="products">
                    <div class="row">
                      <i class="fa-solid fa-house" style="color: rgba(49, 48, 48, 0.645);"></i>
                    </div>
                  </div>
                  <div style="padding-left:10px;">Room2</div>
                  <span class="status">
                    <span class="status-circle green"></span>
                    Power On
                  </span>


                  <div class="button-wrapper">
                    <button class="content-button status-button open">Setting</button>
                    <div class="pop-up">
                      <div class="content-button-wrapper">
                        <button class="content-button status-button open close">
                          Cancel
                        </button>
                        <button class="content-button status-button">
                          Continue
                        </button>
                      </div>
                    </div>
                    <div class="menu">
                      <button class="dropdown">
                      </button>
                    </div>
                  </div>
                </li>
                <li class="adobe-product">

                  <div class="products">
                    <div class="row">
                      <i class="fa-solid fa-circle-plus" style="color: rgba(49, 48, 48, 0.645);"></i>
                    </div>
                  </div>


                  <div class="button-wrapper" id="add_room">
                    <button class="content-button status-button open">
                      Add Room
                    </button>
                    <div class="menu">
                      <button class="dropdown">
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="content-section">
              <div class="content-section-title" id="Controllers1">Controllers</div>
              <div class="container mx-0" id="Controllers2">
                <div class="apps-card row">
                  <div class="app-card col w-100 my-1" id="controller1" style="display: none;">
                    <div class="app-card__subtext"><i class="fa-solid fa-wind" id="cicon1" style=" background-color:#f9fafb9e; color: rgba(49, 48, 48, 0.645); border-radius: 10px; width: 40px;height: 40px; display: flex;align-items: center; justify-content: center;"></i><span style="font-size: 14px;">エアコン</span></div>
                    <div class="app-card-buttons">
                      <button class="content-button status-button" id="cb1">
                        ON/OFF
                      </button>
                      <div class="menu"></div>
                    </div>
                  </div>
                  <div class="app-card col w-100 my-1" id="controller2" style="display: none;">
                    <div class="app-card__subtext"><i class="fa-solid fa-lightbulb" id="cicon2" style=" background-color:#f9fafb9e; color: rgba(49, 48, 48, 0.645); border-radius: 10px; width: 40px;height: 40px; display: flex;align-items: center; justify-content: center;"></i><span style="font-size: 14px;">電気</span></div>
                    <div class="app-card-buttons">
                      <button class="content-button status-button" id="cb2">
                        ON/OFF
                      </button>
                      <div class="menu" ></div>
                    </div>
                  </div>
                  <div class="app-card col w-100 my-1" id="controller3" style="display: none;">
                    <div class="app-card__subtext"><i class="fa-solid fa-tv" id="cicon3" style=" background-color:#f9fafb9e; color: rgba(49, 48, 48, 0.645); border-radius: 10px; width: 40px;height: 40px; display: flex;align-items: center; justify-content: center;"></i><span style="font-size: 14px;">テレビ</span></div>
                    <div class="app-card-buttons">
                      <button class="content-button status-button" id="cb3">
                        ON/OFF
                      </button>
                      <div class="menu"></div>
                    </div>
                  </div>
                  <div class="app-card col w-100 my-1" id="controller4" style="display: none;">
                    <div class="app-card__subtext"><i class="fa-solid fa-droplet" style=" background-color:#f9fafb9e; color: rgba(49, 48, 48, 0.645); border-radius: 10px; width: 40px;height: 40px; display: flex;align-items: center; justify-content: center;"></i><span style="font-size: 14px;">加湿器</span></div>
                    <div class="app-card-buttons">
                      <button class="content-button status-button">
                        ON/OFF
                      </button>
                      <div class="menu"></div>
                    </div>
                  </div>

                  <div class="app-card col w-100 my-1" id="controller5" style="display: none;">
                    <div class="app-card__subtext"><i class="fa-solid fa-fan" style=" background-color:#f9fafb9e; color: rgba(49, 48, 48, 0.645); border-radius: 10px; width: 40px;height: 40px; display: flex;align-items: center; justify-content: center;"></i><span style="font-size: 14px;">扇風機</span></div>
                    <div class="app-card-buttons">
                      <button class="content-button status-button">
                        ON/OFF
                      </button>
                      <div class="menu"></div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <!--settingを押したときの-->
          <div class="content-wrapper w-100" id="set_menu">
          <div class="content-section back"></div>
          <div class="content-section">Add Room</div>
            <div class="container">
              <div class="app-card">
                <div class="row">
                  12345
                </div>
                <div class="row"></div>
              </div>
            </div>
          </div>
          <!--settingを押したときの-->

          <!-- auto controller  -->
          <div class="content-wrapper" id="set_a" style="width:87%;">
            <div class="content-section">
              <div class="content-section-title">Auto Controller</div>
              <ul>
                <li class="adobe-product" id="list_1">
                  <div style="padding-left:10px;">Controller</div>
                  <span class="status">
                    Condition
                  </span>

                  <div style="
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    /* width: 187px; */
                    margin-left: auto;
                    margin-right: auto;
                  ">
                    Option
                  </div>
                </li>
                <li class="adobe-product">
                  <div class="">
                  <form class="ps-5">
                        <select id="country" name="country" style="border: none; background-color: rgb(58 58 57 / 30%); border-radius: 4px; font-family: var(--body-font);font-size: 10px; color:white;">
                        <option value="au">エアコン</option>
                        <option value="ca">エアコンdemo</option>
                        <option value="usa">電気</option>
                        <option value="usa">テレビ</option>
                        <option value="usa">加湿器</option>
                        <option value="usa">扇風機</option>
                        </select>
                      </form>

                  </div>
                  <div style="padding-left:10px;"></div>
                  <span class="status">
                      <form>
                        <select id="country" name="country" style="border: none; background-color: rgb(58 58 57 / 30%); border-radius: 4px; font-family: var(--body-font);font-size: 10px; color:white; width:100px;">
                        <option value="au">>25°C</option>
                        <option value="ca">>30°C</option>
                        <option value="usa"><span>></span>80%</option>
                        <option value="usa"><span>></span>60%</option>
                        <option value="usa"><span><</span>150lux</option>
                        <option value="usa"><span><</span>140lux</option>
                        </select>
                      </form>

                  </span>


                  <div style="
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    /* width: 187px; */
                    margin-left: auto;
                  ">
                  <form>
                        <select id="country" name="country" style="border: none; background-color: rgb(58 58 57 / 30%); border-radius: 4px; font-family: var(--body-font);font-size: 10px; color:white; width:100px;">
                        <option value="au">ON</option>
                        <option value="ca">OFF</option>
                        <option value="usa"></option>
                        </select>
                      </form>
                      <button id="submit" class="content-button status-button open" style="margin-right: auto; margin-left: 120px;">
                        Submit
                      </button>

                  </div>
                </li>
              </ul>
            </div>
            
            <div class="content-section">
              <div class="content-section-title">Auto Controller</div>
              <ul>
                <li class="adobe-product" id="alist">
                  <div style="padding-left:10px;">Controller</div>
                  <span class="status">
                    Condition
                  </span>

                  <div style="
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    /* width: 187px; */
                    margin-left: auto;
                    margin-right: auto;
                  ">
                    Option
                  </div>
                </li>
                <li class="adobe-product" id="auto1" style="visibility: hidden;">
                  <div class="">
                  <div style="padding-left:10px;  font-weight: lighter;">加湿器</div>

                  </div>
                  <div style="padding-left:10px;"></div>
                  <span class="status">
                  <span class="status" style=" font-weight: lighter;">
                  <span>></span>80%
                  </span>

                  </span>


                  <div style="
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    /* width: 187px; */
                    margin-left: auto;
                  ">
                  <div style="
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    /* width: 187px; */
                    margin-left: auto;
                    margin-right: auto;
                    font-weight: lighter;
                  ">
                    ON
                  </div>
                      <button id="cancel" class="content-button status-button open" style="margin-right: auto; margin-left: 120px;">
                        Cancel
                      </button>

                  </div>
                </li>
              </ul>
            </div>

          </div>


          <!-- auto controller  -->
          </div>
      </div>
      <div class="overlay-app"></div>
    </div>

    <!-- menuBar -->
    <div class="main-header">
      <a class="main-header-link" id="db">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="header-menu-svg"
        >
          <path
            d="M64 400c0 8.8 7.16 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.18 0-80-35.8-80-80V64c0-17.67 14.33-32 32-32s32 14.33 32 32v336zm278.6-121.4c-12.5 12.5-32.7 12.5-45.2 0L240 221.3l-89.4 89.3c-12.5 12.5-32.7 12.5-45.2 0-12.52-12.5-12.52-32.7 0-45.2l112-112c12.5-12.5 32.7-12.5 45.2 0l57.4 57.3 105.4-105.3c12.5-12.52 32.7-12.52 45.2 0 12.5 12.5 12.5 32.7 0 45.2l-128 128z"
          />
        </svg>
        <span>Dashboard</span>
      </a>

      <a class="main-header-link" id="st">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="header-menu-svg"
        >
          <path
            d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-232 36.7V88c0-13.25-10.7-24-24-24s-24 10.75-24 24v204.7c-23.5 9.4-40 32.4-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.5-49.9-40-59.3zM144 176c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-48 48c-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32zm320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-48-176c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"
          />
        </svg>
        <span>Setting</span>
      </a>

      <a class="main-header-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="header-menu-svg"
          id="ac"
        >
          <path
            d="M256-.0078c4.7-.0003 9.2 1.0158 13.4 2.9208L457.7 82.79c22 9.33 38.5 31.01 38.3 56.31-.5 100.1-41.3 281.6-213.6 364.1-16.7 7.9-36.1 7.9-52.8 0-172.35-82.5-213.11-264-214.5-364.1.77-25.3 17.22-46.98 39.2-56.31L242.7 2.913c4.1-1.905 8.7-2.9211 13.3-2.9208zM256 444.8C393.1 378 431.1 230.1 432 141.4L256 66.77V444.8z"
          />
        </svg>
        <span>Auto Control</span>
      </a>
    </div>

    <!-- Bootstrap JavaScript Libraries -->
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
      integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
      crossorigin="anonymous"
    ></script>
    <scrip
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
      integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
      crossorigin="anonymous"
    ></script>
    <script src="./move.js"></script>
    <script>
            var temp = []

            let house_info = {
            fetchInfo: function(){
              fetch('http://10.0.0.109:5000/')
              .then((response) => response.json())
              .then((data) => this.displayInfo(data));
            },
            displayInfo: function(data){
              const { Temperature } = data;
              const { Humidity } = data;
              
              document.querySelector("#temperature").innerText = Temperature;
              document.querySelector("#humidity").innerText = Humidity;
              // document.querySelector(".canvasjs-chart-credit").innerText = "";

            }
          }
          function house(){
            house_info.fetchInfo()
            // console.log("get!!")
          }    

          var Timer = setInterval("house()",1000);

          ////////////////////////////////////////////
          // window.onload = function () {
            
          //   var temp = []; // dataPoints
          //   var chart = new CanvasJS.Chart("chartContainer", {
          //     backgroundColor: "rgba(14, 10, 25, 0.08)",
          //     title :{
          //       fontColor: "white",
          //       text: "",
          //       fontFamily: "DSEG14",
          //     },
          //     axisX:{
          //       labelFontFamily: "DSEG14",
          //       labelFontColor: "rgba(14, 10, 25, 0.08)",
          //     },
          //     axisY:{
          //       labelFontFamily: "DSEG14",
          //       labelFontColor: "white",
          //     },
          //     data: [{
          //       type: "line",
          //       color: "white",
          //       lineColor:"white",
          //       lineThickness: 0.2,
          //       dataPoints: temp
          //     }]
          //   });

          //   var xVal = 0;
          //   var yVal = 100; 
          //   var updateInterval = 1000;
          //   var dataLength = 20; // number of dataPoints visible at any point

          //   var updateChart = function (count) {

          //     count = count || 1;

          //     for (var j = 0; j < count; j++) {
          //       yVal = Number(document.querySelector("#temperature").innerText)
          //       temp.push({
          //         x: xVal,
          //         y: yVal
          //       });
          //       xVal++;
          //     }

          //     if (temp.length > dataLength) {
          //       temp.shift();
          //     }

          //     chart.render();
          //   };

          //   updateChart(dataLength);
          //   setInterval(function(){updateChart()}, updateInterval);
          //   updateTimer()
          // }
        </script>

  </body>
</html>

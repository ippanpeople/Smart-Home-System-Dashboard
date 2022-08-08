        // const ws = new WebSocket("ws://10.16.10.56:7000/");
        // var ws = new WebSocket("ws://10.101.0.12:7000/");
        var ws = new WebSocket("ws://10.0.0.109:7000/");
        // const ws = new WebSocket("ws://localhost:7001/");
        // const ws = new WebSocket("ws://localhost:7001/");
        var x;
        var start = 'webSocket 通信開始...<br /> ';
        var option = "[select mode r/s/e] : "
        var btn = ""
        var stuff = ""
        // str = str.replace(o, );
        console.log(ws);
        ws.onmessage = function(event){
            // console.log("[Message received from server]", event.data)
            // stuff += "<br/> [ msg recv ] <br/>"+ event.data;
            // stuff += "<br/>"+ event.data;
            // if(event.data == "connection"){
            //     document.getElementById("connection").innerHTML = start;
            // }else if(event.data == "option"){
            //      document.getElementById("option").innerHTML = option;
            // }else{
            //     document.getElementById("option").innerHTML = event.data;
            // }
            console.log(event.data)
        };
        function send(){
            x = document.getElementById("text").value;

            try {
                ws.send(x);
            } catch (error) {
                stuff = '<br/>' + error;
                document.getElementById("h").innerHTML= stuff;
            }
            // stuff += "<br/>  (msg sent) ---> "+ x + "<br/>"
            // document.getElementById("h").innerHTML= stuff;

            console.log("Msg sent ", x);
        }

        function recode_mode(btn){

            ws.send('r')

            try {
                ws.send(btn);
            } catch (error) {
                stuff = '<br/>' + error;
                document.getElementById("h").innerHTML= stuff;
            }
            // stuff += "<br/>  (msg sent) ---> "+ x + "<br/>"
            // document.getElementById("h").innerHTML= stuff;

            console.log("Msg sent ", x);
        }
        function send_mode(btn){

            ws.send('s')
            
            try {
                ws.send(btn);
            } catch (error) {
                stuff = '<br/>' + error;
                document.getElementById("h").innerHTML= stuff;
            }
            // stuff += "<br/>  (msg sent) ---> "+ x + "<br/>"
            // document.getElementById("h").innerHTML= stuff;

            console.log("Msg sent ", btn);
        }

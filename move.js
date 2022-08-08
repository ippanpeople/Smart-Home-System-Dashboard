    const set_bt = document.querySelector("#add_room");
    const control_panel = document.querySelector("#control_panel");

    const set_menu = document.querySelector("#set_menu");
    const back = document.querySelector(".back");
    
    const cont1 = document.querySelector("#Controllers1") ;
    const cont2 = document.querySelector("#Controllers2") ;
    const list = document.querySelector("#list_1");

    const block1 = document.querySelector("#block1");
    const icon1 = document.querySelector("#icon1");

    const controller1 = document.querySelector("#controller1")
    const controller2 = document.querySelector("#controller2")
    const controller3 = document.querySelector("#controller3")
    const controller4 = document.querySelector("#controller4")
    const controller5 = document.querySelector("#controller5")

    const cb1 = document.querySelector("#cb1")
    const cicon1 = document.querySelector("#cicon1")
    const cb2 = document.querySelector("#cb2")
    const cicon2 = document.querySelector("#cicon2")
    const cb3 = document.querySelector("#cb3")
    const cicon3 = document.querySelector("#cicon3")

    const db = document.querySelector("#db")
    const st = document.querySelector("#st")
    const ac = document.querySelector("#ac")
    const set_a = document.querySelector("#set_a")

    const submit = document.querySelector("#submit")
    const cancel = document.querySelector("#cancel")
    const auto1 = document.querySelector("#auto1")

    const path = document.querySelector("#path")
    let flag = 0;

    const confirm1 = document.querySelector("#confirm")
    const mp4 = document.querySelector("#mp4")
    const click = document.querySelector("#click")
    
    function clickOn(){
        console.log('on1')
        send_mode('up3')
    }


    confirm1.addEventListener("click",() =>{
        console.log("erq")
        if(mp4.style.visibility == "hidden"){
            mp4.style.visibility = "visible"
        }else{
            mp4.style.visibility = "hidden"
        }
    });


    submit.addEventListener("click",() =>{
        console.log("erq")
        auto1.style.visibility = "visible"
    });
    cancel.addEventListener("click",() =>{
        console.log("erq")
        auto1.style.visibility = "hidden"
    });

    st.addEventListener("click",() =>{
        set_menu.classList.remove('op');
        set_a.classList.remove('op');

        control_panel.classList.remove('cl');
        flag = 0;
        path.innerHTML = "> Setting"
        icon1.style.color="rgba(49, 48, 48, 0.643)";
        block1.style.backgroundColor="rgba(249, 250, 251, 0.62)";
    });
    ac.addEventListener("click",() =>{
        control_panel.classList.add('cl');
        set_a.classList.add('op');
        cont1.classList.remove('op');
        cont2.classList.remove('op');
        path.innerHTML = "> Auto Controller"

        flag = 1;
        console.log(flag);
    });
   
    //controlの動作
    list.addEventListener("click",() =>{
        if(flag == 0){
            cont1.classList.toggle('op');
            cont2.classList.toggle('op');
            controller1.style.display='inline';
            controller2.style.display='inline';
            controller3.style.display='inline';
            controller4.style.display='inline';
            controller5.style.display='inline';

            console.log(block1.style.backgroundColor)
            
            if(icon1.style.color == "rgba(49, 48, 48, 0.643)"){
                icon1.style.color="rgb(255,185,83)";
            }else{
                icon1.style.color="rgba(49, 48, 48, 0.643)";
            }
            if(block1.style.backgroundColor == "rgba(249, 250, 251, 0.62)"){
                block1.style.backgroundColor="white";
            }else{
                block1.style.backgroundColor="rgba(249, 250, 251, 0.62)";
            }
        }
    });
    cb1.addEventListener("click",() =>{
        console.log(cicon1.style.color)
        
        if(cicon1.style.color == "rgba(49, 48, 48, 0.643)"){
            cicon1.style.color="rgb(56 90 177)";
            send_mode('on2')
        }else{
            cicon1.style.color="rgba(49, 48, 48, 0.643)";
            send_mode('b23')
        }

        if(cicon1.style.backgroundColor == "rgba(249, 250, 251, 0.62)"){
            cicon1.style.backgroundColor="white";
        }else{
            cicon1.style.backgroundColor="rgba(249, 250, 251, 0.62)";
        }

    });
    cb2.addEventListener("click",() =>{
        console.log(cicon2.style.color)
        
        if(cicon2.style.color == "rgba(49, 48, 48, 0.643)"){
            cicon2.style.color="rgb(255,185,83)";
            send_mode('on1')
        }else{
            cicon2.style.color="rgba(49, 48, 48, 0.643)";
            send_mode('b21')
        }

        if(cicon2.style.backgroundColor == "rgba(249, 250, 251, 0.62)"){
            cicon2.style.backgroundColor="white";
        }else{
            cicon2.style.backgroundColor="rgba(249, 250, 251, 0.62)";
        }

    });
    cb3.addEventListener("click",() =>{
        console.log(cicon3.style.color)
        
        if(cicon3.style.color == "rgba(49, 48, 48, 0.643)"){
            cicon3.style.color="#7c82ff";
        }else{
            cicon3.style.color="rgba(49, 48, 48, 0.643)";
        }

        if(cicon3.style.backgroundColor == "rgba(249, 250, 251, 0.62)"){
            cicon3.style.backgroundColor="white";
        }else{
            cicon3.style.backgroundColor="rgba(249, 250, 251, 0.62)";
        }

    });
    
    back.addEventListener("click",() =>{
        set_menu.classList.remove('op');
        set_a.classList.remove('op');

        control_panel.classList.remove('cl');
        flag = 0;
        icon1.style.color="rgba(49, 48, 48, 0.643)";
        block1.style.backgroundColor="rgba(249, 250, 251, 0.62)";
    });

    
    set_bt.addEventListener("click",() =>{
        control_panel.classList.add('cl');
        set_menu.classList.add('op');
        cont1.classList.remove('op');
        cont2.classList.remove('op');
        flag = 1;
        console.log(flag);
    });


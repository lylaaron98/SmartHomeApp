const app = () => {

    const selected_devs = document.querySelectorAll('.device-card');
    const links = document.querySelectorAll('.link');

    let check = document.getElementById('onof');
    let close = document.getElementById('openclose');

    let notification = document.querySelector('.notification');

    if(notification !== null)
    {
        window.setTimeout(function() {  
    
            notification.classList.remove('hide');
    
        },0);

        window.setTimeout(function() {  
    
            notification.classList.add('fade-in');
    
        },500);

        window.setTimeout(function() {  
    
            notification.classList.remove('fade-in');
    
        },6000);

        window.setTimeout(function() {  
    
            notification.classList.add('hide');
    
        },6400);
    }

    window.
 
    window.setTimeout(function(){

        links.forEach(link => {

            if(window.location.href.includes(link.getAttribute('href')))
            {
                link.classList.add('selected');
    
                links.forEach(sublingLink => {
                        
                    if(link !== sublingLink)
                    {
                        sublingLink.classList.remove('selected');
                    }
                });
            }
        });

    },0);
    
    if(check !== null)
    check.addEventListener('click',(e)=>{

        if(check.checked)
            check.value = 1;
        else
            check.value = 0;
    });

    if(close !== null)
    close.addEventListener('click',(e)=>{

        if(close.checked)
            close.value = 1;
        else
            close.value = 0;
    })

    if(selected_devs !== null)
    selected_devs.forEach(device => {

        device.addEventListener('click',(e)=>{
            
            let _this = e.target;
            let name = _this.querySelector('.device-name').innerHTML;

            document.querySelector('.devices').classList.add('hide');
            document.querySelector('.devices-form').classList.remove('hide');
            document.querySelector('.devices-form').querySelector('.form-title').innerHTML = "Your're adding a new smart "+name+" : ";
            document.getElementById('device_type').value = name;
            
            if(name.includes("Lights"))
            {
                document.querySelector('.bright').classList.remove('hide');
                document.querySelector('.color').classList.remove('hide');
            }

            if(name.includes("Tv"))
            {
                document.querySelector('.chan').classList.remove('hide');
                document.querySelector('.vol').classList.remove('hide');
            }

            if(name.includes("Thermostat"))
            {
                document.querySelector('.temp').classList.remove('hide');
                document.querySelector('.temp #temper').setAttribute('max',100);
                document.querySelector('.temp #temper').setAttribute('min',0);
            }

            if(name.includes("Air Conditioner"))
            {
                document.querySelector('.temp').classList.remove('hide');
                document.querySelector('.temp #temper').setAttribute('max',50);
                document.querySelector('.temp #temper').setAttribute('min',-25);
            }

            if(name.includes("Air Purifier"))
            {
                document.querySelector('.speed').classList.remove('hide');
            }

            if(name.includes("Heater"))
            {
                document.querySelector('.temp').classList.remove('hide');
                document.querySelector('.temp #temper').setAttribute('max',100);
                document.querySelector('.temp #temper').setAttribute('min',0);
            }

            if(name.includes("Coffee Machine"))
            {
                document.querySelector('.temp').classList.remove('hide');
                document.querySelector('.temp #temper').setAttribute('max',100);
                document.querySelector('.temp #temper').setAttribute('min',0);
            }

            if(name.includes("Speakers"))
            {
                document.querySelector('.vol').classList.remove('hide');
            }

            if(name.includes("Washing Machine"))
            {
                document.querySelector('.temp').classList.remove('hide');
                document.querySelector('.temp #temper').setAttribute('max',50);
                document.querySelector('.temp #temper').setAttribute('min',0);
            }

            if(name.includes("Fridge"))
            {
                document.querySelector('.temp').classList.remove('hide');
                document.querySelector('.temp #temper').setAttribute('max',0);
                document.querySelector('.temp #temper').setAttribute('min',-100);
            }

            if(name.includes("Electronic Fan"))
            {
                document.querySelector('.speed').classList.remove('hide');
            }

            if(name.includes("Radio"))
            {
                document.querySelector('.chan').classList.remove('hide');
                document.querySelector('.vol').classList.remove('hide');
            }

            if(name.includes("Rice Cooker"))
            {
                document.querySelector('.temp').classList.remove('hide');
                document.querySelector('.temp #temper').setAttribute('max',100);
                document.querySelector('.temp #temper').setAttribute('min',0);
            }

            if(name.includes("Water Dispenser"))
            {
                document.querySelector('.temp').classList.remove('hide');
                document.querySelector('.temp #temper').setAttribute('max',100);
                document.querySelector('.temp #temper').setAttribute('min',0);
            }

            if(name.includes("Oven"))
            {
                document.querySelector('.temp').classList.remove('hide');
                document.querySelector('.temp #temper').setAttribute('max',100);
                document.querySelector('.temp #temper').setAttribute('min',0);
            }

            if(name.includes("Door Lock"))
            {
                document.querySelector('.open').classList.remove('hide');
            }

        });
    });

    const devs = document.querySelectorAll('.device-card');

    if(devs !== null)
    devs.forEach(devicetype => {

        let type = devicetype.querySelector('#typedev').value;

        if(type.includes("Lights"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "lightbulb";
        }
        if(type.includes("Tv"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "tv";
        }
        if(type.includes("Oven"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "kitchen";
        }
        if(type.includes("Air Conditioner"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "air";
        }
        if(type.includes("Thermostat"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "thermostat";
        }
        if(type.includes("Door Lock"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "meeting_room";

            if(devicetype.querySelector('#openclose').value === '0')
            {
                devicetype.querySelector('.openclosespan').classList.remove('hide');
                devicetype.querySelector('.openclosespan').classList.add('closed');
            }

        }
        if(type.includes("Water Dispenser"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "shower";
        }
        if(type.includes("Camera"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "camera";
        }
        if(type.includes("Alarm Clock"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "alarm";
        }
        if(type.includes("Radio"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "radio";
        }
        if(type.includes("Electronic Fan"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "hvac";
        }
        if(type.includes("Speakers"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "speaker";
        }
        if(type.includes("Laptop"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "laptop";
        }
        if(type.includes("Rice Cooker"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "countertops";
        }
        if(type.includes("Washing Machine"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "local_laundry_service";
        }
        if(type.includes("Coffee Machine"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "coffee";
        }
        if(type.includes("Air Purifier"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "air";
        }
        if(type.includes("computer"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "desktop_windows";
        }
        if(type.includes("Fridge"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "kitchen";
        }
        if(type.includes("Heater"))
        {
            devicetype.querySelector('#typeicon').innerHTML = "hvac";
        }
    });

    const deleteBtns = document.querySelectorAll('#delete-btn');

    deleteBtns.forEach(deleteBtn => {

        deleteBtn.addEventListener('click',(e)=>{

            e.preventDefault();
    
            let confirmDel = confirm("Are You Sure You Want To Delete This Device ?");
    
            if(!confirmDel)
            {
                return;
            }
    
            let href = deleteBtn.getAttribute('href');
    
            window.location = href;
    
        });
    });

    const brightness_range_input = document.getElementById('brightness');
    const volume_range_input = document.getElementById('volume');

    if(brightness_range_input !== null)
    brightness_range_input.addEventListener('mousemove',(e)=>{

        document.querySelector('.brightness_val').innerHTML = e.target.value;
    })

    if(volume_range_input !== null)
    volume_range_input.addEventListener('mousemove',(e)=>{

        document.querySelector('.volume_val').innerHTML = e.target.value;
    })
    
    let dname = document.querySelector('#device_type').value;

    if(dname.includes("Thermostat"))
    {
        document.querySelector('.temp #temper').setAttribute('max',100);
        document.querySelector('.temp #temper').setAttribute('min',0);
    }

    if(dname.includes("Air Conditioner"))
    {
        document.querySelector('.temp #temper').setAttribute('max',50);
        document.querySelector('.temp #temper').setAttribute('min',-25);
    }

    if(dname.includes("Heater"))
    {
        document.querySelector('.temp #temper').setAttribute('max',100);
        document.querySelector('.temp #temper').setAttribute('min',0);
    }

    if(dname.includes("Coffee Machine"))
    {
        document.querySelector('.temp #temper').setAttribute('max',100);
        document.querySelector('.temp #temper').setAttribute('min',0);
    }

    if(dname.includes("Washing Machine"))
    {
        document.querySelector('.temp #temper').setAttribute('max',50);
        document.querySelector('.temp #temper').setAttribute('min',0);
    }

    if(dname.includes("Fridge"))
    {
        document.querySelector('.temp #temper').setAttribute('max',0);
        document.querySelector('.temp #temper').setAttribute('min',-100);
    }

    if(dname.includes("Rice Cooker"))
    {
        document.querySelector('.temp #temper').setAttribute('max',100);
        document.querySelector('.temp #temper').setAttribute('min',0);
    }

    if(dname.includes("Water Dispenser"))
    {
        document.querySelector('.temp #temper').setAttribute('max',100);
        document.querySelector('.temp #temper').setAttribute('min',0);
    }

    if(dname.includes("Oven"))
    {
        document.querySelector('.temp #temper').setAttribute('max',100);
        document.querySelector('.temp #temper').setAttribute('min',0);
    }
    
}

window.addEventListener('load',()=>{

    app();
});

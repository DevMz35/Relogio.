(() =>{
    const btn1 = document.querySelector('.btns');
    const btn2 = document.querySelector('.btnst');
    const btn3 = document.querySelector('.btnre');
    const relogio = document.querySelector('.relogio-p');
    let tempo;
    let segundos = 0;
    
    const meuRelogio = ()=>{
        const minhashoras = new Date(segundos * 1000);
        return minhashoras.toLocaleTimeString('pt-mz', {
            hour12: false,
            timeZone: 'GMT'
        });
    };


    const iniaRelogio = () =>{
        tempo = setInterval(()=>{
            segundos ++;
            relogio.textContent = meuRelogio();
        }, 1000);
    };

    btn1.addEventListener('click', (e) =>{
        clearInterval(tempo);
        iniaRelogio();
    });

    btn2.addEventListener('click', (e) =>{
        clearInterval(tempo);
    });

    btn3.addEventListener('click', (e)=>{
        clearInterval(tempo);
        segundos =0;
        relogio.textContent = '00:00:00'
    })

})()
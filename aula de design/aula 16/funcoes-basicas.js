document.getElementById("mudar-a-cor").onclick = function() { mudacor() };

    function mudacor(){

        document.getElementsByClassName('mudafonte')[0].style.fontFamily = 'arial'; 
        document.getElementsByClassName('mudafonte')[1].style.fontFamily = 'arial'; 
        //esse [0] é a contagem que tem nessa lista, do qual só tem 1 pela quantidade do class "mudafonte", fica [0], se tivesse mais, poderia usar a lógica do for in range

        document.getElementById('texto').style.backgroundColor = "gray";
        document.getElementById('texto').innerHTML = "A cor de plano de fundo mudou!";

    }


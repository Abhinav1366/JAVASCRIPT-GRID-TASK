const container = document.querySelector('.container');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click',(e) =>{

        if(input.value > 12){
            alert("Enter a number that is less than 12")
            return;
        };
        submitBtn.style.display = 'none';
        let value = +input.value;
        input.style.display = "none";
        container.classList.add('active');
        container.style.gridTemplateColumns = `repeat(${value} , 1fr)`;
        container.innerHTML = "";
        
        for(let i=0; i<value; i++){
            for(let j=0; j<value; j++){
                const boxes = document.createElement('div');
                boxes.classList.add('box');
                boxes.dataset.row = i;
                boxes.dataset.col = j;
                container.appendChild(boxes);
            };
        };

        const boxes = document.querySelectorAll('.box');

        boxes.forEach(item => {
            item.addEventListener('dblclick' , () => {
                if(item.classList.contains('disabled')) return;
                const row  = item.dataset.row;
                const col = item.dataset.col;
                boxes.forEach(box =>{
                    const boxRow = parseInt(box.dataset.row);
                    const boxCol = parseInt(box.dataset.col);

                    if(box === item){
                        box.style.background = 'red';
                    }else if(box.dataset.row === row || box.dataset.col === col || Math.abs(boxRow - row) === Math.abs(boxCol - col))
                    {
                        box.style.background = 'grey';
                        box.classList.add('disabled');
                    };
                });
            });
        });
    
});



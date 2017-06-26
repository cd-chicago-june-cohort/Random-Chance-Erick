function slots(quarters){
    while(quarters > 0){
        var num = (Math.floor(Math.random() * 100));
        if(num == (Math.floor(Math.random() * 100))){
            console.log(('You won ' + num + ' quarters!'));
            quarters += num;
        }
        console.log('No luck this time :( you have ' + quarters + ' quarters left!');
        quarters--;
        if(quarters == 0){
            var message = 'You ran out of quarters :(';
            return message;
        }
    }
}
console.log(slots(1000));
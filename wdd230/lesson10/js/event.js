const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

    fetch(eventURL)
        .then(response => {
            response.json()
            .then(
                response => {
                    const eventTowns = response.towns;

                    eventTowns.forEach(
                        (eventTown)=>{
                            if (eventTown.name.toLowerCase()=== 'preston'){
                                document.querySelector('#prestonEvents1')
                                    .textContent = eventTown.events[0];
                                document.querySelector('#prestonEvents2')
                                    .textContent = eventTown.events[1];
                                document.querySelector('#prestonEvents3')
                                    .textContent = eventTown.events[2];
                            }
                        }
                    )
                }
            )
        } );


        fetch(eventURL)
        .then(response => {
            response.json()
            .then(
                response => {
                    const eventTowns = response.towns;

                    eventTowns.forEach(
                        (eventTown)=>{
                            if (eventTown.name.toLowerCase()=== 'soda springs'){
                                document.querySelector('#sodaSprings1')
                                    .textContent = eventTown.events[0];
                                document.querySelector('#sodaSprings2')
                                    .textContent = eventTown.events[1];
                                document.querySelector('#sodaSprings3')
                                    .textContent = eventTown.events[2];
                            }
                        }
                    )
                }
            )
        } );

        fetch(eventURL)
        .then(response => {
            response.json()
            .then(
                response => {
                    const eventTowns = response.towns;

                    eventTowns.forEach(
                        (eventTown)=>{
                            if (eventTown.name.toLowerCase()=== 'fish haven'){
                                document.querySelector('#fishHaven1')
                                    .textContent = eventTown.events[0];
                                document.querySelector('#fishHaven2')
                                    .textContent = eventTown.events[1];
                                document.querySelector('#fishHaven3')
                                    .textContent = eventTown.events[2];
                            }
                        }
                    )
                }
            )
        } );
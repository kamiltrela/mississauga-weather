const url = 'http://localhost:3000/';

const LoadData = async () => {
            try {
                const res = await fetch(url,{
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache'});
                const data = await res.json();
                //console.log(data);
                return data;
            }catch(err) {
                console.error(err)
            }
        };

        LoadData().then( (data) => console.log(data) );
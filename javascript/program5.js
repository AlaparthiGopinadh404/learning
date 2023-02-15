
            let school = {
                name: "Vivekanda school",
                location:"Delhi",
                established:1995,
                20:1000,
                displayinfo:function(){
                    document.write(`${school.name}was  established in ${school.established}at${school.location}`);

                }
            }
            console.log(Object.values(school))

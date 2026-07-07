document.querySelector("#getUshauri")
     .addEventListener("click", () => {

fetch(`https://ushauriwebsystem.onrender.com`)
    .then(response => response.json())
    .then(data => {
    
     console.log(data);

                document.querySelector("#ushauri")
                    .textContent = data.ushauri;

                document.querySelector("#ushauriId")
                    .textContent = `Ushauri ID: ${data.id}`;
            })
            .catch(error => {

                document.querySelector("#ushauri")
                    .textContent =
                    "Samahani, imeshindwa kupakia ushauri. Tafadhali jaribu tena baadae.";

                console.error(error);
            });
    });

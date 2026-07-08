document.querySelector("#getUshauri")
  .addEventListener("click", () => {
    
    // 1. Soma kundi lililochaguliwa kwenye dropdown
    const selectedCategory = document.querySelector("#categorySelect").value;
    
    // 2. Anwani ya msingi ya API yako ya Render
    let url = 'https://ushauriwebsystem.onrender.com/api/ushauri';
    
    // 3. Kama mtumiaji amechagua kundi maalum, ongeza kwenye URL
    if (selectedCategory) {
        url = `https://ushauriwebsystem.onrender.com/api/ushauri/${selectedCategory}`;
    }

    // 4. Piga fetch kwenda kwenye URL tuliyoijenga
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
        // Onyesha ushauri kwenye skrini
        document.querySelector("#ushauri").textContent = data.ushauri;
        document.querySelector("#ushauriId").textContent = `Ushauri ID: ${data.id} [Category: ${data.category || 'Jumla'}]`;
      })
      .catch(error => {
        document.querySelector("#ushauri").textContent = 
          "Samahani, imeshindwa kupakia ushauri. Tafadhali jaribu tena baadae.";
        console.error(error);
      });
  });

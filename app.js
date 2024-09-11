function btn_search() {
    // Get reference to the "resultados-pesquisa_id" section
    let section = document.getElementById("resultados-pesquisa_id");
    let searchPlace = document.getElementById("search_place").value;

    // Initialize an empty string to store the results
    let results = "";
    let titleLow= "";
    let descriptionLow ="";
    let searchPlaceLow =searchPlace.toLowerCase();
    let tagsLow = "";
  
    // Loop through each item in the "data" array
    for (let item of data) {
        //first converting the value in search bar, description
        titleLow = item.title.toLowerCase()
        descriptionLow = item.description.toLowerCase()
        tagsLow = item.tags.toLowerCase()
        
      // if what is written in search bar includes the Title
        if(titleLow.includes(searchPlaceLow) || descriptionLow.includes(searchPlaceLow) || tagsLow.includes(searchPlaceLow)){
            results += `
        <div class="item-resultado">
          <h2>
            <a
              href="#"
              target="_blank"
            >${item.title}</a>
          </h2>
          <p class="descricao-meta"> ${item.description}</p>
          <a href="${item.link}" target="_blank">More info</a>
        </div>
        `;
        }
      //if search bar is an empty string, do nothing  
        if(searchPlaceLow == ""){
            section.innerHTML = "<p>No results found, please provide a seach parameter<p>"
            return}      
    }

    if (!results){
      results = "<p>Nothing was found<p>"
    }  
    
    // Set the innerHTML of the "resultados-pesquisa_id" section with the accumulated results
    section.innerHTML = results;
  }
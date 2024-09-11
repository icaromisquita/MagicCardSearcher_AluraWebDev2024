**Title:** Magic: The Gathering Card Searcher

**Description:**

This is a basic web application that allows users to search for Magic: The Gathering cards based on their name, color, or other information. 

**Technologies:**

* **HTML:** The foundation for structuring the content and layout of the web page.
* **CSS:** Used to style the visual appearance of the elements (likely in a separate `style.css` file). (Not included in the provided code snippet).
* **JavaScript:** Provides interactivity and functionality to the web page through the `btn_search` function.

**How it Works:**

1. **Search Bar:** The user enters a search term (card name, color, or other information) in the text input field with the ID "search_place".
2. **Search Button:** Clicking the button with the `btn_search` function triggers the search functionality.
3. **Search Logic:**
   - The `btn_search` function:
     - Retrieves references to the search input field and the results section.
     - Converts both the search term and relevant card data (title, description, and tags) to lowercase for case-insensitive search.
     - Iterates through each card object in a JavaScript array named `data` (not provided here but assumed to exist).
     - Checks if the search term is found in the lowercase versions of the card's title, description, or tags.
4. **Displaying Results:**
   - If a match is found, the function builds an HTML string dynamically, creating a new result item for each matching card.
   - Each result item includes:
     - A card title with a link (hyperlink) to an external source (e.g., Gatherer website).
     - A brief description of the card.
     - A "More info" link to the card's detail page on the external source.
5. **No Results Handling:**
   - If no search term is provided, the function displays a message prompting the user to enter a search parameter.
   - If no matching cards are found after searching, the function displays a "Nothing was found" message.
6. **Results Section Update:**
   - The final HTML string containing the search results is used to update the inner HTML content of the "resultados-pesquisa_id" section, replacing any previous content.

**This project was created during the Alura WebDev Immersion 2024**

# Bush_Baby

Game Name
Bush_Baby!
Description
Bush_Baby is an old folklore to kids about an animal that comes out of the forest to steal babies that cry and disturb their mothers and sisters. So the child's game was created to distract the baby by captivating their eyes with the bright colors and indulging them with the music and dancing, hence stopping their cry and stirring the animal from coming to take them away! It does feature dancing characters and animated children that jump and run when pressing buttons A and B.
Installation
Clone the repository or download the source code files.
Open the index.html file in a web browser.
Code Explanation
HTML
The HTML code defines the structure of the game's user interface. It includes buttons for playing and stopping music, buttons for performing actions in the game, and SVG elements for visual effects.
CSS
The CSS code contains the styles that define the appearance and layout of the game's elements. It sets the background color, positions the game elements, and defines the styles for buttons, characters, clouds, et cetera.
JavaScript
The JavaScript code contains the game logic and functionality. Here is an explanation of the essential parts of the code:
The sfx object contains sound effects for the game, such as the push and boost sounds.
The character variable refers to the character element in the HTML.
The dancing interval variable stores the interval for the character's dance animation.
The Bidoegwu function starts the character's dance animation by applying the dance animation style to the character element.
The Kwusiegwu function stops the character's dance animation by clearing the interval and removing the dance animation style from the character element.
The music object contains the background music for the game.
The Character class represents the game character and defines its actions.
The push method plays the push sound effect, adds the pushing class to the character element to trigger the push animation, and removes the pushing class after a delay to stop the animation.
The boost method plays the boost sound effect, adds the walking class to the character element to trigger the walk animation, and removes the walking class after a delay to stop the animation.
The player variable creates an instance of the Character class for the game's player character.
Event listeners are added to the A and B buttons to call the push and boost methods of the player character, respectively.
Event listeners are also added to the play and stop music buttons to Nbido and Kwusi, the background music.
Resources Used
howler.js - A JavaScript audio library for playing sound effects and background music.
Youtube Video tutorial of Drew Conley.
Conclusion
This README file provides an overview of the class project game, explains the code structure, and guides users on installing and playing the game.

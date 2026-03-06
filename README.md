## Hangman Game

This project was built as part of my front-end development training to practice JavaScript logic, DOM manipulation, and event handling by building a classic Hangman word-guessing game.

The goal was to implement the full game logic in JavaScript while creating a responsive and user-friendly interface using HTML and SCSS.

## Demo

-  endearing-caramel-9d80ac.netlify.app

- Screenshots

  <img width="546" height="1600" alt="image" src="https://github.com/user-attachments/assets/b7f40bfa-7e4e-4a30-9134-d658d670c8c0" />




## Features

The Minimum Viable Product included:

- Random word generation

- Hidden word display using placeholders

- Letter guessing functionality

- Correct letter reveal logic

- Incorrect guess tracking

- Game win condition

- Game lose condition

- Disabled letters once selected

- Play again functionality

## Stack Used

# HTML

- Used to structure the game layout and components.

# SCSS

- Used to create a cleaner styling structure with reusable variables and nesting.

# JavaScript (Vanilla JS)

- Used to implement the core game logic, event handling, and DOM updates.

The project was intentionally built using Vanilla JavaScript to strengthen fundamental programming concepts before moving into frameworks like React.

## Build Steps

- Clone the repository
- git clone https://github.com/sheezanmk/hangman.git
- Navigate to the project folder
- cd hangman
- Open the project

- Open index.html in your browser.

# Example:

- open index.html

No additional dependencies are required as the project runs entirely in the browser.

## Design Goals

The primary goals were:

- Implement a fully functional game using pure JavaScript

- Practice managing game state

- Improve DOM manipulation skills

- Create a clean and intuitive user interface

## Implementation Approach

The application logic revolves around a few core pieces of state:

- Selected word

- Correct guesses

- Incorrect guesses

- Remaining attempts

- When a user selects a letter:

- The game checks whether the letter exists in the selected word.
  - If correct, the letter is revealed in the hidden word.

  - If incorrect, the number of remaining attempts decreases.

- Letters are disabled once guessed to prevent duplicate guesses.

- The game ends when either:
  - The user successfully reveals the full word (win), or

  - The maximum number of incorrect guesses is reached (lose).

## Features

- Random word selection

- Interactive letter keyboard

- Correct letter reveal system

- Disabled guessed letters

- Wrong guess tracking

- Dynamic game state updates

- Win and lose detection

- Restart game functionality

- Clean UI with responsive styling

## Known Issues

- Words are currently stored locally instead of fetched from an API.

- Game difficulty cannot be adjusted.

- The hangman visual progression could be improved with animations.

## Future Goals

If I were to extend the project further, I would add:

- Difficulty levels (easy / medium / hard)

- Word API integration for dynamic word lists

- Animated hangman drawing progression

- Score tracking

- Timer-based gameplay

- Convert the game into a React application

## Challenges

One challenge was managing the game state while ensuring the UI updated correctly. In particular, synchronizing the hidden word display with the user's guessed letters required careful logic to ensure that letters appeared in the correct positions.

Another challenge was preventing repeated guesses. I solved this by disabling letter buttons once they were selected and maintaining a record of guessed letters.



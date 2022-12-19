# Shift7 Digital Take-home README

### Overview

The objective of this project was to implement a pre-designed header and navigation interface using a front-end framework of my choice. My focus was on accurately reproducing the design and ensuring proper functionality of the elements.

### Usage
To install and run this project, you'll need to have node installed.

To install the dependencies of the project:
```sh
npm install
```
To start the development server:
```sh
npm run dev
```
This will serve the application, and the revelant URL will be outputted to the server console.

### Approach
To begin this project, I first reviewed all the required documents and instructions. This allowed me to create a diagram that broke down the proposed application into individual elements. Using this diagram, I was able to develop a clear idea of the necessary components and directory structure that I would need to create.

One challenge I faced was figuring out how to handle the layers of navigation within the mobile menu. For general navigation, I created a JSON document containing nested arrays of objects with destination information. This allowed me to render the navigation elements in a specific order. However, this structure presented a problem when it came to conditionally rendering the mobile navigation menu, as I was unable to easily look up a destination's subarray using its "name.”

To handle navigation, I implemented a linked list where the head was the level 0 array. When visiting a new layer, the application set the destination's subarray as the current array to render and added a new node to the linked list. To go back a layer, the application revisits the previous node and renders the new current layer as needed.

### Deployment

[Deployed application](https://fluffy-truffle-b7d1eb.netlify.app/)

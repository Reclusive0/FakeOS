# FakeOS Project - David Neill

Hi there! This was a fairly rudimentary attempt at replicating the look and feel of Windows 98 in a modern browser. The first computer I ever used ran Windows 98 so it has a special place in my heart, and was lost to a virus which I have humorously recreated here. Doom is only broken because I couldn't find a simple implementation online that both retained the "Old OS" immersion and also played nice with HTML iframes (also, each time I found a version to test I just ended up playing Doom). When I have some more time to dedicate to this project, that's number one on the list.

Courtesies

- Font is W95FA https://www.dafont.com/w95fa.font
- Icons courtesy of Alex Meub https://win98icons.alexmeub.com/
- Uses the 98.css stylesheet by jdan https://jdan.github.io/98.css/

# TODO

- Successfully implement DOOM!
- Fix that bloody text wrapping on the start menu.
- See how far I can push modals in vanilla JS with some other small apps.

### MVP

- You will be creating an SPA (Single Page Application)
- Desktop has a wallpaper that fits the viewport
- There will be selectable icons
- Selecting an icon will open an "app", creating a _modal_ to display some content
- Able to close an app
- There will be a selectable menu
- Selecting the menu will display a list of text and icons
- The current time is displayed somewhere

## MVP:

### HTML/SCSS

- Wallpaper scales to fit the viewport
- Minimum 3 icons on desktop
- The menu is positioned in the appropriate place (bottom left on windows, top of the screen on android)
- Apps look consistent
- Menu contains a flex with content inside it
- Apps should be able to contain text, an image or a form

### JavaScript

- Put your js code into separate files
- Your icons and menu should add event listener for the click event, don't use the html onclick attribute
- Give your functions and variables good names
- Use the arrow syntax to declare functions

### Github

- Create a repo on github with a README
- Clone Repo
- Create and checkout develop branch
- Push all changes to your develop branch
- When submitting create a pull request from develop into main for review
- Add coach as a reviewer

## Hints

- Split your js logic/data modules from your js DOM modules
- Look at the position css property, specifically _fixed_ and _absolute_
- Pay attention to your hierarchy of elements in your html
- Create your modals using JS and DOM interaction
- Make your life easy! You don't need to recreate everything, just do the features and mvp mentioned above

### Useful Resources:

- [Cutting a Monster Project Down to a Manageable Size](https://www.informit.com/articles/article.aspx?p=2153472)

- [Is Your Code DRY or WET?](https://dzone.com/articles/is-your-code-dry-or-wet#:~:text=DRY%20code%20is%20a%20software,t%20adhere%20to%20DRY%20principle.)
- [What are Pure Functions and Side Effects in JavaScript?](https://blog.greenroots.info/what-are-pure-functions-and-side-effects-in-javascript)
  --------------------------------------------`

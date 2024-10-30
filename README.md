# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Documentation

### Implementation Choices

1. **React with TypeScript**:
   - We chose React for its component-based architecture, which allows for reusable and maintainable code.
   - TypeScript was used to add static typing, which helps catch errors early and improves code quality.

2. **Tailwind CSS**:
   - Tailwind CSS was used for styling due to its utility-first approach, which allows for rapid and consistent styling.
   - Custom configurations were added to Tailwind to support specific design requirements, such as custom widths and hover effects.

3. **Component Structure**:
   - The project is structured into reusable components such as `Header`, `HeroSection`, `FeaturedBooks`, `Testimonials`, and `Footer`.
   - Each component is responsible for a specific part of the UI, making the codebase easier to manage and extend.

4. **Responsive Design**:
   - The layout is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.
   - Tailwind's responsive utilities were used to achieve this.

5. **Accessibility**:
   - Best practices for accessibility were followed, including semantic HTML and ARIA attributes where necessary.
   - The color contrast and focus states were considered to ensure the site is usable for all users.

### Challenges Faced

1. **Custom Hover Effects**:
   - Implementing custom hover effects with different scale values for the x and y axes required extending Tailwind CSS with custom utilities.
   - This involved adding custom CSS in the `src/index.css` file and configuring Tailwind to recognize the new classes, but after i decided to not moving on with this solution.

2. **Responsive Layouts**:
   - Ensuring that the layout works well on various screen sizes required careful use of Tailwind's responsive utilities.
   - Testing on different devices and screen sizes was necessary to ensure a consistent experience.

3. **Form Handling**:
   - Implementing the newsletter signup form in the footer required handling form validation and submission.
   - Ensuring the form is accessible and provides feedback to users was a key consideration.

Overall, the project was a great opportunity to apply modern web development practices using React, TypeScript, and Tailwind CSS. The challenges faced were valuable learning experiences that helped improve the implementation.
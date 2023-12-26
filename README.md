# Frontend Mentor - Multi-step form solution

This is a solution to the
[Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen
  size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL:
  [https://github.com/ofcljaved/multi-step-form](https://github.com/ofcljaved/multi-step-form)
- Live Site URL:
  [https://multi-step-form-ofcljaved.vercel.app/](https://multi-step-form-ofcljaved.vercel.app/)

## My process

Visualized form layout and components in Excalidraw, initiating design based on
the layout. Employed a dynamic data approach using an array for flexibility.

Opted to store form state in the URL for easy navigation. Utilized React Hook
Form for seamless handling of uncontrolled inputs and integrated Zod for robust
validation.

Implemented error handling, navigation controls, and a progress indicator for
enhanced user experience. Decided on a submission strategy, allowing users to
submit at each step or at the end.

Prioritized testing, accessibility, and potential performance optimizations for
a well-rounded multistep form solution.

### Built with

- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Typescript](https://www.typescriptlang.org/) - JS Superset
- [React-hook-form](https://react-hook-form.com/) - For form handler
- [Zod](https://zod.dev/) - For schema validation

### What I learned

In the course of this project, I gained valuable insights into leveraging
`react-hook-form` effectively, particularly in managing multiple nested
components through `FormProvider`. The experience deepened my understanding of
structuring forms in React.

Furthermore, I delved into the world of validation by integrating `Zod`,
mastering the art of crafting robust validation logic. This not only enhanced
data integrity but also contributed to a more user-friendly form experience.

On the development front, I successfully built reusable components such as
custom input fields, radio buttons, checkboxes, and buttons. This not only
improved code maintainability but also allowed for a consistent and cohesive
design across the entire form.

Overall, this project provided a rich learning experience in form management,
validation strategies, and the creation of reusable components in a React
environment.

```ts
const PlanSchema = z.object({
  name: z.string().min(1, 'Name is Required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required').max(11),
  plan: z.string().min(1, 'This is required'),
  yearlyPlan: z.boolean(),
  onlineService: z.boolean().optional(),
  largerStorage: z.boolean().optional(),
  customizableProfile: z.boolean().optional(),
});
```

### Continued development

I'm dedicated to further mastering TypeScript for more efficient project
development. Ongoing learning will focus on exploring advanced features, best
practices, and patterns, ensuring a solid foundation for future projects.
Exciting challenges await, and enhancing my TypeScript skills remains a key goal
for professional growth.

### Useful resources

- [FormProvide Docs](https://react-hook-form.com/advanced-usage#FormProviderPerformance) -
  This helped me for stoppinf prop drilling. I really liked this pattern and
  will use it going forward.
- [Reusable Components](https://youtu.be/BSaYsHVpaK0?si=pQPt2sctHCQALxbu) - This
  is an amazing video to master react components building like production grade
  applications.

## Author

- Website - [ofcljaved](https://ofcljaved.github.io/findjaved/)
- Frontend Mentor -
  [@Ofcl-Javed](https://www.frontendmentor.io/profile/Ofcl-Javed)
- Twitter - [@ofcljaved](https://www.twitter.com/ofcljaved)


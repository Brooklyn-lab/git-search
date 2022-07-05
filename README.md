1. Не реализован вывод колличества репозиториев на странице юзеров. Я пересмотрел всю доку, возможно, реализация по параметрам, для получения есть, но к сожалению, я не нашел. Я получаю список юзеров по логину, можно также по имени изменив один параметр. Получить колличество репозиториев у конкретного юзера при этом запросе не могу, поэтому, есть вариант после получения юзеров делать по каждому запрос и после получения всех ответов выдавать результат на странице, но это полная ерунда как по мне, из-за такого количества запросов, так как на одно слово brooklyn найдет порядком 1200 пользователей. 
2. Поиск обычно реализовываю через дебаунс, чтобы избежать лишних запросов. Но в ТЗ было четко указано, что нужно при вводе каждого символа делать запрос. Что и реализовал. 
3. Поиск между репозиториями, которые мы ранее получили при загрузке страницы реализовал прямо в компоненте, чтобы показать, что можно и так, так как компонент более ни где не использую, сделал реализацию без Redux. Но в главном, сделал с Redux, чтобы показать и обратную реализацию.
4. Сам поиск, а именно фильтрацию, хорошо бы осуществлять через backend. Опять же, не нашел api, которое позволило бы и делать поиск по репозиториям и это делать у конкретного юзера. Поэтому реализовал на фронте.
5. Тесты на приложение не писал, так как не было указано в стеке и в ТЗ. Хотя с помощью Jest и React Testing Library мог бы покрыть, правда заняло бы время.

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

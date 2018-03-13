import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePge from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ColorsPage from './components/colors/ColorsPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePge}></IndexRoute>
    <Route path="about" component={AboutPage}></Route>
    <Route path="courses" component={CoursesPage}></Route>
    <Route path="course" component={ManageCoursePage}></Route>
    <Route path="course/:id" component={ManageCoursePage}></Route>
    <Route path="colors" component={ColorsPage}></Route>
  </Route>
);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Projects from './Components/Projects';
import Todos from './Components/Todos';
import Posts from './Components/Posts';
import PostForm from './Components/PostForm';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import { Provider } from 'react-redux';
import store from './store'
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ todos: data })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err)
      }
    })
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business',
          category: 'work',
          descritption: 'number 1'
        },
        {
          id: uuid.v4(),
          title: 'shopping',
          category: 'hobby',
          descritption: 'number 2'
        }
      ]
    });
  }
  componentWillMount() {
    this.getProjects();
  }

  componentDidMount() {
    this.getTodos();
  }
  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);

    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1);

    this.setState({ projects: projects });
  }
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
          <AddProject addProject={this.handleAddProject.bind(this)} />
          <p className='App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />

          <hr />
          <Todos todos={this.state.todos} />

        </div>
      </Provider>
    );
  }
}

export default App;

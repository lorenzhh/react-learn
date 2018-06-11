import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }
    static defaultProps = {
        categories: ['work', 'hobby']
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.refs.title.value === '') {
            alert('Title must be given');
        }
        else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, () => this.props.addProject(this.state.newProject))
        }
    }
    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });

        return (
            <div className="Projects" >
                <h3>
                    Add Project
                </h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" />
                    </div>
                    <label>Category</label><br />
                    <select ref="category">
                        {categoryOptions}
                    </select>
                    <input type="submit" value="add it now!" />
                </form>
            </div>
        );
    }
}

AddProject.propTypes = {
    categories: PropTypes.array,
    addProject: PropTypes.func
}
export default AddProject;

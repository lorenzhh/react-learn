import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    deleteProject(id) {
        this.props.onDelete(id)
    }
    render() {
        return (
            <li className="Project">
                {this.props.project.id} - {this.props.project.title} - {this.props.project.category}
                <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}> X </a>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}

export default ProjectItem;

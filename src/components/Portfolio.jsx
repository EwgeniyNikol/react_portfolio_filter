import { Component } from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import projects from '../data/projects'

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.filters = ['All', 'Websites', 'Flayers', 'Business Cards']
    this.state = {
      selected: 'All',
    }
  }

  onSelectFilter = (filter) => {
    this.setState({ selected: filter })
  }

  getFilteredProjects = () => {
    if (this.state.selected === 'All') {
      return projects
    }
    return projects.filter((p) => p.category === this.state.selected)
  }

  render() {
    return (
      <div className="portfolio">
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.getFilteredProjects()} />
      </div>
    )
  }
}

export default Portfolio
import React from 'react';
import { connect } from 'react-redux';
import { fetchSite, updateExistSite } from '../../../actions/site_actions';

class SiteEdit extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {name: this.props.site.name, description: this.props.site.description, capacity: this.props.site.capacity, price: this.props.site.price }
    this.state = this.props.site
    this.nextForm = this.nextForm.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
  }

  finishEdit() {
    this.props.updateSite(this.state)
    location.href=`/#/sites/${this.state.id}`
  }

  nextForm() {
    this.props.updateSite(this.state)
    location.href=`/#/site_edit_location/${this.state.id}`
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    })
  }

  componentDidMount() {
    this.props.fetchSite(this.props.match.params.siteId);
  }


  render() {
    let next;
    if (this.state.name === "" || this.state.description === "" || this.state.capacity <= 0 || this.state.price <= 0) {
      next = <button className="site-button-incomplete">Not Done</button>
    } else {
      next = 
      <>
        <button className = "site-button-complete" onClick ={this.finishEdit}>Finish Editing</button>
        <button className="site-button-complete" onClick={this.nextForm}>Continue Editing</button>
      </>
    }
    return (
      <div className="site-form">
        <h2 className="site-header">
          Tell us about your site!
            </h2>
        <input
          type="text"
          className="site-input"
          value={this.state.name}
          onChange={this.update("name")}
          placeholder="Site Name"
        />
        <textarea
          value={this.state.description}
          className="site-input"
          onChange={this.update("description")}
          placeholder="Site Description"
        />
        <div className="site-nums">
          <input
            type="number"
            className="site-cap"
            min="0"
            value={this.state.capacity}
            onChange={this.update("capacity")}
          />
          <input
            type="number"
            className="site-cap"
            min="0"
            value={this.state.price}
            onChange={this.update("price")}
          />
        </div>
        <br />
        {next}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    site: state.entities.sites[ownProps.match.params.siteId]
  }
}

const mapDispatchToProps = dispatch => ({
  updateSite: (site) => dispatch(updateExistSite(site)),
  fetchSite: (id) => dispatch(fetchSite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteEdit);
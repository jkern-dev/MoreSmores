import React from 'react';
import { connect } from 'react-redux';
import { fetchSite, updateExistSite } from '../../../actions/site_actions';

class SiteEditLocation extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.site 
    this.nextForm = this.nextForm.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
    this.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
  }

  finishEdit() {
    this.props.updateSite(this.state)
    location.href = `/#/sites/${this.state.id}`
  }

  nextForm() {
    this.props.updateSite(this.state)
    location.href = `/#/site_edit_activity/${this.state.id}`
  }

  update(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    })
  }

  renderStateItem(state) {
    if (state === this.state.state ) {
      return (<option key={state} value={state} selected>{state}</option>)
    } else {
      return (<option key={state} value={state}>{state}</option>)
    }
  }

  componentDidMount() {
    this.props.fetchSite(this.props.match.params.siteId);
  }

  render() {
    let next;
    if (this.state.latitude === "" || this.state.longitude === "" || this.state.state === "" || this.state.city === "") {
      next = (
        <button className="site-button-incomplete">
          No Fields Can Be Blank
        </button>
      );
    } else {
      next =
        <>
          <button className="site-button-complete" onClick={this.finishEdit}>Finish Editing</button>
          <button className="site-button-complete" onClick={this.nextForm}>Continue Editing</button>
        </>
    }
    return (
      <div className="site-form">
        <h2 className="site-header">Where is your site?</h2>
        <label>
          State:
              <select
            className="state-list"
            onChange={this.update("state")}
          >
            {this.states.map(state => this.renderStateItem(state))}
          </select>
        </label>
        <input
          type="text"
          placeholder="City"
          className="site-input"
          value={this.state.city}
          onChange={this.update("city")}
        />
        <br />
        <input
          type="text"
          placeholder="latitude"
          className="site-input"
          value={this.state.latitude}
          onChange={this.update("latitude")}
        />
        <br />
        <input
          type="text"
          placeholder="longitude"
          className="site-input"
          value={this.state.longitude}
          onChange={this.update("longitude")}
        />
        <br />
        {next}
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    site: state.entities.sites[ownProps.match.params.siteId]
  }
}

const mapDispatchToProps = dispatch => ({
  updateSite: (site) => dispatch(updateExistSite(site)),
  fetchSite: (id) => dispatch(fetchSite(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteEditLocation)
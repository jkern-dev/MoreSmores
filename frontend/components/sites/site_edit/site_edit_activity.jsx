import React from 'react';
import { connect } from 'react-redux';
import { fetchSite, updateExistSite } from '../../../actions/site_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SiteEditActivity extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.site 
    this.nextForm = this.nextForm.bind(this)
    this.finishEdit = this.finishEdit.bind(this)
    this.state = {
        site: this.props.site,
        arr: [
                { type: "hike_activity", active: this.props.site.hike_activity, icon: "hiking", title: "Hiking" },
                { type: "bike_activity", active: this.props.site.bike_activity, icon: "bicycle", title: "Biking" },
                { type: "fire_allowed", active: this.props.site.fire_allowed, icon: "fire", title: "Campfire" },
                { type: "rv_allowed", active: this.props.site.rv_allowed, icon: "bus", title: "RV Parking" },
                { type: "pet_allowed", active: this.props.site.pet_allowed, icon: "dog", title: "Pets" }
              ]
    }
  }

  finishEdit() {
    let newSite = this.state.site;
    this.state.arr.map(act => {
      newSite[act.type] = act.active
    })
    this.props.updateSite(newSite)
    location.href = `/#/sites/${this.state.site.id}`
  }

  nextForm() {
    let newSite = this.state.site;
    this.state.arr.map(act => {
      newSite[act.type] = act.active
    })
    this.props.updateSite(newSite)
  }

  update(type) {
    return e => this.setState({
      [type]: !this.state[type]
    })
  }

  toggle(index) {
    let arr = this.state.arr;
    arr[index].active = !arr[index].active;
    this.setState({ arr: arr });
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
          <button className="site-button-complete" onClick={this.finishEdit}>Finish Editing</button>
          <button className="site-button-complete" onClick={this.nextForm}>Continue Editing</button>
        </>
    }
    
    let activities = this.state.arr.map((act, i) =>
      <div key={i} className={act.active ? "site-activity-green" : "site-activity-grey"} onClick={() => this.toggle(i)}><span className="fire-icon"><span className="act-heading">{act.title}</span><FontAwesomeIcon icon={act.icon} /></span></div>
    )

    return (
      <div className="site-form">
        <h2 className="site-header">What amentities are closeby?</h2>
        <div className="site-options">
          {activities}
        </div>
        {next}
      </div>
    )
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

export default connect(mapStateToProps,mapDispatchToProps)(SiteEditActivity);
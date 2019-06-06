import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
library.add(faExclamationTriangle);

import GreetingContainer from './greeting/greeting_container';
import SitesIndexContainer from './sites/sites_index_container';
import SitesSearchContainer from './sites/sites_search_container';
import Footer from './footer';

// Create Site Form
import SiteForm from './sites/site_create/site_form';
import SiteLocation from './sites/site_create/site_location';
import SiteActivities from './sites/site_create/site_activities';
import SitePhoto from './sites/site_create/site_photo';

//Edit Site Form
import SiteEdit from "./sites/site_edit/site_edit_form";
import SiteEditLocation from "./sites/site_edit/site_edit_location";
import SiteEditActivity from "./sites/site_edit/site_edit_activity";

//Booking Form
import BookingContainer from './bookings/booking_container';
import BookingIndexContainer from './bookings/booking_index_container';
import SiteShowContainer from './sites/site_show_container';
import Splash from './splash';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="body">
    <GreetingContainer />
    <Switch>
      <Route 
        path="/sites/:id" 
        component={SiteShowContainer} 
      />
      <Route 
        exact 
        path = "/search/:search"
        component= { SitesSearchContainer}
      />
      <Route 
        exact 
        path="/sites/" 
        component={SitesIndexContainer} 
      />
      <ProtectedRoute
        exact
        path="/book_now/:siteId"
        component={BookingContainer}
      />
      <ProtectedRoute 
        exact
        path = "/bookings/:userId"
        component = {BookingIndexContainer}
      />
      <ProtectedRoute 
        exact 
        path="/site_create/" 
        component={SiteForm} 
      />
      <ProtectedRoute
        exact
        path="/site_create/location"
        component={SiteLocation}
      />
      <ProtectedRoute
        exact
        path="/site_create/activities"
        component={SiteActivities}
      />
      <ProtectedRoute 
        exact
        path="/site_create/photo" 
        component={SitePhoto} 
      />
      <ProtectedRoute 
        exact 
        path="/site_edit/:siteId" 
        component={SiteEdit} 
      />
      <ProtectedRoute
        exact
        path="/site_edit_location/:siteId"
        component={SiteEditLocation}
      />
      <ProtectedRoute
        exact
        path="/site_edit_activity/:siteId"
        component={SiteEditActivity}
      />
      <Route 
        exact 
        path="/" 
        component={Splash} 
      />
      <Redirect to="/" />
    </Switch>
    <div>
      <Footer />
    </div>
  </div>
);

export default App;
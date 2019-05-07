import React from 'react';
import { connect } from 'react-redux';
import { fetchSite, updateExistSite } from '../../../actions/site_actions';


class SiteEditPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.site;
    this.finishEdit = this.finishEdit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  
}
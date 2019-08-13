import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile } from '../../../actions/profileAction';
import TextFieldGroup from '../../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      street:     '',
      suite:      '',
      city:       '',
      zipcode:    '',
      lat:        '',
      lng:        '',
      phone:      '',

      website:    '',
      name:       '',
      catchPhrase:'',
      bs:         '',
      errors:     {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
        street:     this.state.street,
        suite:      this.state.suite,
        city:       this.state.city,
        zipcode:    this.state.zipcode,
        lat:        this.state.lat,
        lng:        this.state.lng,
        phone:      this.state.phone,
  
        website:    this.state.website,
        name:       this.state.name,
        catchPhrase:this.state.catchPhrase,
        bs:         this.state.bs,
    };

    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="display-4 text-center">Profile Setting</h1>
              <p className="lead text-center">
                Set your profile account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <label>Address</label>
                <TextFieldGroup
                  placeholder="Street"
                  name="street"
                  value={this.state.street}
                  onChange={this.onChange}
                  error={errors.street}
                />
                <TextFieldGroup
                  placeholder="suite"
                  name="suite"
                  type="text"
                  value={this.state.suite}
                  onChange={this.onChange}
                  error={errors.suite}
                />
                <TextFieldGroup
                  placeholder="City"
                  name="city"
                  type="text"
                  value={this.state.city}
                  onChange={this.onChange}
                  error={errors.city}
                />

                <TextFieldGroup
                  placeholder="Zipcode"
                  name="zipcode"
                  value={this.state.zipcode}
                  onChange={this.onChange}
                  error={errors.zipcode}
                />
                Geo Loacation
                <TextFieldGroup
                  placeholder="lat"
                  name="lat"
                  type="text"
                  value={this.state.lat}
                  onChange={this.onChange}
                  error={errors.lat}
                />
                <TextFieldGroup
                  placeholder="lng"
                  name="lng"
                  type="text"
                  value={this.state.lng}
                  onChange={this.onChange}
                  error={errors.lng}
                />
                <TextFieldGroup
                  placeholder="phone"
                  name="phone"
                  type="Number"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                />

                <TextFieldGroup
                  placeholder="website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                />
                <label>Company</label>
                <TextFieldGroup
                  placeholder="Company name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="catchPhrase"
                  name="catchPhrase"
                  type="text"
                  value={this.state.catchPhrase}
                  onChange={this.onChange}
                  error={errors.catchPhrase}
                />
                <TextFieldGroup
                  placeholder="bs"
                  name="bs"
                  type="text"
                  value={this.state.bs}
                  onChange={this.onChange}
                  error={errors.bs}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(withRouter(Register));

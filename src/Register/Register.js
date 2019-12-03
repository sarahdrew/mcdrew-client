import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <>
                <div className="headline">
                    <h3>Register for the McDrew</h3>
                </div>
                <div className="total-registration-form">
                    <form
                        className='RegistrationForm'
                    // onSubmit={this.handleSubmit}
                    >

                        <div className="alert" role='alert'>
                            {/* {error && <p className='red'>{Object.keys(error)}</p>} */}
                        </div>
                        <div className="choice">Which Event?</div>
                        <div className="bags_tennis">

                            <div className="bags-radio">
                                <label htmlFor="bags_tennis">Bags   </label>
                                <input
                                    type='radio'
                                    name='bags_tennis'
                                    required
                                    id='RegistrationForm__bags'
                                    value="bags" />

                            </div>
                            <div className="tennis-radio">
                                <label htmlFor="tennis_tennis">       tennis</label>
                                <input
                                    type='radio'
                                    name='bags_tennis'
                                    required
                                    id='RegistrationForm__tennis'
                                    value="tennis" />

                            </div>
                        </div>

                        <div className='name'>
                            <label htmlFor='RegistrationForm__name'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                required
                                id='RegistrationForm__name' />

                        </div>
                        <div className='partner_name'>
                            <label htmlFor='RegistrationForm__name'>
                                Partner's Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                required
                                id='RegistrationForm__name' />

                        </div>
                        <div className='email'>
                            <label htmlFor='RegistrationForm__email'>
                                Email
                            </label>
                            <input
                                type='text'
                                name='email'

                                required
                                id='RegistrationForm__email' />

                        </div>

                        <button type='submit'> Register</button>
                    </form>
                </div>
            </>
        )
    }
}
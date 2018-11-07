import React from 'react';

export default class Input extends React.Component {

    render() {
        let error, warning;
        if(this.props.meta.touched && this.props.meta.error) error = <div className='form-error'>{this.props.meta.error}</div>;
        if(this.props.meta.touched && this.props.meta.warning) warning = <div className='form-warning'>{this.props.meta.warning}</div>
        
        return(
            <div className='form-input'>
                {error}
                {warning}
                <input {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    ref={input => (this.input = input)} />
            </div>
        );
    }
}
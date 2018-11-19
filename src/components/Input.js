import React from 'react';

export class Input extends React.Component {
    render() {
        let error;
        if(this.props.meta.touched && this.props.meta.error) error = <div className='form-error'>{this.props.meta.error}</div>;
        return(
            <div className='form-input'>
                {error}
                <input {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    ref={input => (this.input = input)} />
            </div>
        );
    }
}
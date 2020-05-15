import React, { Component } from 'react';



export default class Banana extends Component {
    render() {
        return (
            <div>
                <h1>그냥 바나나</h1>
            </div>
        );
    }
};

export class GreenBanana extends Component {
    render() {
        return (
            <div>
                <h1>그린 바나나</h1>
            </div>
        );
    }
}

export class RedBanana extends Component {
    render() {
        return (
            <div>
                <h1>레드 바나나</h1>
            </div>
        );
    }
}
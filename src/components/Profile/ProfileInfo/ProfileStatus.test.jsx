import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='it-kamasutra' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-kamasutra');
    });

    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='it-kamasutra' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.length).toBe(1);
    });

    test('safter create span', () => {
        const component = create(<ProfileStatus status='it-kamasutra' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.innerText).toBe('it-kamasutra');
    });
});

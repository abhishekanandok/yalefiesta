import React from 'react';
import { Button } from '@/components/ui/button';

const GoogleSignInButton = ({ children }) => {
    const loginWithGoogle = () => console.log('login with google');

    return (
        <Button onClick={loginWithGoogle} className=' w-40'>
            {children}
        </Button>
    );
};

export default GoogleSignInButton;

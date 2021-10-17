import React from 'react';
import { Button, Block } from 'components'

const Auth = () => {
    return (
        <section className="auth">
            <div>
                <Block>
                    <Button type="primary" size="large">
                        This is Button!
                    </Button>
                </Block>
            </div>
        </section>

    );
};

export default Auth;
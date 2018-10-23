import React, { Component } from 'react';
import styled from 'styled-components';

import { bbOrange, buttonBackground, buttonText, buttonHover, text } from 'style/colors';

const Root = styled.section`
    &#hero {
        background: inherit;

        .buttons {
            .trial {
                background-color: ${bbOrange[500]};
                &:hover {
                    background-color: ${bbOrange[800]};
                }
            }

            .learn-more {
                background-color: ${buttonBackground};
                color: ${buttonText};
                &:hover {
                    background-color: ${buttonHover};
                }
            }
        }

        .hero-text {
            color: ${text};

            h1 {
                color: inherit;
                text-shadow: none;
            }

            p {
                text-shadow: none;
            }
        }
    }
`;

class Hero extends Component {
    componentDidMount() {
        const { jQuery } = window;

        jQuery('h1.responsive-headline').fitText(1.2, { minFontSize: '25px', maxFontSize: '40px' });
    }

    render() {
        return (
            <Root id="hero">
                <div className="row">
                    <div className="twelve columns">
                        <div className="hero-text">
                            <h1 className="responsive-headline">
                                We&apos;ve all been there: you are ready to merge your PR on master,
                                but you&apos;re not the only one.
                            </h1>
                            <p>
                                And it begins again, the neverending merge race.<br />
                                If you win, you can merge your PR and go on with your day.<br />
                                If you lose, you’ve to rebase, wait for the CI checks to run again
                                and hope to be ready before anyone else.
                            </p>
                            <p>What if you could always win this race? Get <strong>Branch Bookeeper</strong>!</p>
                        </div>

                        <div className="buttons">
                            <a className="button trial" href="https://get.branch-bookkeeper.com">Install Now</a>
                            <a className="button learn-more smoothscroll" href="#how-it-works">Learn More</a>
                        </div>

                        <div className="hero-image">
                            <img src="images/hero-image-2.png" alt="" />
                        </div>
                    </div>
                </div>
            </Root>
        );
    }
}

export default Hero;

import React from 'react';

const navBarHeight = 50;
const divider = 5;
const title = 45;
const containerBoxHeight = window.innerHeight - navBarHeight - divider;
const containerFotterHeight = (window.innerHeight - 50) * 0.2;

export default {
    screen: {
        height: '100vh',
        minHeight: '100vh',
    },
    container: {
        padding: '20px 0 0 0',
    },
    appIconContainer: {
        textAlign: 'center',
    },
    appIcon: {
        width: '128px',
        height: '128px',
    },
    appTitleContainer: {
        textAlign: 'center',
        fontFamily: 'PingFang-SC-Regular',
        fontSize: 32,
        marginBottom: 0,
    },
    appSubTitleContainer: {
        textAlign: 'center',
        fontFamily: 'PingFang-SC-Light',
        fontSize: 20,
    },
    appFooterContainer: {
        marginTop: '35px',
    },
    appFooterLeftSection: {
        textAlign: 'left',
        marginLeft: '25px',
    },
    appFooterRightSection: {
        textAlign: 'right',
        marginRight: '25px',
    },
    AboutDialog: {
        fontFamily: 'PingFang-SC-Regular',
        width: '600px',
    },
    actionContainer: {
        marginTop: '50px',
    },
    actionButton: {
        width: window.innerWidth / 3,
    },
    aboutLogoContainer: {
        textAlign: 'center',
    },
    aboutLogo: {
        width: '300px',
    },
    aboutVersionInfo: {
        marginTop: '45px',
        fontFamily: 'PingFang-SC-Bold',
        fontSize: 12,
    },
};

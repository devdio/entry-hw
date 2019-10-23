import React from 'react';
import Styled from 'styled-components';
import withPreload from '../../hoc/withPreload';
import { IMapDispatchToProps } from '../../store';
import { LICENSE_VIEW_TOGGLE } from '../../store/modules/common';
import { connect } from 'react-redux';

const FooterContainer = Styled.div`
    flex: none;
    width: 100%;
    height: 60px;
    background-position: 30px 15px;
    background-repeat: no-repeat;
    background-image: url('../images/logo.png');
    background-color: white;
`;

const VersionLabel = Styled.div`
    text-align: right;
    margin: 20px 20px 20px 10px;
    color: #595757;
    cursor: pointer;
    font-weight: bold;
    float: right;
`;

const OpenSourceLabel = Styled.div`
    text-align: right;
    margin: 20px 10px 20px 20px;
    color: #595757;
    cursor: pointer;
    font-weight: bold;
    float: right;
`;

const Footer: React.FC<Preload & IDispatchProps> = (props) => {
    const { translator, showLicenseView } = props;
    return (
        <FooterContainer>
            <VersionLabel id="version_label">
                {translator.translate('Version Info')}
            </VersionLabel>
            <OpenSourceLabel
                id="opensource_label"
                onClick={() => {
                    showLicenseView();
                }}
            >
                {translator.translate('Opensource lincense')}
            </OpenSourceLabel>
        </FooterContainer>
    );
};


interface IDispatchProps {
    showLicenseView: () => void;
}

const mapDispatchToProps: IMapDispatchToProps<IDispatchProps> = (dispatch) => ({
    showLicenseView: () => dispatch({ type: LICENSE_VIEW_TOGGLE, payload: true }),
});

export default connect(undefined, mapDispatchToProps)(withPreload(Footer));

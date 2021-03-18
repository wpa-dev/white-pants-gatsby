import React from 'react';
import PropTypes from 'prop-types';
import Bolt from 'images/bolt.svg'

import { FooterSection, SpacingSection, FixedContainer, Column, TextBox, Title, CompanyInfo } from './footer.css';

function MailTo ({ email, subject = '', body = '', children }) {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

MailTo.proptypes = {
  email: PropTypes.string.isRequired
}

function Phone ({ number, children }) {
  return <a href={`tel:${number}`}>{children}</a>
}

const Footer = () => (
  <>
    <SpacingSection>
    </SpacingSection>
    <FooterSection>
      <FixedContainer>
        <Column>
          <TextBox><Title>Create With Us</Title></TextBox>
          <TextBox>
            <MailTo email="info@whitepantsagency.com" subject="Hello White Pants!">info@whitepantsagency.com</MailTo>
            <Phone number="123-456-7890">123-456-7890</Phone>
          </TextBox>
          <TextBox><CompanyInfo>© {new Date().getFullYear()} White Pants Agency, Dallas, TX</CompanyInfo></TextBox>
        </Column>
      </FixedContainer>
    </FooterSection>
  </>
)

export default Footer;
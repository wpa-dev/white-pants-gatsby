import React from 'react';
import PropTypes from 'prop-types';
import { Section, SpacingSection, FixedContainer, Column, TextBox, Title, CompanyInfo } from './footer.css';

function MailTo ({ email, subject = '', body = '', children }) {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const Footer = () => (
  <>
    <SpacingSection>
    </SpacingSection>
    <Section>
      <FixedContainer>
        <Column>
          <TextBox><Title>Create With Us</Title></TextBox>
          <TextBox>
            <MailTo email="info@whitepantsagency.com" subject="Hello White Pants!">info@whitepantsagency.com</MailTo>
            <p>123-456-7890</p>
          </TextBox>
          <TextBox><CompanyInfo>© {new Date().getFullYear()} White Pants Agency, Dallas, TX</CompanyInfo></TextBox>
        </Column>
      </FixedContainer>
    </Section>
  </>
)

export default Footer;
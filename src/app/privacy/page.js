'use client';

import Parser from 'html-react-parser';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// import OgGraph from '../../components/OgGraph';
import RouteLabelTabs from '../../components/RouteLabelTabs';
// import StaticPageLayout from '../../components/StaticPageLayout';
import { StyledPrivacy } from '../../components/StyledPages';
import { ThemeProvider } from 'styled-components';
// import backersBeliversData from './backersBeliversData';
import theme from '../../utils/theme';
// import { clientSideUri } from '../../utils/constants/app_config';

import { privacyData, termsServicesData } from '../../assets/data';

const routerTabs = [
  { value: 'privacy_policy', label: 'Privacy Policy' },
  { value: 'terms_services', label: 'Terms of Services' }
];

const Privacy = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(
    router.pathname === '/privacy'
      ? {
        value: 'privacy_policy',
        label: 'Privacy Policy'
      }
      : { value: 'terms_services', label: 'Terms of Services' }
  );

  const onTabChange = activeKey => {
    let result = routerTabs.filter(x => x.label === activeKey);
    setActiveTab({ value: result[0].value, label: activeKey });
  };

  function handleTabChange() {
    let result = routerTabs.filter(x => x.label !== activeTab.label);
    setActiveTab(result[0]);
  }
  useEffect(() => {
    if (activeTab.value == 'privacy_policy') {
      setData(privacyData);
    }
    if (activeTab.value == 'terms_services') {
      setData(termsServicesData);
    }
  }, [activeTab]);

  useEffect(() => {
    const goToTerms = document.getElementById('go_to_terms');
    goToTerms?.addEventListener('onclick', handleTabChange);
    return () => {
      goToTerms?.removeEventListener('onclick', () => { });
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <StyledPrivacy>
          <RouteLabelTabs
            tabs={routerTabs}
            activeTab={activeTab}
            onTabChange={onTabChange}
          />
          {data?.map((item, index) => {
            return (
              <div key={index}>
                {item?.title && <h4>{Parser(item?.title)}</h4>}
                {item?.content && <p>{Parser(item?.content)}</p>}
              </div>
            );
          })}
        </StyledPrivacy>
      </ThemeProvider>
    </>
  );
};

export default Privacy;
